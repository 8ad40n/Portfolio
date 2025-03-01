"use client";
import AwardCard from "@/components/AwardCard";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Confetti, { ConfettiRef } from "@/components/ui/confetti";
import SparklesText from "@/components/ui/sparkles-text";
import TypingAnimation from "@/components/ui/typing-animation";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { useRef } from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="">
        <div className="relative pt-2 flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="flex flex-col justify-center items-center gap-6">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="border-4 border-gray-600 dark:border-gray-300 rounded-full p-1">
                  <Avatar className="size-60 md:size-80 rounded-full">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex-col flex space-y-1.5">
                  <SparklesText
                    className="text-2xl font-normal tracking-tighter text-center md:text-4xl lg:text-5xl"
                    text={`Hi, I'm ${DATA.name}`}
                  />
                  <TypingAnimation
                    className="max-w-[600px] text-sm md:text-xl text-center mx-auto font-light"
                    text={DATA.description}
                  />
                </div>
              </BlurFade>
            </div>
          </div>

          <Confetti
            ref={confettiRef}
            className="absolute left-0 top-0 z-0 size-full"
            onMouseEnter={() => {
              confettiRef.current?.fire({});
            }}
          />
        </div>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex justify-center items-center mt-6">
            <a
              href="/resume.pdf"
              download
              className="text-white bg-purple-700 px-8 py-2 rounded-lg"
            >
              My Resume
            </a>
          </div>
        </BlurFade>
        <hr className="mt-8" />
      </section>
      <section id="about" className="">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert text-justify">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <hr />
      {/* <section id="introduction">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Introduction</h2>
        </BlurFade>
        <div className="relative">
          <HeroVideoDialog
            className="dark:hidden block border-2 border-gray-600 md:p-1 rounded-lg"
            animationStyle="top-in-bottom-out"
            videoSrc="/intro.mp4"
            thumbnailSrc="/Thumbnail.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block border-2 border-gray-300 md:p-1 rounded-lg"
            animationStyle="top-in-bottom-out"
            videoSrc="/intro.mp4"
            thumbnailSrc="/Thumbnail.png"
            thumbnailAlt="Hero Video"
          />
          
        </div>
      </section>
      <hr /> */}
      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      <section id="education" className="">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <hr />
      <section id="skills" className="">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {Object.entries(DATA.skills).map(([category, skills]) => (
              <div key={category} className="w-full flex flex-col md:flex-row gap-2">
                {/* Category Title */}
                <h3 className="md:min-w-[150px] text-sm font-normal">
                  {category}
                </h3>
                <p className="hidden md:block">:</p>
                <div className="flex flex-wrap gap-2">
                  {/* Skill Badges */}
                  {skills.map((skill, id) => (
                    <BlurFade
                      key={skill}
                      delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                    >
                      <Badge
                        key={skill}
                        className="text-xs px-1 md:px-2"
                      >
                        {skill}
                      </Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
      <section id="Honors-&-awards" className="">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Honors & Awards</h2>
          </BlurFade>
          {DATA.award.map((award, id) => (
            <BlurFade key={award.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <AwardCard
                key={award.title}
                title={award.title}
                href={award.href}
                associate={award.Associate}
                logoUrl={award.AssociateLogoUrl}
                description={award.description}
                period={award.dates}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <hr />
      <section id="projects" className="md:border-2 md:rounded-xl">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed md:px-8">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact" className="border-2 rounded-lg px-3 md:px-4 py-4">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={`mailto:${DATA.contact.social.Email.url}`}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on Email
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
