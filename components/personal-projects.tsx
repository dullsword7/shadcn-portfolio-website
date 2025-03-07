"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "./project-card"
import GameJamGif from "@/public/images/GameJam.gif"
import LinkSpinSlashGif from "@/public/images/LinkSpinSlash.gif"
import Test from "@/public/images/LinkedInProfile.png"

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
    category: "web",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-stack application for managing tasks and projects with team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    videoId: "dQw4w9WgXcQ",
    gif: "",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/username/task-app",
    category: "web",
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
    category: "web",
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
    category: "web",
  },
  {
    id: 5,
    title: "Mobile Fitness Tracker",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and fitness goals.",
    image: "/placeholder.svg?height=300&width=500",
    videoId: "",
    gif: "",
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/username/fitness-app",
    category: "mobile",
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    image: "/placeholder.svg?height=300&width=500",
    videoId: "",
    gif: "",
    tags: ["D3.js", "React", "TypeScript"],
    liveUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/username/data-viz",
    category: "data",
  },
]

export default function PersonalProjects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="container py-12 mx-auto">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary dark:text-primary-foreground">
          Personal Projects
        </h2>
        <p className="max-w-2xl text-muted-foreground dark:text-gray-400">
          A collection of projects I've built to showcase my skills and experience in web development, mobile
          applications, and data visualization.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <div className="flex justify-center">
          <TabsList className="bg-secondary dark:bg-gray-800">
            <TabsTrigger
              value="all"
              onClick={() => setFilter("all")}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"
            >
              All Projects
            </TabsTrigger>
            <TabsTrigger
              value="web"
              onClick={() => setFilter("web")}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"
            >
              Web
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              onClick={() => setFilter("mobile")}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"
            >
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value="data"
              onClick={() => setFilter("data")}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"
            >
              Data
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


