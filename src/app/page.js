import Image from "next/image";
import bg from "../../public/background/home.jpg";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/wizard";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/models/wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
