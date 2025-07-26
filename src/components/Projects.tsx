import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import projectIot from "@/assets/project-iot.jpg";
import projectAutomation from "@/assets/project-automation.jpg";
import projectWearable from "@/assets/project-wearable.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Smart IoT Sensor Network",
      description: "Developed a mesh network of environmental sensors using ESP32 microcontrollers with LoRaWAN connectivity for smart city applications.",
      image: projectIot,
      technologies: ["ESP32", "LoRaWAN", "FreeRTOS", "C++", "MQTT", "Solar Power"],
      github: "#",
      demo: "#",
      highlights: [
        "Ultra-low power design with 2+ year battery life",
        "Mesh networking with 1km+ range",
        "Real-time environmental monitoring"
      ]
    },
    {
      title: "Industrial Automation Controller",
      description: "Designed and implemented a real-time control system for manufacturing equipment with safety-critical requirements and HMI interface.",
      image: projectAutomation,
      technologies: ["STM32", "Safety PLC", "CAN Bus", "IEC 61508", "C", "Qt"],
      github: "#",
      demo: "#",
      highlights: [
        "SIL 2 safety certification compliance",
        "Sub-millisecond response times",
        "Redundant fail-safe mechanisms"
      ]
    },
    {
      title: "Wearable Health Monitor",
      description: "Created a compact wearable device for continuous health monitoring with ML-powered anomaly detection and smartphone connectivity.",
      image: projectWearable,
      technologies: ["nRF52", "Zephyr OS", "BLE", "TensorFlow Lite", "Python", "Flutter"],
      github: "#",
      demo: "#",
      highlights: [
        "7-day battery life with continuous monitoring",
        "On-device ML inference",
        "Clinical-grade sensor accuracy"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
            A showcase of embedded systems projects demonstrating expertise in firmware development, 
            hardware integration, and system optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-card/80 border-border hover:shadow-card transition-all duration-500 hover-scale overflow-hidden animate-scale-in stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors story-link">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground animate-fade-in stagger-1">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 animate-fade-in stagger-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs hover-scale">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4 animate-slide-up stagger-3">
                  <Button variant="tech" size="sm" className="flex-1 hover-glow">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="glow" size="sm" className="flex-1 hover-scale">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;