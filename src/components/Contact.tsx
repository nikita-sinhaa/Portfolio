import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "alex.chen@email.com",
      link: "mailto:alex.chen@email.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in stagger-1">
            Interested in collaborating on embedded systems projects or discussing opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6 animate-fade-in stagger-1">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border hover:bg-card/80 transition-colors hover-scale animate-scale-in stagger-${index + 1}`}
                >
                  <div className="p-2 bg-primary/20 rounded-lg text-primary animate-glow-pulse">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="font-medium hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <Card className="bg-card/80 border-border hover:shadow-card transition-all duration-300 animate-scale-in stagger-2">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Let's discuss your embedded systems project or explore potential collaboration opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in stagger-1">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" className="hover-scale transition-transform" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="hover-scale transition-transform" />
                  </div>
                </div>
                
                <div className="space-y-2 animate-fade-in stagger-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project collaboration, job opportunity, etc." className="hover-scale transition-transform" />
                </div>
                
                <div className="space-y-2 animate-fade-in stagger-3">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    className="min-h-32 resize-none hover-scale transition-transform"
                  />
                </div>
                
                <Button variant="glow" size="lg" className="w-full hover-glow animate-slide-up stagger-4">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;