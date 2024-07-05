import FeaturesItem from "@/components/ui/FeaturesItem";
import HomeCarousel from "@/components/ui/HomeCarusale";
import HomeCarusaleRight from "@/components/ui/HomeCarusaleRight";
import Products from "@/components/ui/Products ";




export default function Home() {
  return (
    <main>
      <div className="lg:flex items-center gap-6 lg:my-4 my-1 ">
        <HomeCarousel />
        <HomeCarusaleRight />
      </div>
      <FeaturesItem />
      <Products />
    </main>
  );
}
