"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Silk from "@/components/animated_bg/Silk";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";


function EcosystemNode({ title, subtitle }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="group flex w-28 flex-col items-center select-none cursor-default">
      <div className={`relative flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500 backdrop-blur-xl group-hover:scale-110 ${
        isDark
          ? "border-amber-400/40 bg-zinc-950/90 shadow-[0_0_25px_rgba(251,191,36,.2)] ring-4 ring-amber-400/10 group-hover:border-amber-300 group-hover:shadow-[0_0_35px_rgba(251,191,36,.4)]"
          : "border-amber-600/35 bg-white shadow-lg shadow-amber-950/10 ring-4 ring-amber-500/15 group-hover:border-amber-600 group-hover:shadow-xl group-hover:shadow-amber-500/20"
      }`}>
        <div className={`h-3.5 w-3.5 rounded-full transition-all duration-300 group-hover:scale-125 ${
          isDark
            ? "bg-gradient-to-tr from-amber-400 to-amber-200 shadow-[0_0_12px_rgba(251,191,36,.9)]"
            : "bg-gradient-to-tr from-amber-600 to-amber-400 shadow-[0_0_10px_rgba(217,119,6,.7)]"
        }`} />
      </div>

      <p className={`mt-3 text-center text-xs font-black uppercase tracking-[0.18em] transition-colors duration-300 ${
        isDark
          ? "text-white group-hover:text-amber-300"
          : "text-stone-900 group-hover:text-amber-700"
      }`}>
        {title}
      </p>

      <p className={`mt-0.5 text-[10px] font-mono font-bold uppercase tracking-[0.25em] ${
        isDark ? "text-amber-400/80" : "text-amber-700/85"
      }`}>
        {subtitle}
      </p>
    </div>
  );
}

