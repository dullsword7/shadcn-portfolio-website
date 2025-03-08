import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { YouTubeEmbed } from "@next/third-parties/google"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

// Modify this file to change how individual projects are displayed
export function ProjectCard({ project } : { project:any }) {

    // only renders the CardFooter if either a github or demo url exists
    const hasLinks = project.githubUrl || project.liveUrl

    return (
        <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="relative aspect-video overflow-hidden">
                {project.videoId ? (
                    <YouTubeEmbed videoid={project.videoId} height={225} params="rel=0&mute=1" />
                ) : project.gif ? (
                    <Image
                        src={project.gif || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain transition-transform hover:scale-105"
                    />
                ) : (
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain transition-transform hover:scale-105"
                    />
                )}
            </div>
            <CardHeader>
                <CardTitle className="text-primary dark:text-primary-foreground">{project.title}</CardTitle>
                <CardDescription className="dark:text-gray-400">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag:any) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-secondary text-secondary-foreground dark:bg-gray-700 dark:text-gray-200"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            {hasLinks && (
                <CardFooter className="flex justify-between">
                    {project.githubUrl && (
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                        >
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                            </Link>
                        </Button>
                    )}
                    {project.liveUrl && (
                        <Button
                            size="sm"
                            asChild
                            className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
                        >
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </Link>
                        </Button>
                    )}
                </CardFooter>
            )}
        </Card>
    )
}
