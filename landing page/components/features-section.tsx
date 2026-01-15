import { Card } from "@/components/ui/card"
import { Zap, Users, BarChart3, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing fast performance with our optimized infrastructure. Process millions of operations in seconds.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time collaboration tools. Share feedback, iterate faster, and stay aligned.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your workflow with comprehensive analytics dashboards. Make data-driven decisions with confidence.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security standards. Your data is protected with SOC 2 Type II compliance and regular audits.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 py-24 md:py-32">
      <div className="mb-16 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Everything you need to succeed
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
          Powerful features designed for modern teams
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="border-border p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
