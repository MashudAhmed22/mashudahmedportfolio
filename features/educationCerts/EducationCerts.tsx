import { Reveal } from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

export function EducationCerts() {
  return (
    <section className= "py-24 " id="education-certs">
      <div className= "container grid md:grid-cols-2 gap-6 ">
        <Reveal>
          <Card className= "bg-foreground/[0.03] border-foreground/10 h-full ">
            <CardHeader>
              <div className= "flex items-center gap-3 ">
                <div className= "h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-foreground/10 flex items-center justify-center "><GraduationCap className= "h-5 w-5 text-cyan-500 dark:text-cyan-300 " /></div>
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className= "text-lg font-semibold ">North-Eastern Hill University</div>
              <div className= "text-muted-foreground ">Information Technology · Shillong, Meghalaya</div>
              <div className= "mt-1 text-sm text-muted-foreground ">Graduated 2023</div>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className= "bg-foreground/[0.03] border-foreground/10 h-full ">
            <CardHeader>
              <div className= "flex items-center gap-3 ">
                <div className= "h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-foreground/10 flex items-center justify-center "><Award className= "h-5 w-5 text-amber-500 dark:text-amber-300 " /></div>
                <CardTitle>Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className= "space-y-3 ">
              <div>
                <div className= "font-semibold ">MERN Stack</div>
                <div className= "text-sm text-muted-foreground ">JSpiders Training and Development Center</div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