export default function AboutUs() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const cardVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.75,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const sparkles = [
    { left: "28%", top: "22%" },
    { left: "38%", top: "45%" },
    { left: "54%", top: "30%" },
    { left: "70%", top: "26%" },
    { left: "80%", top: "43%" },
    { left: "48%", top: "20%" },
    { left: "62%", top: "40%" },
  ];
  return (
    <main className="bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Silk
            speed={3}
            scale={1.1}
            noiseIntensity={0.2}
            rotation={0}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background" />

        <div className="absolute left-1/3 top-32 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* =========================================================
          LEFT — HERO CONTENT
          ========================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <motion.p
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.35 }}
                className="mb-6 text-xs uppercase tracking-[0.45em] text-amber-500 dark:text-amber-300"
              >
                Science & Technology Council
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.45 }}
                className="landing-heading whitespace-nowrap bg-gradient-to-b from-amber-500 via-amber-600 to-black bg-clip-text text-4xl sm:text-6xl md:text-7xl lg:text-[6.8rem] xl:text-[7.5rem] font-black text-transparent drop-shadow-[0_0_40px_rgba(251,191,36,.15)] dark:from-white dark:via-zinc-200 dark:to-zinc-600 leading-none tracking-tight"
              >
                ABOUT US
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.4 }}
                className="mt-5 text-3xl font-semibold md:text-5xl text-foreground"
              >
                TechZephyr
                <span className="text-amber-500 dark:text-amber-300"> 2026</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground"
              >
                The flagship technology festival of the Science & Technology
                Council, IIT Bhubaneswar—bringing together innovation, engineering,
                entrepreneurship and creativity through hackathons, competitions,
                workshops and exhibitions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-12 flex flex-wrap gap-5"
              >
                <Link
                  href="/Competitions"
                  className="rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300"
                >
                  Explore Events
                </Link>

                <Link
                  href="/Sponsor"
                  className={`rounded-full border px-8 py-4 text-sm uppercase tracking-[0.25em] transition-all duration-300 hover:border-amber-400 hover:text-amber-500 ${
                    isDark ? "border-white/20 text-white hover:text-amber-300" : "border-[#7A2E24]/25 text-[#2A1D17] hover:bg-[#7A2E24]/5"
                  }`}
                >
                  Sponsors
                </Link>
              </motion.div>
            </motion.div>


            {/* =========================================================
          RIGHT — TECHZEPHYR ECOSYSTEM
          ========================================================= */}

            <div className="relative hidden h-[520px] items-center justify-center lg:flex select-none">

              {/* Ambient glow */}
              <div className="absolute h-80 w-80 rounded-full bg-amber-500/15 dark:bg-amber-400/10 blur-[110px]" />

              {/* Outer Orbit Ring (430px) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className={`absolute h-[430px] w-[430px] rounded-full border ${
                  isDark
                    ? "border-amber-400/20 shadow-[0_0_40px_rgba(251,191,36,0.05)]"
                    : "border-amber-700/25 shadow-lg shadow-amber-950/5"
                }`}
              />

              {/* Middle Dashed Orbit Ring (330px) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className={`absolute h-[330px] w-[330px] rounded-full border border-dashed ${
                  isDark ? "border-amber-400/30" : "border-amber-700/35"
                }`}
              />

              {/* Inner Orbit Ring (230px) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`absolute h-[230px] w-[230px] rounded-full border ${
                  isDark ? "border-amber-400/15" : "border-amber-700/20"
                }`}
              />

              {/* =====================================================
            CONNECTION LINES
            ===================================================== */}

              <div className={`absolute h-px w-[360px] rotate-0 bg-linear-to-r ${
                isDark ? "from-transparent via-amber-400/40 to-transparent" : "from-transparent via-amber-700/40 to-transparent"
              }`} />

              <div className={`absolute h-px w-[360px] rotate-45 bg-linear-to-r ${
                isDark ? "from-transparent via-amber-400/25 to-transparent" : "from-transparent via-amber-700/25 to-transparent"
              }`} />

              <div className={`absolute h-px w-[360px] -rotate-45 bg-linear-to-r ${
                isDark ? "from-transparent via-amber-400/25 to-transparent" : "from-transparent via-amber-700/25 to-transparent"
              }`} />

              <div className={`absolute h-[360px] w-px bg-linear-to-b ${
                isDark ? "from-transparent via-amber-400/40 to-transparent" : "from-transparent via-amber-700/40 to-transparent"
              }`} />

              {/* =====================================================
            CENTER CORE
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`relative z-20 flex h-40 w-40 items-center justify-center rounded-full border-2 backdrop-blur-2xl p-4 transition-all duration-300 ${
                  isDark
                    ? "border-amber-400/40 bg-zinc-950/95 shadow-[0_0_60px_rgba(251,191,36,.25)] ring-8 ring-amber-400/10"
                    : "border-amber-600/40 bg-[#1A120C] shadow-[0_12px_45px_rgba(217,119,6,0.25)] ring-8 ring-amber-500/20"
                }`}
              >
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src="/techzephyr-logo.png"
                    alt="TechZephyr 4"
                    width={130}
                    height={130}
                    className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    priority
                  />
                </div>
              </motion.div>


              {/* =====================================================
            NODE — INNOVATION
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.35 }}
                className="absolute left-1/2 top-2 -translate-x-1/2"
              >
                <EcosystemNode
                  title="Innovation"
                  subtitle="Ideas"
                />
              </motion.div>


              {/* =====================================================
            NODE — ENGINEERING
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.52, duration: 0.35 }}
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                <EcosystemNode
                  title="Engineering"
                  subtitle="Build"
                />
              </motion.div>


              {/* =====================================================
            NODE — COMMUNITY
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.59, duration: 0.35 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
              >
                <EcosystemNode
                  title="Community"
                  subtitle="Connect"
                />
              </motion.div>


              {/* =====================================================
            NODE — CREATIVITY
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.66, duration: 0.35 }}
                className="absolute left-0 top-1/2 -translate-y-1/2"
              >
                <EcosystemNode
                  title="Creativity"
                  subtitle="Imagine"
                />
              </motion.div>


              {/* =====================================================
            SMALL TOP LABEL
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.4 }}
                className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 text-center"
              >
                <p className={`text-[10px] uppercase tracking-[0.45em] ${isDark ? "text-white/30" : "text-[#7A2E24]/70 font-mono font-medium"}`}>
                  IIT Bhubaneswar
                </p>

                <div className="mx-auto mt-3 h-px w-20 bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
              </motion.div>

            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading subtitle="Flagship Festival" title="About TechZephyr" />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
              <p className={`text-lg leading-9 ${isDark ? "text-white/70" : "text-[#4A3328]/90 font-medium"}`}>
                TechZephyr is the flagship celebration of technology and innovation at IIT Bhubaneswar. It is designed as a large-scale
                platform where students, researchers, innovators and industry professionals collaborate through competitions, workshops,
                exhibitions and technical events spanning robotics, competitive programming, web development, blockchain, finance, astronomy and emerging technologies.
              </p>
              <p className={`mt-8 leading-9 ${isDark ? "text-white/60" : "text-[#4A3328]/85"}`}>
                Beyond being a technical festival, TechZephyr bridges academia and industry by encouraging interdisciplinary
                collaboration, practical learning and innovation that solves real-world challenges. It offers participants an opportunity to compete, collaborate and showcase ideas with meaningful impact.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .4 }} className="relative">
              <div className="absolute -inset-1 rounded-[40px] bg-amber-400/10 blur-3xl" />
              <div className={`relative overflow-hidden rounded-[35px] border backdrop-blur-xl p-10 ${
                isDark ? "border-white/10 bg-white/[0.035]" : "border-[#7A2E24]/15 bg-white/85 shadow-2xl shadow-amber-950/5"
              }`}>
                <motion.div initial={{ scale: 1.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring" }}
                  className="relative mx-auto flex h-56 w-56 items-center justify-center">
                  <div className="absolute inset-4 rounded-full bg-amber-400/10 blur-2xl" />
                  <div className={`relative z-10 flex h-48 w-48 items-center justify-center rounded-full border shadow-[0_0_60px_rgba(245,158,11,.35)] p-5 transition-all duration-300 ${
                    isDark
                      ? "border-white/10 bg-black/60"
                      : "border-amber-600/40 bg-[#1A120C] shadow-[0_12px_45px_rgba(217,119,6,0.25)] ring-8 ring-amber-500/15"
                  }`}>
                    <Image
                      src="/techzephyr-logo.png"
                      width={140}
                      height={140}
                      alt="TechZephyr Logo"
                      className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2, duration: .4 }} className="relative z-10">
                  <h3 className={`mt-12 text-3xl font-bold ${isDark ? "text-white" : "text-[#2A1D17]"}`}>Innovation Meets Impact</h3>
                  <p className={`mt-6 leading-8 ${isDark ? "text-white/60" : "text-[#4A3328]/85 font-medium"}`}>
                    Every competition, workshop and hackathon is curated to encourage practical problem solving, creativity and
                    collaboration while preparing students for tomorrow&apos;s technology ecosystem.
                  </p>
                  <div className="mt-10 h-px w-full bg-linear-to-r from-amber-400/50 via-white/10 to-transparent" />
                  <p className={`mt-6 text-xs uppercase tracking-[0.35em] ${isDark ? "text-white/40" : "text-[#7A2E24]/80 font-mono font-bold"}`}>Science • Technology • Innovation</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className={`py-12.5 border-t ${isDark ? "border-white/10" : "border-[#7A2E24]/15"}`}>
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading subtitle="Science & Technology Council" title="Who We Are" />
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
              <h3 className={`text-4xl font-bold ${isDark ? "text-white" : "text-[#2A1D17]"}`}>Science & Technology Council</h3>
              <p className={`mt-8 leading-9 ${isDark ? "text-white/70" : "text-[#4A3328]/90 font-medium"}`}>
                The Science & Technology Council (STC) is the driving force behind technical innovation at IIT Bhubaneswar. Through year-round competitions, workshops, hackathons and
                collaborative projects, STC promotes experimentation, creativity and interdisciplinary learning among students.
              </p>
              <p className={`mt-8 leading-9 ${isDark ? "text-white/60" : "text-[#4A3328]/85"}`}>
                The council operates through specialized student societies dedicated to coding, robotics, finance, design and astronomy,
                enabling students to transform ideas into impactful technological solutions.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
              <div className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl p-10 ${
                isDark ? "border-white/10 bg-white/[0.035]" : "border-[#7A2E24]/15 bg-white/85 shadow-xl shadow-amber-950/5"
              }`}>
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-400/10 blur-[120px]" />
                <p className={`uppercase tracking-[.35em] text-xs font-mono font-bold ${isDark ? "text-amber-300" : "text-[#7A2E24]"}`}>Core Values</p>
                <h3 className={`mt-5 text-4xl font-bold ${isDark ? "text-white" : "text-[#2A1D17]"}`}>
                  Engineering a Culture
                  <br />
                  of Innovation
                </h3>
                <p className={`mt-6 leading-9 ${isDark ? "text-white/60" : "text-[#4A3328]/85"}`}>
                  Science & Technology Council empowers students through interdisciplinary learning, technical excellence, collaborative research and innovation-driven leadership.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  {["Innovation", "Research", "Engineering", "Leadership", "Entrepreneurship", "Technology"].map((item) => (
                    <div key={item} className={`rounded-full border px-5 py-2 text-sm font-semibold ${
                      isDark ? "border-amber-400/20 bg-amber-400/10 text-amber-300" : "border-[#7A2E24]/20 bg-[#7A2E24]/5 text-[#7A2E24]"
                    }`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className={`py-12.5 border-t ${isDark ? "border-white/10" : "border-[#7A2E24]/15"}`}>
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading subtitle="Our Ecosystem" title="Societies Under STC" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                name: "WebnD",
                domain: "Web Development & Design",
                description: "The web and design society focused on building creative digital experiences, full-stack solutions and innovative web applications.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84AnGJxBOuQTsTX3M-Oh1TNyJ83PRIhDDMJ7zotDSQQ&s=10',
                instagram: 'https://www.instagram.com/webnd.iitbbs/',
                linkedin: 'https://in.linkedin.com/company/webd-iitbbs'
              },
              {
                name: "Neuromancers",
                domain: "Competitive Programming",
                description: "A community of problem solvers dedicated to algorithms, programming contests and advancing competitive coding culture.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMbjm-4TrkjlOX3icE7eAmVhez756S2faRmXTvJGekQ&s=10',
                instagram: 'https://www.instagram.com/neuro_iitbbs/?hl=en',
                linkedin: 'https://in.linkedin.com/company/neuromancers'
              },
              {
                name: "RISC",
                domain: "Robotics & Intelligent Systems",
                description: "A robotics society exploring automation, embedded systems, autonomous machines and engineering innovation.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DB0dfde0pvVnGTQT_uWctgvIV5zYB8UeO5-F2ZSBL0wxE2lFWIDI0IU&s=10',
                instagram: 'https://www.instagram.com/risc.iitbbs/',
                linkedin: 'https://in.linkedin.com/company/robotics-and-intelligent-systems-club'
              },
              {
                name: "FEBS",
                domain: "Finance & Emerging Business Society",
                description: "A platform combining finance, analytics, entrepreneurship and business-oriented technological solutions.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSTMSEkGgorngP2gPYNeJsPNHOJH_RAoYw38WUHWfTQ&s=10',
                instagram: 'https://www.instagram.com/febs.iitbbs/',
                linkedin: 'https://www.linkedin.com/company/febs-iitbbs'
              },
              {
                name: "Nakshatra",
                domain: "Astronomy & Space Science",
                description: "A society promoting astronomy, astrophysics and exploration through observations, challenges and learning initiatives.",
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4wTehWaf_p7hMbvcCVAGDtvXfQmhTk_tcMconRCfsOLCqwqSivBsPTA&s=10',
                instagram: 'https://www.instagram.com/nakshatra_iitbbs/',
                linkedin: 'https://www.linkedin.com/company/nakshatra-iit-bhubaneswar'
              }
            ].map((society) => (
              <motion.div key={society.name} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} variants={cardVariants}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }} transition={{ duration: 0.1 }} style={{ transformStyle: "preserve-3d" }}
                className={`group relative h-125 overflow-hidden rounded-[32px] border backdrop-blur-xl p-8 transition-all ${
                  isDark ? "border-white/10 bg-white/4" : "border-[#7A2E24]/15 bg-white/85 shadow-xl shadow-amber-950/5"
                }`}>
                <div className="absolute inset-0 bg-linear-to-br from-amber-400/5 via-transparent to-transparent" />
                <motion.div initial={{ scale: 3.8, x: 95, y: 120, opacity: 0.9, filter: "blur(8px)" }} whileInView={{ scale: 1, x: 0, y: 0, opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="relative z-20 h-24 w-24">
                  <img src={society.logo} alt={society.name} className="h-full w-full object-contain" />
                </motion.div>
                <motion.div variants={itemVariants} className="mt-10">
                  <h3 className={`text-3xl font-bold ${isDark ? "text-white" : "text-[#2A1D17]"}`}>{society.name}</h3>
                  <p className={`mt-2 text-xs uppercase tracking-[0.35em] font-mono font-bold ${isDark ? "text-amber-300" : "text-[#7A2E24]"}`}>{society.domain}</p>
                </motion.div>
                <motion.p variants={itemVariants} className={`mt-6 text-[15px] leading-7 ${isDark ? "text-white/60" : "text-[#4A3328]/85 font-medium"}`}>{society.description}</motion.p>
                <motion.div variants={itemVariants} className="absolute bottom-8 left-8 right-8">
                  <div className="mb-5 h-px bg-linear-to-r from-amber-400 via-white/20 to-transparent" />
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] uppercase tracking-[0.35em] font-mono font-bold ${isDark ? "text-white/35" : "text-[#7A2E24]/70"}`}>Connect</span>
                    <div className="flex gap-4">
                      <Link href={society.instagram} target="_blank">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-full border transition hover:scale-110 ${
                          isDark ? "border-white/10 bg-white/5 hover:border-amber-400 hover:bg-amber-400/10" : "border-[#7A2E24]/15 bg-[#7A2E24]/5 hover:border-[#7A2E24] hover:bg-[#7A2E24]/10"
                        }`}>
                          <FaInstagram className={isDark ? "text-white/70" : "text-[#2A1D17]"} />
                        </div>
                      </Link>
                      <Link href={society.linkedin} target="_blank">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-full border transition hover:scale-110 ${
                          isDark ? "border-white/10 bg-white/5 hover:border-amber-400 hover:bg-amber-400/10" : "border-[#7A2E24]/15 bg-[#7A2E24]/5 hover:border-[#7A2E24] hover:bg-[#7A2E24]/10"
                        }`}>
                          <FaLinkedin className={isDark ? "text-white/70" : "text-[#2A1D17]"} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-[40px] border backdrop-blur-xl ${
              isDark ? "border-white/10 bg-white/[0.03]" : "border-[#7A2E24]/15 bg-white/85 shadow-2xl shadow-amber-950/5"
            }`}
          >

            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-amber-400/5 blur-[120px]" />

            <div className="relative grid lg:grid-cols-2">

              {/* =====================================================
            VISION
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative p-10 md:p-14 lg:p-16"
              >

                {/* Number */}
                <div className="mb-10 flex items-center gap-5">
                  <span className="text-sm font-bold tracking-[0.35em] text-amber-500 dark:text-amber-300">
                    01
                  </span>

                  <div className="h-px w-16 bg-linear-to-r from-amber-400/60 to-transparent" />

                  <p className={`text-xs uppercase tracking-[0.4em] font-mono font-bold ${isDark ? "text-white/40" : "text-[#7A2E24]/80"}`}>
                    Vision
                  </p>
                </div>

                <h3 className={`text-3xl font-bold tracking-tight md:text-4xl ${isDark ? "text-white" : "text-[#2A1D17]"}`}>
                  Building Future Innovators
                </h3>

                <p className={`mt-7 max-w-xl text-base leading-8 md:text-lg ${isDark ? "text-white/60" : "text-[#4A3328]/85 font-medium"}`}>
                  To create an environment where students can explore, experiment
                  and transform ideas into meaningful technological solutions that
                  impact society.
                </p>

                {/* Bottom accent */}
                <div className="mt-10 h-px w-20 bg-amber-400/40 transition-all duration-300 group-hover:w-36" />

              </motion.div>


              {/* =====================================================
            DIVIDER
            ===================================================== */}

              <div className={`hidden lg:block absolute left-1/2 top-14 bottom-14 w-px bg-linear-to-b from-transparent ${
                isDark ? "via-white/10" : "via-[#7A2E24]/15"
              } to-transparent`} />

              <div className={`mx-10 h-px bg-linear-to-r from-transparent ${
                isDark ? "via-white/10" : "via-[#7A2E24]/15"
              } to-transparent lg:hidden`} />


              {/* =====================================================
            MISSION
            ===================================================== */}

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative p-10 md:p-14 lg:p-16"
              >

                {/* Number */}
                <div className="mb-10 flex items-center gap-5">
                  <span className="text-sm font-bold tracking-[0.35em] text-amber-500 dark:text-amber-300">
                    02
                  </span>

                  <div className="h-px w-16 bg-linear-to-r from-amber-400/60 to-transparent" />

                  <p className={`text-xs uppercase tracking-[0.4em] font-mono font-bold ${isDark ? "text-white/40" : "text-[#7A2E24]/80"}`}>
                    Mission
                  </p>
                </div>

                <h3 className={`text-3xl font-bold tracking-tight md:text-4xl ${isDark ? "text-white" : "text-[#2A1D17]"}`}>
                  Innovation Through Collaboration
                </h3>

                <p className={`mt-7 max-w-xl text-base leading-8 md:text-lg ${isDark ? "text-white/60" : "text-[#4A3328]/85 font-medium"}`}>
                  To empower students with technical skills, problem-solving
                  abilities and opportunities to collaborate across domains through
                  competitions, workshops and projects.
                </p>

                {/* Bottom accent */}
                <div className="mt-10 h-px w-20 bg-amber-400/40 transition-all duration-300 group-hover:w-36" />

              </motion.div>

            </div>

            {/* Bottom label */}
            <div className={`relative border-t px-10 py-5 md:px-14 lg:px-16 ${isDark ? "border-white/5" : "border-[#7A2E24]/10"}`}>
              <p className={`text-[10px] uppercase tracking-[0.4em] font-mono font-bold ${isDark ? "text-white/25" : "text-[#7A2E24]/70"}`}>
                Science • Technology • Innovation • Collaboration
              </p>
            </div>

          </motion.div>

        </div>
      </section>
      <section className={`py-14 border-t ${isDark ? "border-white/10" : "border-[#7A2E24]/15"}`}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading subtitle="Milestones" title="Our Achievements" />
          <div className="relative mt-20">
            <div className={`absolute left-5 top-0 bottom-0 w-px md:left-1/2 ${isDark ? "bg-white/10" : "bg-[#7A2E24]/20"}`} />
            <div className="space-y-16">
              {[
                {
                  year: "2024",
                  title: "ICPC World Finals",
                  society: "Neuromancers",
                  description:
                    "Secured World Rank 75 at the ICPC World Finals held in Kazakhstan, becoming the third highest ranked Indian team."
                },
                {
                  year: "2024",
                  title: "eYantra Gold Medal",
                  society: "RISC",
                  description:
                    "Achieved a gold medal at IIT Bombay's prestigious eYantra Robotics Competition."
                },
                {
                  year: "2025",
                  title: "ICPC Asia West Qualification",
                  society: "Neuromancers",
                  description:
                    "One team qualified for ICPC Asia West 2025 showcasing exceptional competitive programming skills."
                },
                {
                  year: "2025",
                  title: "Code Relay",
                  society: "WEBnD",
                  description:
                    "A 36-hour flagship hackathon receiving more than 880 team registrations across Web2 and Web3 tracks."
                },
                {
                  year: "2025",
                  title: "ML Hackathon",
                  society: "FEBS",
                  description:
                    "A campus-wide AI hackathon where 50+ teams solved real-world machine learning challenges."
                },
                {
                  year: "2025",
                  title: "GUJCOST Robofest",
                  society: "RISC",
                  description:
                    "Four teams reached Grand Finals from 1500+ entries, securing podium positions in robotics categories."
                },
                {
                  year: "2025",
                  title: "Astrochamp",
                  society: "Nakshatra",
                  description:
                    "Engaged 800+ participants through programming challenges, astronomy activities, quizzes and competitions."
                }].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: .7 }}
                    className={`relative flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`absolute left-3 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full z-10 ${
                      isDark ? "bg-white border-4 border-black" : "bg-[#7A2E24] border-4 border-[#FAF7F2]"
                    }`} />
                    <div className="ml-14 md:ml-0 md:w-[45%]">
                      <div className={`rounded-2xl border p-8 hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl ${
                        isDark
                          ? "border-amber-400/30 bg-amber-400/10 text-white shadow-[0_0_25px_rgba(251,191,36,.2)] hover:border-amber-400/50"
                          : "border-[#7A2E24]/15 bg-white/90 shadow-xl shadow-amber-950/5 hover:border-[#7A2E24]/40"
                      }`}>
                        <p className={`text-xs uppercase tracking-[0.35em] font-mono font-bold ${isDark ? "text-amber-400" : "text-[#7A2E24]"}`}>{item.year}</p>
                        <h3 className={`mt-4 text-3xl font-bold ${isDark ? "text-white" : "text-[#2A1D17]"}`}>{item.title}</h3>
                        <p className={`mt-2 text-sm uppercase tracking-widest font-mono ${isDark ? "text-amber-300/75" : "text-amber-700/80 font-bold"}`}>{item.society}</p>
                        <p className={`mt-5 leading-8 ${isDark ? "text-white/70" : "text-[#4A3328]/85"}`}>{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className={`border-t ${isDark ? "border-white/10" : "border-[#7A2E24]/15"}`}><Stats /></section>
      <section className={`border-t ${isDark ? "border-white/10" : "border-[#7A2E24]/15"}`}><CTA /></section>
    </main>
  );
}