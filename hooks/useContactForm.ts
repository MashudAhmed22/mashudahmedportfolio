'use client'

import { useState } from 'react'

type FormState = { name: string; email: string; message: string }
type Status = { state: 'idle' | 'loading' | 'success' | 'error'; msg: string }

export function useContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>({ state: 'idle', msg: '' })

  const setField = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: 'error', msg: 'Please fill in all fields.' })
      return
    }
    setStatus({ state: 'loading', msg: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      setStatus({ state: 'success', msg: data.message || 'Message sent!' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', msg: (err as Error).message })
    }
  }

  return { form, status, setField, submit }
}