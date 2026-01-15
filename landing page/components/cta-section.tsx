import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="border-y border-border bg-accent py-24 text-accent-foreground md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Ready to streamline your workflow?
        </h2>
        <p className="mt-6 text-pretty text-lg md:text-xl leading-relaxed opacity-90">
          Join thousands of teams already using StreamLine to work smarter, not harder.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="h-12 bg-background px-8 text-base text-foreground hover:bg-background/90">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 border-accent-foreground/20 px-8 text-base hover:bg-accent-foreground/10 bg-transparent"
          >
            Schedule a Demo
          </Button>
        </div>
        <p className="mt-6 text-sm opacity-75">No credit card required · 14-day free trial · Cancel anytime</p>
      </div>
    </section>
  )
}
