import {LockKeyhole, Rocket, ShieldCheck, Sword} from "lucide-react";

const highlights = [
  {
    icon: LockKeyhole,
    title: "Secure Code",
    description: 
      "Writing maintainable, scalable, and secure code that endures the test of time and malicious actors.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: 
      "Optimizing for speed and delivering lightning-fast user experience by using low level languages",
  },
  {
    icon: Sword,
    title: "Offensive Security",
    description: 
      "Delivering ethical hacking and penetration testing capabilities to further secure the services",
  },
  {
    icon: ShieldCheck,
    title: "Defensive Security",
    description: 
      "Maintaining and securing network infrastructures for the outmost safety of the well being of community",
  },
];

export const About = () =>{
  return (
    <section  id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span 
                className="text-secondary-foreground text-sm font-medium tracking-wider uppercase"
              >
                About Me
              </span>
            </div>

          <h2 
              className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground"
            >
            Building the future,
            <span className="font-serif italic font-normal text-white">
              {" "}
              with safety and performance.
            </span>
          </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m an Electronics Engineering graduate with a strong foundation in networking,
                telecommunications, and embedded systems, driven by a curiosity for how systems work from hardware to software.
                My background includes network operation center, and technical support, shaping a practical, 
                systems-oriented approach to problem solving.
              </p>

              <p>
                I build secure and efficient applications using Rust, C, and Python, 
                with growing experience in full-stack development using React, Axum, Tauri, and PostgreSQL.
                Alongside development, I actively explore cybersecurity and offensive security concepts, 
                focusing on how systems break, how attacks happen, and how to design software with security in mind from the start.
              </p>

              <p>
                Outside of work, I sharpen my skills through cybersecurity labs, homelab experimentation, and hands-on projects involving Raspberry Pi, 
                embedded devices, and self-hosted infrastructure. I enjoy digging deep into systems, learning continuously, 
                and building technology that is both resilient and thoughtfully engineered.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to engineer secure, high-performance systems that bridge hardware, 
                software, and cybersecurity — building technology that is resilient by design, efficient at scale, 
                and trusted in the real world."
              </p>
            </div>
          </div>

          {/* Right Column - highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{animationDelay: `${(idx + 1) * 100}ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

