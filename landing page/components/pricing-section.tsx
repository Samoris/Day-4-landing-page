import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting started",
    features: ["Up to 10 team members", "50GB storage", "Basic analytics", "Email support", "Core integrations"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing teams with advanced needs",
    features: [
      "Up to 50 team members",
      "500GB storage",
      "Advanced analytics",
      "Priority support",
      "All integrations",
      "Custom workflows",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations at scale",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-24 md:py-32">
      <div className="mb-16 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
          Choose the plan that's right for your team
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative border-border p-8 ${plan.popular ? "border-2 border-foreground shadow-xl" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="rounded-full bg-foreground px-4 py-1 text-sm font-medium text-background">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
              </div>
            </div>

            <Button className="mb-8 w-full" size="lg" variant={plan.popular ? "default" : "outline"}>
              {plan.cta}
            </Button>

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
