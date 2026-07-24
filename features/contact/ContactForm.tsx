'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, CheckCircle2 } from 'lucide-react'
import { useContactForm } from '@/hooks/useContactForm'


export function ContactForm() {
  const { form, status, setField, submit } = useContactForm()

  return (
    <Card className="bg-foreground/3 border-foreground/10">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-xs text-muted-foreground">Your name</label>
            <Input
              value={form.name}
              onChange={setField('name')}
              placeholder="Mashud Ahmed"
              className="mt-1 bg-muted border-foreground/10"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Email</label>
            <Input
              type="email"
              value={form.email}
              onChange={setField('email')}
              placeholder="mashud@company.com"
              className="mt-1 bg-muted border-foreground/10"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <Textarea
              rows={5}
              value={form.message}
              onChange={setField('message')}
              placeholder="Tell me about your project, role, or idea..."
              className="mt-1 bg-muted border-foreground/10"
            />
          </div>
          <Button
            type="submit"
            disabled={status.state === 'loading'}
            size="lg"
            className="w-full bg-linear-to-r from-violet-500 to-fuchsia-500 hover:opacity-90 text-white border-0"
          >
            {status.state === 'loading' ? 'Sending...' : (<><Send className="h-4 w-4 mr-2" /> Send message</>)}
          </Button>
          {status.state === 'success' && (
            <div className="text-sm text-emerald-600 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> {status.msg}
            </div>
          )}
          {status.state === 'error' && (
            <div className="text-sm text-red-500 dark:text-red-300">{status.msg}</div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}