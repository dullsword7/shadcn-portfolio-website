"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "./project-card"
import GameJamGif from "@/public/images/GameJam.gif"
import LinkSpinSlashGif from "@/public/images/LinkSpinSlash.gif"
import Test from "@/public/images/LinkedInProfile.png"
import Capy from "@/public/images/Capy.gif"

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    image: "",
    videoId: "",
    gif: LinkSpinSlashGif, // New field for GIF URL
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/portfolio",
    category: "software",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-stack application for managing tasks and projects with team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    videoId: "VrURfU546ls",
    gif: "",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/username/task-app",
    category: "software",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data using a third-party API.",
    image: "",
    videoId: "",
    gif: GameJamGif, // Example GIF URL
    tags: ["JavaScript", "API", "CSS"],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/username/weather-app",
    category: "software",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=300&width=500",
    videoId: "",
    gif: "",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com/shop",
    githubUrl: "https://github.com/username/ecommerce",
    category: "cybersecurity",
  },
]

export default function PersonalProjects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="container py-12 mx-auto">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary dark:text-primary-foreground">
          Personal Projects
        </h2>
        <p className="max-w-2xl text-2xl dark:text-gray-400">
          A collection of projects I've built to showcase my skills and experience in software development and cybersecurity.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <div className="flex justify-center">
          <TabsList className="bg-secondary dark:bg-gray-800 h-12">
            <TabsTrigger
              value="all"
              onClick={() => setFilter("all")}
              className="data-[state=active]:dark:bg-gray-800 dark:data-[state=active]:bg-primary text-xl"
            >
              All Projects
            </TabsTrigger>
            <TabsTrigger
              value="web"
              onClick={() => setFilter("software")}
              className="data-[state=active]:dark:bg-gray-800 dark:data-[state=active]:bg-primary text-xl"
            >
              Software Development
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              onClick={() => setFilter("cybersecurity")}
              className="data-[state=active]:dark:bg-gray-800 dark:data-[state=active]:bg-primary text-xl"
            >
              Cybersecurity
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="web" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mobile" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}


