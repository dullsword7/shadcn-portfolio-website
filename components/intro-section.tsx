import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import LinkedInProfilePicture from "@/public/images/LinkedInProfile.png"

export default function IntroSection() {
  const email = "alanwu4232@gmail.com"
  const linkedinUsername = "linkedin.com/in/alan-wu7"
  const githubUsername = "github.com/dullsword7"

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/5">
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-xl">
                <Image
                  src={LinkedInProfilePicture}
                  alt="Profile picture"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tight">Alan Wu</h1>
                <h2 className="text-xl text-muted-foreground">Software Developer | Cybersecurity Engineer</h2>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full mt-auto">
              <Button variant="outline" size="sm" className="justify-start gap-2 h-auto py-2" asChild>
                <div>
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="font-medium">{email}</span>
                </div>
              </Button>
              <Button variant="outline" size="sm" className="justify-start gap-2 h-auto py-2" asChild>
                <Link href={`https://${linkedinUsername}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 flex-shrink-0" />
                  <span className="font-medium">{linkedinUsername}</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="justify-start gap-2 h-auto py-2" asChild>
                <Link href={`https://${githubUsername}`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 flex-shrink-0" />
                  <span className="font-medium">{githubUsername}</span>
                </Link>
              </Button>
            </div>
          </div>
          <Card className="p-6 lg:w-2/3 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-t pt-4 lg:border-t-0 lg:pt-0">
                <p className="text-muted-foreground text-2xl">
                    Hi, I'm Alan! I graduated from the Ohio State University with a Bachelor's in Computer Science and Engineering.
                </p>
                <p className="text-muted-foreground text-2xl">
                    I love to create software and tools using all kinds of programming languages. C#, Python, and JavaScript are my go to choices for designing games, apps, and websites.
                </p>
                <p className="mt-4 text-muted-foreground text-2xl">
                    I have also developed a keen interest in Cybersecurity and am currently enrolled in Ohio State's Cybersecurity bootcamp.  I will soon being taking the CompTIA Security+ exam to obtain
                    my Security+ certificate.
                </p>
                <p className="mt-4 text-muted-foreground text-2xl">
                    Outside of programming, I enjoy chess, exercising, and video games! Feel free to reach out to me via email or LinkedIn!
                    Below are some of the projects I'm most proud of.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

