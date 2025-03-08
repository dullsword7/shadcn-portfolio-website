import IntroSection from "@/components/intro-section";
import PersonalProjects from "@/components/personal-projects";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center">
      <IntroSection />
      <PersonalProjects />
    </div>
  )
}
