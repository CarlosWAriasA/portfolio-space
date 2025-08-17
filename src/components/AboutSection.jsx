import { Briefcase, Code, User } from "lucide-react";
import React from "react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">Full-Stack Developer </h3>
            <p className="text-muted-foreground">
              I’m Carlos Arias, a software developer with over 2 years of
              experience building modern web applications. My core stack is{" "}
              <span className="text-primary font-medium">
                React, .NET, and SQL Server
              </span>
              , and I enjoy turning ideas into scalable, performant, and
              user-friendly solutions.
            </p>

            <p className="text-muted-foreground">
              I focus on crafting interfaces that balance clean design with
              functionality, while also developing robust back-end systems. I’m
              passionate about continuous learning and using technology to
              create meaningful digital products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>

              <a
                href="/CarlosArias-SoftwareDeveloper.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/1- transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive and interactive UIs with React,
                    TypeScript, and modern styling frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Backend & Databases</h4>
                  <p className="text-muted-foreground">
                    Developing APIs with .NET Core and managing data with SQL
                    Server for reliability and scalability.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Problem-Solving</h4>
                  <p className="text-muted-foreground">
                    Creating efficient solutions by combining technical skills
                    with a strong focus on user needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
