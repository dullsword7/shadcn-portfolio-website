import IntroSection from "@/components/intro-section";
import PersonalProjects from "@/components/personal-projects";
import Gif from "@/components/gif";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center">
      <IntroSection />
      <PersonalProjects />
      {/* <Gif /> */}
    </div>
  )
}
