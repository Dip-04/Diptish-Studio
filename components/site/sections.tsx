"use client";

import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  Github,
  Globe,
  LayoutDashboard,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  PanelsTopLeft,
  RefreshCcw,
  Rocket,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import { site, services, projects, pricing, testimonials, whyHireMe, clientFit } from "@/lib/site-data";
import { LaptopCanvas } from "./laptop-scene";
import { SectionHeading } from "./section-heading";

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export function HeroSection() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr]">
        <motion.div {...sectionMotion}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
            {site.availability}
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {site.heroTitle}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {site.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_24px_70px_rgba(34,211,238,0.25)] transition hover:scale-[1.02]"
            >
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              View My Work
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-black/20 px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-fuchsia-400/40 hover:bg-fuchsia-400/10"
            >
              Book Free Call
              <CalendarDays className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Faster launches", value: "3x" },
              { label: "Client regions", value: "4" },
              { label: "Core focus", value: "Lead gen" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl"
              >
                <p className="text-3xl font-black tracking-tight text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...sectionMotion} transition={{ duration: 0.85, ease: "easeOut" }}>
          <div className="relative mx-auto max-w-[620px]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-fuchsia-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_40px_140px_rgba(2,6,23,0.55)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] min-h-[540px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#060c1c]">
                <LaptopCanvas />

                <div className="pointer-events-none absolute left-1/2 top-[21%] w-[72%] -translate-x-1/2 rounded-[1.4rem] border border-white/10 bg-black/45 p-4 shadow-[0_25px_90px_rgba(8,15,35,0.4)] backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                      Project preview
                    </p>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-100">
                      Live-ready
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    Premium dashboard UI with conversion-first structure
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
                    {["Clean UI", "Fast Loading", "SEO Ready", "Mobile First", "Conversion Focused", "Scalable Code"].map(
                      (chip) => (
                        <span
                          key={chip}
                          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-center"
                        >
                          {chip}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Built for businesses that want a premium online presence."
        description="Hi, I’m Diptish Gohane, a Web Developer from India specializing in React, Angular, Next.js, Python, SQL, and modern web applications. I help businesses build websites that look premium, load fast, and convert visitors into customers."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          {...sectionMotion}
          className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:grid-cols-2"
        >
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20">
            <img
              src="/diptish-hero.jpeg"
              alt="Portrait of Diptish Gohane"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20">
            <img
              src="/diptish-speaking.jpg"
              alt="Diptish speaking at an event"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          {...sectionMotion}
          className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 shadow-[0_40px_120px_rgba(2,6,23,0.45)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-200">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/80">
                Business-first mindset
              </p>
              <p className="mt-1 text-2xl font-semibold text-white">Code with a purpose</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
            I do not just write code. I understand design, user experience, deadlines,
            and how websites support sales conversations. That means the final product
            looks premium, feels trustworthy, and helps your business move faster.
          </p>

          <div className="mt-8 grid gap-3">
            {[
              "Fast communication",
              "Clean scalable code",
              "Mobile-first execution",
              "SEO-friendly structure",
              "Real business-focused UI",
              "Affordable for India, professional for global clients",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
              >
                <ShieldCheck className="h-4 w-4 flex-none text-cyan-200" />
                <p className="text-sm text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const icons = [MonitorSmartphone, PanelsTopLeft, LayoutDashboard, RefreshCcw, Wrench];

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Modern web solutions that feel sharp, fast, and conversion-focused."
        description="Every service is designed to make the business look better, load faster, and create more trust online."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[index];
          return (
            <motion.article
              key={service.title}
              {...sectionMotion}
              transition={{ duration: 0.55 + index * 0.08, ease: "easeOut" }}
              className="group rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/8"
            >
              <div className="inline-flex rounded-2xl border border-white/10 bg-black/25 p-3 text-cyan-200 transition group-hover:scale-105">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="A smaller portfolio converts better, so these are the strongest pieces."
        description="Each project focuses on the problem, the solution, the tech, and the result so clients can quickly understand the value."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            {...sectionMotion}
            transition={{ duration: 0.6 + index * 0.06, ease: "easeOut" }}
            className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.38)] backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/80">
                  Project {index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-cyan-200 transition group-hover:scale-105">
                <Rocket className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200/80">
                  Result
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{project.result}</p>
              </div>
              <a
                href={project.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                Live / Demo
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function CaseStudySection() {
  return (
    <section id="case-study" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Case Study"
        title="One detailed example of how I turn a workflow into a better business experience."
        description="Case studies help clients see the process, not just the final UI."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_40px_140px_rgba(8,15,35,0.45)] backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
            Project: Submit Right Platform
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            A smoother workflow for document submission, editing, and payments.
          </h3>
          <div className="mt-8 space-y-5">
            {[
              {
                label: "Problem",
                text: "Clients needed a smooth way to submit documents, track editing, pay online, and download final files.",
              },
              {
                label: "Solution",
                text: "Built a role-based platform with authentication, admin dashboard, Razorpay payment flow, and a clean user journey.",
              },
              {
                label: "Tech",
                text: "Next.js, Supabase, Razorpay, Tailwind CSS",
              },
              {
                label: "Result",
                text: "Faster workflow, a cleaner dashboard, and a more professional client experience.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-200/80">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 via-white/5 to-fuchsia-500/10 p-6 shadow-[0_30px_100px_rgba(34,211,238,0.12)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-200">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-100/80">
                  Workflow gain
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">Faster handoff</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Designed to reduce friction between submission, payment, editing, and final delivery.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-fuchsia-400/15 p-3 text-fuchsia-200">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-100/80">
                  Access control
                </p>
                <p className="mt-1 text-2xl font-semibold text-white">Role-based flow</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Client, editor, and admin views were separated for a cleaner, safer user journey.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/80">
              Built for trust
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The entire experience is designed to feel premium, dependable, and easy to use,
              which helps the business look more established immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyHireMeSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why Hire Me"
        title="Because your website should feel like a growth asset, not just a page."
        description="I combine frontend craft, business thinking, and dependable delivery to keep the whole project moving smoothly."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {whyHireMe.map((reason) => (
          <div
            key={reason}
            className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <MousePointerClick className="h-5 w-5 flex-none text-cyan-200" />
            <p className="text-sm font-medium text-slate-100">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="Strong work, clear communication, and professional delivery."
        description="These are demo placeholders until you add real client reviews."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.35)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-1 text-amber-300">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">&quot;{item.quote}&quot;</p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple plans for startups, businesses, and larger web apps."
        description="All pricing is transparent and designed to fit different project sizes."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricing.map((plan) => (
          <article
            key={plan.name}
            className={[
              "rounded-[2rem] border p-6 shadow-[0_30px_90px_rgba(2,6,23,0.35)] backdrop-blur-xl",
              plan.featured
                ? "border-cyan-400/40 bg-gradient-to-b from-cyan-400/15 to-white/5"
                : "border-white/10 bg-white/5",
            ].join(" ")}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                  {plan.priceInr} / {plan.priceUsd}
                </p>
              </div>
              {plan.featured ? (
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  Most popular
                </span>
              ) : null}
            </div>

            <div className="mt-6 grid gap-3">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
                  <p className="text-sm text-slate-200">{feature}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ClientFitSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Client Fit"
        title="Built for both global remote clients and growing Indian businesses."
        description="The same design system can be pitched differently depending on the market, but the core result stays the same: trust and conversion."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-cyan-200" />
            <h3 className="text-2xl font-semibold text-white">For US & Global Clients</h3>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">{clientFit.global}</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="h-6 w-6 text-fuchsia-200" />
            <h3 className="text-2xl font-semibold text-white">For Indian Clients</h3>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">{clientFit.india}</p>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title={site.callToAction}
        description="Send a quick message and I’ll help shape it into something sharp, modern, and conversion-focused."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Quick contact</p>
          <div className="mt-6 grid gap-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 transition hover:border-cyan-400/30"
            >
              <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-200">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-sm text-slate-400">{site.email}</p>
              </div>
            </a>
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 transition hover:border-fuchsia-400/30"
            >
              <div className="rounded-2xl bg-fuchsia-400/15 p-3 text-fuchsia-200">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-sm text-slate-400">{site.phone}</p>
              </div>
            </a>
            <a
              href={site.whatsapp}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 transition hover:border-emerald-400/30"
            >
              <div className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-200">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-slate-400">Fast response for quick inquiries</p>
              </div>
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
              Strong CTA
            </p>
            <p className="mt-2 text-lg font-semibold text-white">Let&apos;s build something amazing</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_30px_100px_rgba(2,6,23,0.35)] backdrop-blur-xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm text-slate-300">Name</span>
              <input
                name="name"
                required
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/40"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-slate-300">Email</span>
              <input
                name="email"
                type="email"
                required
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/40"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2">
            <span className="text-sm text-slate-300">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/40"
              placeholder="Tell me about your project..."
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Send Email
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
