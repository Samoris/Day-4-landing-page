import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground"></span>
          </span>
          <span className="font-medium">New: AI-powered automation is here</span>
        </div>

        <h1 className="max-w-4xl text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          The complete platform to streamline your workflow
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
          Empower your team to collaborate seamlessly, automate repetitive tasks, and scale your business with
          confidence. All in one powerful platform.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 px-8 text-base">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent">
            Watch Demo
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <span>Trusted by innovative teams at</span>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-60 md:gap-12">
          <div className="text-xl font-semibold">TechCorp</div>
          <div className="text-xl font-semibold">InnovateCo</div>
          <div className="text-xl font-semibold">DataFlow</div>
          <div className="text-xl font-semibold">CloudSync</div>
          <div className="text-xl font-semibold">NextGen</div>
        </div>
      </div>
    </section>
  )
}
