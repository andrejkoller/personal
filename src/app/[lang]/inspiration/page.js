"use client";

import Image from "next/image";
import { use, useEffect, useRef } from "react";
import imagesLoaded from "imagesloaded";
import styles from "./page.module.css";
import classNames from "classnames";
import { useTranslation } from "@/hooks/useTranslation";

export default function Page({ params }) {
  const unwrappedParams = use(params);
  const lang = unwrappedParams?.lang || "en";
  const t = useTranslation(lang);

  const inspirationItems = [
    {
      category: "quote",
      quote: `${t?.inspiration.itemOne.quote}`,
      author: `${t?.inspiration.itemOne.author}`,
      short: false,
    },
    {
      category: "art",
      image: "/images/golden_autumn.jpg",
      artist: "Isaak Levitan, 1895",
      title: "'Golden Autumn'",
      artCategory: "Realism",
    },
    {
      category: "quote",
      quote: `${t?.inspiration.itemTwo.quote}`,
      author: `${t?.inspiration.itemTwo.author}`,
      short: true,
    },
    {
      category: "quote",
      quote: `${t?.inspiration.itemThree.quote}`,
      author: `${t?.inspiration.itemThree.author}`,
      short: true,
    },
    {
      category: "art",
      image: "/images/train_in_the_snow.jpg",
      artist: "Claude Monet, 1875",
      title: "'Train in the Snow, the Engine'",
      artCategory: "Impressionism",
    },
    {
      category: "art",
      image: "/images/the_meadow.jpg",
      artist: "Alfred Sisley, 1875",
      title: "'The Meadow'",
      artCategory: "Impressionism",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=EFJ7kDva7JE",
      title: "Mariage d'Amour",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=aS4YDuTfJ7Y",
      title: "Chopin Nocturne C Sharp Minor",
    },
    {
      category: "quote",
      quote: `${t?.inspiration.itemFour.quote}`,
      author: `${t?.inspiration.itemFour.author}`,
      short: true,
    },
    {
      category: "art",
      image: "/images/terasse_de_cafe_la_nuit.jpg",
      artist: "Vincent van Gogh, 1888",
      title: "'Cafe Terrace at Night'",
      artCategory: "Impressionism",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=Tnj6COmS4ow",
      title: "Schindler's list - Main theme (piano)",
    },
    {
      category: "quote",
      quote: `${t?.inspiration.itemFive.quote}`,
      author: `${t?.inspiration.itemFive.author}`,
      short: false,
    },
    {
      category: "art",
      image: "/images/the_gare_saint_lazare.jpg",
      artist: "Claude Monet, 1877",
      title: "'The Gare Saint Lazare'",
      artCategory: "Impressionism",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=c5DScnVwhG0",
      title: "Eric Christian - La Valse au Clair de Lune",
    },
    {
      category: "quote",
      quote: `${t?.inspiration.itemSix.quote}`,
      author: `${t?.inspiration.itemSix.author}`,
      short: true,
    },
    {
      category: "art",
      image: "/images/the_magpie.jpg",
      artist: "Claude Monet, 1868/1869",
      title: "'The Magpie'",
      artCategory: "Impressionism",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=sgqtFZ9S5sA",
      title: "Mozart - Piano Concerto No. 21 in C Major, K. 467: II. Andante",
    },
    {
      category: "art",
      image: "/images/wheatfield_with_lark.jpg",
      artist: "Vincent van Gogh, 1887",
      title: "'Wheatfield with larks'",
      artCategory: "Impressionism",
    },
    {
      category: "art",
      image: "/images/birch_trees.jpg",
      artist: "Alexander Jakowlevitsch Golowin, 1863 - 1930",
      title: "'Birch Trees'",
      artCategory: "Symbolism",
    },
    {
      category: "quote",
      quote: `${t?.inspiration.itemSeven.quote}`,
      author: `${t?.inspiration.itemSeven.author}`,
      short: true,
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=JlMHjo7Jwhk",
      title: "Shostakovich - Piano Concerto No. 2: II. Andante",
    },
    {
      category: "art",
      image: "/images/bog_cottage.jpg",
      artist: "Otto Modersohn, 1899",
      title: "'Bog cottage croft in the evening sunshine'",
      artCategory: "Expressionism",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=EcichgtAIL4",
      title: "Schubert: Schwanengesang, D. 957: No. 4, Ständchen",
    },
    {
      category: "quote",
      quote: `${t?.inspiration.itemEight.quote}`,
      author: `${t?.inspiration.itemEight.author}`,
      short: true,
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=iWM3xRh1t24",
      title: "Late Night Train",
    },
    {
      category: "art",
      image: "/images/road_in_louveciennes.jpg",
      artist: "Alfred Sisley, 1883",
      title: "'A Road in Louveciennes'",
      artCategory: "Impressionism",
    },
    {
      category: "art",
      image: "/images/seascape_night.jpg",
      artist: "Thomas Alexander Harrison, c.1892-93",
      title: "'Seascape'",
      artCategory: "Impressionism",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=OXXRoa1U6xU",
      title:
        "Mozart: Sonata for Piano and Violin in E Minor, K. 304: II. Tempo di minuetto",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=khgCCEX4Z4M",
      title: "we circle through the night, consumed by fire - Max Richter",
    },
    {
      category: "art",
      image: "/images/autumn_school.jpg",
      artist: "Marianne von Werefkin, 1907",
      title: "'Autumn (school)'",
      artCategory: "Expressionism",
    },
    {
      category: "quote",
      quote: `${t?.inspiration.itemNine.quote}`,
      author: `${t?.inspiration.itemNine.author}`,
      short: true,
    },
    {
      category: "art",
      image: "/images/summer.jpg",
      artist: "Claude Monet, 1874",
      title: "'Summer'",
      artCategory: "Impressionism",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=bOqtesgLQQo",
      title: "Malasana",
    },
    {
      category: "quote",
      quote: `${t?.inspiration.itemTen.quote}`,
      author: `${t?.inspiration.itemTen.author}`,
      short: false,
    },
    {
      category: "art",
      image: "/images/saint_mary_church.jpg",
      artist: "August Macke, 1911",
      title: "'Saint Mary's Church'",
      artCategory: "Expressionism",
    },
    {
      category: "art",
      image: "/images/blue_sky.jpg",
      artist: "Eugène Boudin, 1824 - 1898",
      title: "'Blue sky, white clouds'",
      artCategory: "Impressionism",
    },
    {
      category: "video",
      src: "https://www.youtube.com/watch?v=_2L311Makxc",
      title: "Erik Satie - Caresse",
    },
  ];

  const inspirationRef = useRef(null);

  useEffect(() => {
    const inspiration = inspirationRef.current;
    if (!inspiration) return;

    let masonryInstance;

    import("masonry-layout").then((masonry) => {
      masonryInstance = new masonry.default(inspiration, {
        itemSelector: ".inspiration-item",
        percentPosition: true,
      });

      const imagesPromise = new Promise((resolve) => {
        imagesLoaded(inspiration, { background: true }, () => resolve());
      });

      const iframes = inspiration.querySelectorAll("iframe");
      const iframesPromise = Promise.all(
        Array.from(iframes).map(
          (iframe) =>
            new Promise((resolve) => {
              iframe.addEventListener("load", resolve);
            })
        )
      );

      Promise.all([imagesPromise, iframesPromise]).then(() => {
        masonryInstance.layout();
      });

      return () => {
        masonryInstance.destroy();
      };
    }, []);
  });

  return (
    <div className={styles.inspirationContainer}>
      <div className={styles.inspirationContent}>
        <div className={styles.inspirationHeader}>
          <div className={styles.inspirationHeaderTitle}>
            <h2>{t?.inspiration.title}</h2>
            <p>
              {t?.inspiration.descriptionOne}
              <br />
              {t?.inspiration.descriptionTwo}
            </p>
          </div>
        </div>
        <div className={styles.inspirationBody} ref={inspirationRef}>
          {inspirationItems.map((item, index) => (
            <div
              key={index}
              className={classNames(styles.inspirationItem, "inspiration-item")}
            >
              {item.category === "quote" && (
                <div
                  className={classNames(styles.quoteItem, {
                    [styles.short]: item.short,
                  })}
                >
                  <p>{item.quote}</p>
                  <p className={styles.quoteAuthor}>{item.author}</p>
                </div>
              )}
              {item.category === "art" && (
                <div className={styles.artItem}>
                  <Image
                    src={item.image}
                    width={800}
                    height={600}
                    quality={100}
                    alt={item.title}
                    priority
                  />
                  <p>{item.artist}</p>
                  <p>{item.title}</p>
                  <p>{item.artCategory}</p>
                </div>
              )}
              {item.category === "video" && (
                <div className={styles.videoItem}>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${
                      item.src.split("=")[1]
                    }`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p>{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
