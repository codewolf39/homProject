import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Code, LineChart, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast Performance",
      description:
        "Optimized solutions that ensure your applications run at peak performance.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Clean Code",
      description:
        "Well-structured, maintainable code that follows best practices and industry standards.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Analytics",
      description:
        "Comprehensive analytics to track performance and user engagement.",
    },
  ];

  return (
    <section
      id="services"
      className="flex justify-center items-center w-full py-12 md:py-24 lg:py-32 bg-yellow-100"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
              We provide a range of services to help your business succeed in
              the digital world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background hover:shadow-lg transition-all duration-200"
            >
              <CardHeader className="flex flex-col items-center justify-center pb-2">
                {service.icon}
                <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
