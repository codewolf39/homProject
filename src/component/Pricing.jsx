import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹290",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "24/7 support",
        "1GB storage",
      ],
    },
    {
      name: "Pro",
      price: "₹790",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 users",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹1490",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited users",
        "Enterprise-grade analytics",
        "Dedicated support team",
        "Unlimited storage",
        "Custom integrations",
        "Advanced security",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pricing Plans
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your business needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col h-full ${
                plan.popular ? "border-primary shadow-lg" : ""
              }`}
            >
              {/* {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
                    Popular
                  </span>
                </div>
              )} */}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-primary" : ""}`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
