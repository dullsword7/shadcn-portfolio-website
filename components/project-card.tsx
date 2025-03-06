"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export default function ProjectCard({
  title = "Project Title",
  description = "A short description of the project and what technologies were used to build it.",
  imageUrl = "/placeholder.svg?height=300&width=600",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all", featured ? "border-primary" : "")}>
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="mt-2 line-clamp-2">{description}</CardDescription>
          </div>
          {featured && (
            <Badge variant="default" className="ml-2">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

