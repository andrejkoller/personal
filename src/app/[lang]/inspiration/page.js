"use client";

import Image from "next/image";
import { use, useEffect, useRef } from "react";
import imagesLoaded from "imagesloaded";
import styles from "./page.module.css";
import classNames from "classnames";
import { useTranslation } from "@/app/hooks/useTranslation";

const inspirationItems = [
  {
    category: "quote",
    quote:
      "“Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.”",
    author: "Fyodor Dostoevsky, The Brothers Karamazov",
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
    quote:
      "“To achieve great things, two things are needed; a plan, and not quite enough time.”",
    author: "Leonard Bernstein",
    short: true,
  },
  {
    category: "quote",
    quote:
      "“To send light into the darkness of men's hearts - such is the duty of the artist.”",
    author: "Robert Schumann",
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
    quote: "“But how could you live and have no story to tell?”",
    author: "Fyodor Dostoevsky, White Nights",
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
    quote:
      "“If and when you fall in love, may you be happy with her. I don't need to wish her anything, for she'll be happy with you. May your sky always be clear, may your dear smile always be bright and happy, and may you be for ever blessed for that moment of bliss and happiness which you gave to another lonely and grateful heart. Isn't such a moment sufficient for the whole of one's life?”",
    author: "Fyodor Dostoevsky, White Nights",
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
    quote: "“Whoever saves one life saves the world entire.”",
    author: "Stern - Schindler's List",
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
    quote: "“In order to be able to think, you have to risk being offensive.”",
    author: "Jordan B. Peterson",
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
    quote: "“Carpe diem.”",
    author: "Quintus Horatius Flaccus",
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
    quote:
      "“Music is the mediator between the spiritual and the sensual life.”",
    author: "Ludwig van Beethoven",
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
    quote:
      "“He was despised and rejected by mankind, a man of suffering, and familiar with pain. Surely he took up our pain and bore our suffering, yet we considered him punished by God. But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed. We all, like sheep, have gone astray; each of us has turned to our own way; and the Lord has laid on him the iniquity of us all. He was oppressed and afflicted, yet he did not open his mouth; he was led like a lamb to the slaughter. After he has suffered, he will see the light of life and be satisfied; by his knowledge my righteous servant will justify many, and he will bear their iniquities.”",
    author: "Isaiah 53, summary",
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

export default function Page({ params }) {
  const unwrappedParams = use(params);
  const lang = unwrappedParams?.lang || "en";
  const t = useTranslation(lang);

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
    <div className={styles["inspiration-container"]}>
      <div className={styles["inspiration-content"]}>
        <div className={styles["inspiration-header"]}>
          <div className={styles["inspiration-header-title"]}>
            <h2>{t?.inspiration.title}</h2>
            <p>
              {t?.inspiration.descriptionOne}
              <br />
              {t?.inspiration.descriptionTwo}
            </p>
          </div>
        </div>
        <div className={styles["inspiration-body"]} ref={inspirationRef}>
          {inspirationItems.map((item, index) => (
            <div
              key={index}
              className={classNames(
                styles["inspiration-item"],
                "inspiration-item"
              )}
            >
              {item.category === "quote" && (
                <div
                  className={classNames(styles["quote-item"], {
                    [styles["short"]]: item.short,
                  })}
                >
                  <p>{item.quote}</p>
                  <p className={styles["quote-author"]}>{item.author}</p>
                </div>
              )}
              {item.category === "art" && (
                <div className={styles["art-item"]}>
                  <Image
                    src={item.image}
                    layout="responsive"
                    width={800}
                    height={600}
                    quality={100}
                    alt={item.title}
                  />
                  <p>{item.artist}</p>
                  <p>{item.title}</p>
                  <p>{item.artCategory}</p>
                </div>
              )}
              {item.category === "video" && (
                <div className={styles["video-item"]}>
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
