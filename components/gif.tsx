import LinkedIn from "@/public/images/LinkedInProfile.png"
import LinkSpinSlashGif from "@/public/images/LinkSpinSlash.gif"
import Hello from "@/public/images/GameJam.gif"
import Capy from "@/public/images/Capy.gif"
import Frisbee from "@/public/images/Frisbee.gif"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function Gif() {
    return (
        <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Image
                src={Hello}
                alt="hello"
                height={500}
                width={500}>
            </Image>
            <Image
                src={Capy}
                alt="hello"
                height={500}
                width='100%'>
            </Image>
            <Image
                src={Frisbee}
                alt="hello"
                height={500}
                width='100%'>
            </Image>
        </Card>
    )
}
