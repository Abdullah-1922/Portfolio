import ContactSection from "@/components/common/ContactSection";
import BannerSection from "@/components/HomePageComponents/BannerSection";
import HomeProjectShow from "@/components/HomePageComponents/HomeProjectShow";
import { HomeTimeLine } from "@/components/HomePageComponents/HomeTimeLine";
import IntroduceSection from "@/components/HomePageComponents/IntroductionSection";
import SkillSection from "@/components/HomePageComponents/SkillSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BannerSection />
      <IntroduceSection />
      <SkillSection />
      <HomeProjectShow />
      <HomeTimeLine />
      <ContactSection />
    </div>
  );
}
