import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Lamp from "@/components/Lamp";
import RecentProjects from "@/components/RecentProjects";
import TimeLine from "@/components/TimeLine";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import Scroll from "@/components/Scroll";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex
    justify-center items-center flex-col
    mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <TimeLine />
        <Scroll />
        <Footer />
        <Lamp />
      </div>
    </main>
  );
}
