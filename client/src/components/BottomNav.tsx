import { motion } from "framer-motion";
import { Home, User, Briefcase, Code2, Mail } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BottomNavProps {
  activeSection: string;
}

export function BottomNav({ activeSection }: BottomNavProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "summary", label: "Summary", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "contact", label: "Links", icon: Mail },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-[400px]"
    >
      <nav className="glass-pill rounded-full p-2 flex items-center justify-between w-full relative overflow-hidden">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={twMerge(
                clsx(
                  "relative z-10 flex flex-col items-center justify-center w-14 h-14 rounded-full transition-colors duration-300 group",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill-active"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_15px_rgba(255,184,0,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className={clsx("w-5 h-5 mb-1 transition-transform duration-300", isActive && "scale-110")} />
              <span className="text-[10px] font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-1.5 translate-y-3 group-hover:translate-y-0">
                {!isActive && item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </motion.div>
  );
}
