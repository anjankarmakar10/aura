import FeatureBeautyDeals from "@/components/FeatureBeautyDeals/FeatureBeautyDeals";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import TrendingProducts from "@/components/TrendingProducts/TrendingProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrendingProducts />
      <FeatureBeautyDeals />
    </main>
  );
}
