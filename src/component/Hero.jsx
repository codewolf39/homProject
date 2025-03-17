import { Button } from "@/components/ui/button"; // Adjust relative path
import "../index.css"; // Ensure Tailwind CSS is included
import backgroundImage from "../assets/pexels-francesco-ungaro-1670977.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Transform Your Digital Experience
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              Innovative solutions to help your business grow and thrive in the
              digital landscape.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get Started</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-background/20 hover:bg-background/30 text-white border-white/20"
            >
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
