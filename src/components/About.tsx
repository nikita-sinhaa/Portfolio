import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Cog, Shield } from "lucide-react";
const About = () => {
  
const highlights = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Microcontroller Expert",
      description: "ARM Cortex-M, ESP32, STM32, and Arduino platforms"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Systems",
      description: "RTOS, interrupt handling, and time-critical applications"
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Hardware Integration",
      description: "PCB design, sensor fusion, and communication protocols"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Safety",
      description: "Secure boot, encryption, and safety-critical systems"
    }
  ];

  const technologies = [
    "C/C++", "Python", "Rust", "ARM Assembly", "FreeRTOS", "Zephyr OS",
    "I2C", "SPI", "UART", "CAN Bus", "Ethernet", "WiFi", "Bluetooth",
    "KiCad", "Altium Designer", "MATLAB/Simulink", "Git", "JIRA", "Docker"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
            Firmware engineer, sensor enthusiast, and a proud process control fanatic. Storyteller in code and beyond. I build real time systems that think fast and run clean.
            Outside the lab, you’ll find me writing, exploring new places, cooking something spicy, or clicking photographs of the most random building around.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16 animate-slide-up">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-foreground/90 leading-relaxed">
              I specialize in bridging the gap between hardware and software, creating efficient 
              and reliable embedded systems that power the devices we use every day. My expertise 
              spans from low-level firmware development to system architecture design.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              With a strong foundation in electrical engineering and computer science, I've led 
              cross-functional teams to deliver products that meet strict performance, power, 
              and safety requirements. I'm passionate about clean code, robust testing, and 
              continuous learning in this rapidly evolving field.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className={`bg-card/50 border-border hover:bg-card/80 transition-all duration-300 hover:shadow-card hover-scale animate-scale-in stagger-${index + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/20 rounded-lg text-primary animate-glow-pulse">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="animate-fade-in stagger-2">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`px-4 py-2 text-sm hover:bg-secondary/80 hover:shadow-subtle transition-all duration-300 hover-scale animate-fade-in stagger-${(index % 4) + 1}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
