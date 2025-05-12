"use client";

import { useEffect, useState, useMemo, useRef, use } from "react";
import { Fancybox } from "@fancyapps/ui";
import Image from "next/image";
import imagesLoaded from "imagesloaded";
import styles from "./page.module.css";
import classNames from "classnames";
import { useTranslation } from "@/app/hooks/useTranslation";

const galleryItems = [
  {
    category: "video",
    src: "https://www.youtube.com/watch?v=6SYzyqDeXs4",
    title: "Gymnopedie No. 3",
  },
  {
    category: "photo",
    src: "/images/city_in_bavaria.jpg",
    title: "City in Bavaria",
  },
  {
    category: "photo",
    src: "/images/church_on_the_mountains.jpg",
    title: "Church on the Mountains",
  },
];

export default function Page({ params }) {
  const unwrappedParams = use(params);
  const lang = unwrappedParams?.lang || "en";
  const t = useTranslation(lang);

  const galleryRef = useRef(null);
  const [filter, setFilter] = useState("all");

  const getYoutubeId = (url) => {
    const u = new URL(url);
    return u.searchParams.get("v") || u.pathname.split("/").pop();
  };

  const filteredGalleryItems = useMemo(() => {
    return galleryItems.filter(
      (item) => filter === "all" || item.category === filter
    );
  }, [filter]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let masonryInstance;

    const initMasonryAndFancybox = async () => {
      const masonry = await import("masonry-layout");
      masonryInstance = new masonry.default(gallery, {
        itemSelector: ".gallery-item",
        percentPosition: true,
      });

      const imagesPromise = new Promise((resolve) => {
        imagesLoaded(gallery, { background: false }, () => resolve());
      });

      const iframes = gallery.querySelectorAll("iframe");
      const iframesPromise = Promise.all(
        Array.from(iframes).map(
          (iframe) =>
            new Promise((resolve) => {
              iframe.addEventListener("load", resolve);
            })
        )
      );

      await Promise.all([imagesPromise, iframesPromise]);

      const galleryItems = gallery.querySelectorAll(
        "[data-fancybox='gallery']"
      );

      if (galleryItems.length > 0) {
        Fancybox.bind("[data-fancybox='gallery']", {
          Thumbs: false,
          Image: {
            zoom: true,
            Panzoom: {
              maxScale: 2,
              minScale: 0.5,
              contain: "inside",
              fill: false,
            },
          },
          Toolbar: {
            display: ["zoom", "close"],
          },
        });
      }

      masonryInstance.layout();
    };

    initMasonryAndFancybox();

    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
      if (masonryInstance) masonryInstance.destroy();
    };
  }, [filter, filteredGalleryItems]);

  return (
    <div className={styles["gallery-container"]}>
      <div className={styles["gallery-content"]}>
        <div className={styles["gallery-header"]}>
          <div className={styles["gallery-header-title"]}>
            <h2>{t?.gallery.title}</h2>
          </div>
          <div className={styles["gallery-header-category"]}>
            {["video", "photo", "all"].map((category) => (
              <button
                key={category}
                className={classNames(styles["filter-button"], {
                  [styles["video"]]: category === "video",
                  [styles["photo"]]: category === "photo",
                  [styles["all"]]: category === "all",
                })}
                onClick={() => setFilter(category)}
                aria-label={`Show ${category} items`}
              >
                <h4>
                  {lang === "en"
                    ? category === "all"
                      ? category.charAt(0).toUpperCase() + category.slice(1)
                      : category.charAt(0).toUpperCase() +
                        category.slice(1) +
                        "s"
                    : ""}
                  {lang === "de"
                    ? category === "all"
                      ? t?.gallery.category[category]
                      : t?.gallery.category[category] + "s"
                    : ""}
                  {lang === "ru" ? t?.gallery.category[category] : ""}
                </h4>
              </button>
            ))}
          </div>
        </div>
        <div className={styles["gallery-body"]} ref={galleryRef}>
          {filteredGalleryItems.map((galleryItem) => (
            <div
              key={galleryItem.src}
              className={classNames(styles["gallery-item"], "gallery-item", {
                [styles["video"]]: galleryItem.category === "video",
                [styles["photo"]]: galleryItem.category === "photo",
              })}
              style={{
                border: `1px solid ${
                  galleryItem.category === "video" ? "#9a4c38" : "#4a1e6a"
                }`,
              }}
            >
              {galleryItem.category === "video" ? (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${getYoutubeId(galleryItem.src)}`}
                  title={galleryItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <a
                  href={galleryItem.src}
                  data-fancybox="gallery"
                  title={galleryItem.title}
                >
                  <Image
                    src={galleryItem.src}
                    layout="responsive"
                    width={800}
                    height={600}
                    quality={100}
                    alt={galleryItem.title}
                  />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
