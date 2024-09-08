import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import PerformanceSection from "@/components/PerformanceSection/PerformanceSection";
import FunctionalitySection from "../components/FunctionalitySection/FunctionalitySection";
import "@shopify/polaris/build/esm/styles.css";

export default function Home() {
  return (
    <div className="bg-white h-[100%]">
      <Header />
      <WelcomeSection />
      <PerformanceSection />
      <FunctionalitySection />
    </div>
  );
}
