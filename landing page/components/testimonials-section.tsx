import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "StreamLine completely transformed how our team works. We've cut our project delivery time in half and collaboration has never been easier.",
    author: "Sarah Chen",
    role: "CEO at TechVision",
    avatar: "/professional-woman-diverse.png",
    initials: "SC",
  },
  {
    quote:
      "The automation features are a game-changer. What used to take us hours now happens automatically. Our team can focus on what really matters.",
    author: "Michael Rodriguez",
    role: "Operations Director at InnovateCo",
    avatar: "/professional-man.jpg",
    initials: "MR",
  },
  {
    quote:
      "Best investment we've made this year. The analytics dashboard gives us insights we never had before, and the ROI has been incredible.",
    author: "Emily Thompson",
    role: "VP of Product at DataFlow",
    avatar: "/professional-woman-smiling.png",
    initials: "ET",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-y border-border bg-muted/50 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
            See what our customers have to say
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border p-6">
              <blockquote className="mb-6 text-pretty leading-relaxed">"{testimonial.quote}"</blockquote>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
