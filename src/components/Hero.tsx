import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow opacity-30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-glow opacity-20 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient animate-fade-in">
            Nikita Sinha
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light animate-fade-in stagger-1">
            Embedded Engineer
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in stagger-2">
           Embeeded Engineer who is turning real time challenges into real world solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up stagger-3">
            <Button variant="glow" size="lg" className="group hover-glow animate-glow-pulse">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="tech" size="lg" className="hover-scale">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 pt-8 animate-fade-in stagger-4">
            <Button variant="ghost" size="icon" className="h-12 w-12 hover-glow animate-float">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 hover-glow animate-float stagger-1">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 hover-glow animate-float stagger-2">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-primary rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
