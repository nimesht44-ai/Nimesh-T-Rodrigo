import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Download, Send, Linkedin, User, Briefcase, Code2, Wand2 } from "lucide-react";
import { SiWix, SiFramer, SiFigma, SiCanva, SiBlender, SiAdobeillustrator, SiAdobephotoshop, SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";

import { insertMessageSchema } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { useActiveSection } from "@/hooks/use-active-section";
import { BottomNav } from "@/components/BottomNav";
import { SectionHeading } from "@/components/SectionHeading";

// Use the exact asset path specified in notes
import heroImg from "@assets/IMG_3827_1772165459001.png";

export default function Home() {
  const sectionIds = ["home", "summary", "experience", "skills", "contact"];
  const activeSection = useActiveSection(sectionIds);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const createMessage = useCreateMessage();

  const onSubmit = async (data: any) => {
    await createMessage.mutateAsync(data);
    reset();
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <BottomNav activeSection={activeSection} />

      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Open to work
              </div>
              <h2 className="text-primary font-bold tracking-widest text-sm uppercase">WIX DEVELOPER</h2>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight">
              Nimesh<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-200">Theekshana</span>
            </h1>
            
            <p className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed">
              Crafting premium digital experiences through innovative web architecture, bold aesthetics, and a global perspective.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              <a href="mailto:theekshanann322@gmail.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-primary transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                theekshanann322@gmail.com
              </a>
              <a href="tel:+6584086110" className="flex items-center gap-3 text-sm text-gray-300 hover:text-primary transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +65 8408 6110
              </a>
              <a href="https://linkedin.com/in/tyrone-brooks" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-300 hover:text-primary transition-colors group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                linkedin.com/in/tyrone-brooks
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-300 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                Mahiyangana, Srilanka
              </div>
            </div>

            <button className="group px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-[#ff9900] text-primary-foreground shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:shadow-[0_0_30px_rgba(255,184,0,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative max-w-sm md:max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl rotate-6 scale-105 blur-2xl -z-10" />
            <img 
              src={heroImg} 
              alt="Nimesh Theekshana" 
              className="w-full h-auto rounded-3xl shadow-2xl border border-white/10 object-cover object-center bg-card aspect-[4/5]"
            />
          </motion.div>
        </section>

        <div className="h-24 w-full" /> {/* Spacer */}

        {/* SUMMARY SECTION */}
        <section id="summary" className="py-24 border-t border-white/5">
          <SectionHeading title="Summary" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors duration-700" />
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-light">
              My name is <strong className="text-white font-semibold">Nimesh Theekshana Rodrigo</strong>, a motivated 20-year-old professional originally from Sri Lanka, currently based in Singapore to pursue higher education. I am the Founder of Pixel Rise, a digital venture where I apply my expertise in Social Media Management and web technologies to help brands establish a premium online presence.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              As an evolving Wix Developer and Framer Designer, I possess a strong command of site architecture and aesthetics, consistently refining my skills through dedicated self-study to reach a master-level proficiency. My journey is defined by a unique blend of academic discipline and entrepreneurial initiative, allowing me to approach every project with a fresh, global perspective. I am committed to delivering impactful digital solutions while expanding my technical repertoire within Singapore's vibrant tech landscape.
            </p>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 border-t border-white/5">
          <SectionHeading 
            title="Experience & Services" 
            subtitle="Bridging the gap between beautiful design and functional architecture." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Web & Development", tools: "Wix Studio • Framer", desc: "Building immersive, high-performance websites with modern site architecture.", icon: SiWix },
              { title: "Creative & Media", tools: "Canva • Spline • Midjourney", desc: "Crafting striking visual identities and engaging 3D/2D digital media.", icon: Wand2 },
              { title: "Digital Strategy", tools: "Social Media • SEO", desc: "Establishing premium online presences for brands under Pixel Rise.", icon: User },
              { title: "IT Documentation", tools: "Microsoft Office • Workspace", desc: "Efficient project management and detailed technical writing.", icon: Briefcase },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                <service.icon className="w-10 h-10 text-primary mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-primary/80 text-sm font-medium tracking-wide mb-4 uppercase">{service.tools}</p>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col gap-6 pl-4 border-l-2 border-primary/20"
          >
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(255,184,0,0.8)]" />
              <h4 className="text-xl font-bold text-white">Founder</h4>
              <p className="text-primary mb-2">Pixel Rise • Present</p>
              <p className="text-gray-400">Leading a digital venture focusing on premium web presence and social media management.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-white/20" />
              <h4 className="text-xl font-bold text-white">Owner</h4>
              <p className="text-gray-400 mb-2">ElectroMart</p>
              <p className="text-gray-400">Managed operations and built dynamic database-driven solutions.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-white/20" />
              <h4 className="text-xl font-bold text-white">Graphic Designer</h4>
              <p className="text-gray-400 mb-2">Freelance • 4+ Years</p>
              <p className="text-gray-400">Delivering high-quality visual identity and branding design across various industries.</p>
            </div>
          </motion.div>
        </section>

        {/* SKILLS & TOOLS SECTION */}
        <section id="skills" className="py-24 border-t border-white/5">
          <SectionHeading title="Skills & Tools" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Code2 className="text-primary" /> Technical Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "User Research", "Interaction Design", 
                  "Usability Testing", "Design Systems", 
                  "Wireframing / Prototyping", "Responsive Web Design", 
                  "Visual Design", "Site Architecture"
                ].map((skill, i) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                    {skill}
                  </motion.div>
                ))}
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-8">Languages</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">Sinhala</span>
                      <span className="text-primary text-sm">Native</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full" 
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">English</span>
                      <span className="text-primary text-sm">Professional</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Code2 className="text-primary" /> Core Toolkit
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {[
                  { icon: SiWix, name: "Wix Studio" },
                  { icon: SiFramer, name: "Framer" },
                  { icon: SiFigma, name: "Figma" },
                  { icon: SiReact, name: "React" },
                  { icon: SiHtml5, name: "HTML" },
                  { icon: SiCss3, name: "CSS" },
                  { icon: SiAdobephotoshop, name: "Photoshop" },
                  { icon: SiAdobeillustrator, name: "Illustrator" },
                  { icon: Wand2, name: "Spline" },
                  { icon: SiCanva, name: "Canva" },
                  { icon: SiBlender, name: "Blender" },
                ].map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 group"
                  >
                    <tool.icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors tool-icon-glow mb-3" />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{tool.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/50 pl-4">
                    <p className="text-white font-medium">Advance Dip Information Technology (DIT)</p>
                    <p className="text-primary/80 text-sm">2025 - 2026 (Upcoming)</p>
                  </div>
                  <div className="border-l-2 border-white/20 pl-4">
                    <p className="text-gray-300 font-medium">Dip Information Technology (DIT)</p>
                    <p className="text-gray-500 text-sm">Academies Australasia College • 2024 - 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Let's Work Together" 
                subtitle="Looking to establish a premium online presence or build your next big idea? Drop a message." 
              />
              
              <div className="space-y-6 mt-10">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email me at</p>
                    <a href="mailto:theekshanann322@gmail.com" className="font-medium hover:text-primary transition-colors">theekshanann322@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call me at</p>
                    <a href="tel:+6584086110" className="font-medium hover:text-primary transition-colors">+65 8408 6110</a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    {...register("name")}
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message as string}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message as string}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message as string}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group px-6 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-[#ff9900] text-primary-foreground shadow-[0_0_15px_rgba(255,184,0,0.2)] hover:shadow-[0_0_25px_rgba(255,184,0,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
