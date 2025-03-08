"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "./project-card"

import GameJamGif from "@/public/images/GameJam.gif"
import LinkSpinSlashGif from "@/public/images/LinkSpinSlash.gif"
import Quotedle from "@/public/images/quotedle.png"
import PinyinApp from "@/public/images/PinyinApp.png"
import NotesApp from "@/public/images/notesbkg.png"
import ChessAnalysis from "@/public/images/chessanalysisstate3.png"
import VRDemo from "@/public/images/demo1.png"
import DiscordBot from "@/public/images/DiscordIcon.png"
import LinuxPenguin from "@/public/images/LinuxPenguin.png"
import PenTesting from "@/public/images/PenTesting.png"
import Splunk from "@/public/images/splunk.png"

// List of all projects, simply add another project by copy pasting { id:1, title:"Title", etc ...}
const projects = [
  {
    id: 1,
    title: "Virtual Reality Developer",
    description: "I worked part time at The Ohio State University College of Optometry as a Unity devloper creating virtual reality projects. I designed several games in Unity to assist with Dr. Ooi's research into virtual reality and eye coordination. By sending a raycast to objects users focused on with their eyes, objects in the scene could be picked up and manipulated with just the eyes. I used this functionality to design games that allowed a user to train their vision convergence and divergence.",
    image: VRDemo,
    videoId: "",
    gif: "",
    tags: ["C#", "Python", "Unity", "Git"],
    liveUrl: "",
    githubUrl: "",
    category: "software",
  },
  {
    id: 2,
    title: "Necrolith",
    description: "This was my senior capstone project, an Action Role Playing Game (ARPG), designed with a group of 8. The primary features within the project I implemented were, passive skills, stat intializations, level loading, fast travel, and sounds.",
    image: "/placeholder.svg?height=300&width=500",
    videoId: "VrURfU546ls",
    gif: "",
    tags: ["C#", "Unity", "Git"],
    liveUrl: "",
    githubUrl: "",
    category: "software",
  },
  {
    id: 3,
    title: "Pinyin Translator",
    description: "I created this app to help facilitate my Chinese learning. It will accept either Simplified or Traditional Chinese characters, translate the sentence to Pinyin, then append the sentence to a file you select. Personally, I use Obsidian, so I continue to add new sentences to my Obsidian notes whenever I practice my Chinese.",
    image: PinyinApp,
    videoId: "",
    gif: "",
    tags: ["Python"],
    liveUrl: "",
    githubUrl: "",
    category: "software",
  },
  {
    id: 4,
    title: "Quotedle",
    description: "Quotedle is a fun quote guessing game inspired by games like Loldle and Wordle. A quote will be randomly generated using Animechan's api and the goal is to guess which character said the quote. After a certain number of incorrect guesses, hints can be viewed. There are also options to switch to specific animes to use only quotes from those animes, or to switch to popular western tv shows like Game of Thrones and Breaking Bad.",
    image: Quotedle,
    videoId: "",
    gif: "",
    tags: ["JavaScript", "Html", "Git"],
    liveUrl: "https://quotdle.onrender.com/",
    githubUrl: "",
    category: "software",
  },
  {
    id: 5,
    title: "Legend of Zelda Re-Creation",
    description: "A re-creation of the original Legend of Zelda game's first dungeon, done for a project course at Ohio State. I worked on a team of six over the course of the semester and five sprints, following agile development methodologies. I handled the enemy AI, enemy drop tables, room loading, and a lot of the play testing and bug fixing. The final sprint of the project was dedicated to adding our own unique features to the original game. I chose to add Link's iconic spinnig slash, which gave him the ability to deflect enemy projectiles as well as a challenging final boss with a variety of full screen attacks.",
    image: "",
    videoId: "",
    gif: LinkSpinSlashGif,
    tags: ["C#", "Monogame", "Git"],
    liveUrl: "",
    githubUrl: "",
    category: "software",
  },
  {
    id: 6,
    title: "Game Jams",
    description: "These are some of the projects I have created during the game jams I have entered. The game jams I enter are a great way to keep my skills as a game developer sharp and also a great way I can learn new things about game development and animations.",
    image: "",
    videoId: "",
    gif: GameJamGif,
    tags: ["C#", "Unity", "Git"],
    liveUrl: "",
    githubUrl: "",
    category: "software",
  },
  {
    id: 7,
    title: "Linux Hardening",
    description:
      "In this project I simulated auditing and fixing a fictional orginazation's poorly configured Linux Server. This was accomplished by enforcing password policies and sudo permissions, validating permissions on files and directories, securing SSH settings, updating system packages, disabling unecessary services, enabling logging, and automating hardening tasks through the use of bash scripts and cron jobs.",
    image: LinuxPenguin,
    videoId: "",
    gif: "",
    tags: ["Linux", "Bash"],
    liveUrl: "https://docs.google.com/document/d/13DtJ8-EY_jtXQyTSOaPn7L2KdqTo43F0naIgB_Tydxs/edit?usp=drive_link",
    githubUrl: "",
    category: "cybersecurity",
  },
  {
    id: 8,
    title: "Penetration Testing",
    description:
      "In this project I simulated attacking a fictional organization's web application, Linux servers, and Window servers. The web application was exploited using XSS and the tool Metasploit was used to attack the Linux and Windows servers mainly through the use of Remote Code Execution. This is only a brief overview of some of the weaknesses found. A full summary of the techniques, tools, and exploits used can be found in the Penetration Testing report below.",
    image: PenTesting,
    videoId: "",
    gif: "",
    tags: ["Penetration Testing", "Linux", "Windows", "Metasploit MSFConsole", "Meterpreter"],
    liveUrl: "https://docs.google.com/document/d/1lugMLE7HnsKyftYZwoiHU5OJQuN5AqAGyJl3YWtcP8c/edit?usp=drive_link",
    githubUrl: "",
    category: "cybersecurity",
  },
  {
    id: 9,
    title: "Security Monitoring Environment",
    description:
      "In this project I simulated building a custom security monitoring environment for a fictional orginzation. Splunk was used to automically set up a dashboard, reports, and alerts, used for monitoring Windows signatures and users, and HTTP Methods and response codes from the Apache logs. A full presentation containing the reports, alerts, and an attack analysis can be accessed though the link below.",
    image: Splunk,
    videoId: "",
    gif: "",
    tags: ["Splunk", "Security Monitoring"],
    liveUrl: "https://docs.google.com/presentation/d/1YU3H-NlhxLisb_n4pX7iPUrnzja3EfChWAK-3tHKLZg/edit?usp=drive_link",
    githubUrl: "",
    category: "cybersecurity",
  },
  {
    id: 10,
    title: "Notes Web App",
    description: "Developed with Node.js, EJS, and MongoDB, my notes app is a user-friendly, versatile tool for capturing thoughts and ideas effortlessly. Users can create, delete, and update their notes anytime and anywhere.",
    image: "",
    videoId: "",
    gif: NotesApp,
    tags: ["JavaScript", "Node.js", "EJS", "MongoDB"],
    liveUrl: "",
    githubUrl: "",
    category: "software",
  },
  {
    id: 11,
    title: "Chess Predictions",
    description: "A chess AI project built to predict both players chances of winning. Makes its prediction based on each players rating and the engine evaluation of the current position.\nIn this example the engine evaluation is +1.93, meaning white has a distinct advantage. As a result, whites chances of losing are very slim.",
    image: ChessAnalysis,
    videoId: "",
    gif: "",
    tags: ["Python"],
    liveUrl: "",
    githubUrl: "",
    category: "software",
  },
  {
    id: 12,
    title: "Discord Bot",
    description: "A discord bot I made for my own community of friends. Currently has four different commands that can be invoked with \"/\". /quiz - prompts the user with a question and waits for their answer. /profile - sends a custom porfile enlarging the user's avatar on a custom background. /league - requires an player name as input, then scapes U.GG to return an embed containing the players profile. /joinvoice - allows the bot to join voice channel and play a sound bite",
    image: DiscordBot,
    videoId: "",
    gif: "",
    tags: ["Python"],
    liveUrl: "",
    githubUrl: "",
    category: "software",
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


