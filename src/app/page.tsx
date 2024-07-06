import FeaturesItem from "@/components/ui/FeaturesItem";
import HomeCarousel from "@/components/ui/HomeCarusale";
import HomeCarusaleRight from "@/components/ui/HomeCarusaleRight";
import Products from "@/components/ui/Products ";
import SpecialOffer from "@/components/ui/SpecialOffer";


export default function Home() {
  return (
    <main>
      <div className="lg:flex items-center gap-6 lg:my-4 my-1 ">
        <HomeCarousel
          className=""
          titleClassName=""
          desClassName=""
          slideClassName=""
          imageClassName=""
          showTitle={false} />
        <HomeCarusaleRight />
      </div>
      <FeaturesItem />
      <Products />

      <SpecialOffer />
    </main>
  );
}
