"use client";

import products from "@/data/products";
import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./TrendingProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const tabitems = ["all", "skincare", "makeup", "body", "hair"];

const TrendingProducts = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [currentTab, setCurrentTab] = useState(tabitems[0]);
  const [parent] = useAutoAnimate({
    easing: "ease-in-out",
  });

  return (
    <Container>
      <section className={styles.container}>
        <header className={styles.header}>
          <h2>
            Shop Our Trending <br /> Beauty Products
          </h2>
          <p>Explore the latest clean beauty essentials.</p>
        </header>
        <div className={styles.tablist}>
          {tabitems.map((tab) => (
            <button
              onClick={() => setCurrentTab(tab)}
              key={tab}
              className={clsx(
                styles.tab,
                currentTab === tab && styles.atciveTab
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="embla" ref={emblaRef}>
          <div
            ref={parent}
            className={clsx(styles.cardContainer, "embla__container")}
          >
            {products
              .filter((item) =>
                currentTab === "all" ? item : item.cetagory === currentTab
              )
              .map((product) => (
                <div className="embla__slide" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>
        <Button className={styles.button} outline={true}>
          Shop All Trending
        </Button>
      </section>
    </Container>
  );
};
export default TrendingProducts;
