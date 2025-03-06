import ProjectCard from "./components/project-card"

export default function Demo() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h2 className="mb-6 text-2xl font-bold">Featured Project</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio website built with Next.js and Tailwind CSS. Features a responsive design, dark mode, and animations."
          imageUrl="/placeholder.svg?height=300&width=600"
          technologies={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
          liveUrl="https://example.com"
          githubUrl="https://github.com/username/portfolio"
          featured={true}
        />
        <ProjectCard
          title="Task Management App"
          description="A full-stack application for managing tasks and projects. Includes authentication, real-time updates, and team collaboration features."
          imageUrl="/placeholder.svg?height=300&width=600"
          technologies={["React", "Node.js", "Express", "MongoDB"]}
          liveUrl="https://task-app.example.com"
          githubUrl="https://github.com/username/task-app"
        />
        <ProjectCard
          title="E-commerce Platform"
          description="An e-commerce platform with product listings, shopping cart, and checkout functionality. Integrated with Stripe for payments."
          imageUrl="/placeholder.svg?height=300&width=600"
          technologies={["Next.js", "Prisma", "PostgreSQL", "Stripe"]}
          liveUrl="https://shop.example.com"
          githubUrl="https://github.com/username/ecommerce"
        />
      </div>
    </div>
  )
}

