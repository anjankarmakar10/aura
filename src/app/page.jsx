import FeatureBeautyDeals from "@/components/FeatureBeautyDeals/FeatureBeautyDeals";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import TrendingProducts from "@/components/TrendingProducts/TrendingProducts";
import FeatureBeautyStandard from "@/components/FeatureBeautyStandard/FeatureBeautyStandard";
import FeaturedBrands from "@/components/FeaturedBrands/FeaturedBrands";
import BudgetSkinCareProducts from "@/components/BudgetSkinCareProducts/BudgetSkinCareProducts";
import BudgetMakeupProducts from "@/components/BudgetMakeupProducts/BudgetMakeupProducts";
import Influencers from "@/components/Influencers/Influencers";
import Categories from "@/components/Categories/Categories";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <TrendingProducts />
      <FeatureBeautyDeals />
      <FeaturedBrands />
      <FeatureBeautyStandard />
      <BudgetSkinCareProducts />
      <BudgetMakeupProducts />
      <Influencers />
    </main>
  );
}
