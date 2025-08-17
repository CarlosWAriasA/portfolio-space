import React, { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "React Native", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },

  { name: "C#", level: 90, category: "backend" },
  { name: ".NET Core / ASP.NET", level: 85, category: "backend" },
  { name: "Java", level: 60, category: "backend" },
  { name: "Entity Framework Core", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },

  { name: "SQL Server", level: 80, category: "database" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "SQLite", level: 80, category: "database" },
  { name: "MongoDB", level: 60, category: "database" },

  { name: "Git / GitHub", level: 95, category: "tools" },
  { name: "Docker", level: 60, category: "tools" },
  { name: "CI/CD", level: 50, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Crystal Reports", level: 70, category: "tools" },
  { name: "Figma", level: 50, category: "tools" },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Frontend", value: "frontend" },
  { name: "Backend", value: "backend" },
  { name: "Database", value: "database" },
  { name: "Tools", value: "tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
