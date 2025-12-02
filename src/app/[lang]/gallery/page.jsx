"use client";

import { useEffect, useState, useMemo, useRef, use } from "react";
import Image from "next/image";
import imagesLoaded from "imagesloaded";
import styles from "./page.module.css";
import classNames from "classnames";
import { useTranslation } from "@/hooks/use-translation";
import PhotoSwipeLightbox from "photoswipe/lightbox";

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
  const masonryRef = useRef(null);
  const lightboxRef = useRef(null);
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
    if (typeof window === "undefined") return;

    const gallery = galleryRef.current;
    if (!gallery) return;

    let destroyed = false;

    const initGallery = async () => {
      const Masonry = (await import("masonry-layout")).default;

      masonryRef.current = new Masonry(gallery, {
        itemSelector: ".gallery-item",
        percentPosition: true,
      });

      imagesLoaded(gallery, { background: false }, () => {
        if (masonryRef.current && !destroyed) {
          masonryRef.current.layout();
        }

        if (lightboxRef.current) {
          lightboxRef.current.destroy();
        }

        lightboxRef.current = new PhotoSwipeLightbox({
          gallery: "#" + gallery.id,
          children: "a[data-pswp]",
          pswpModule: () => import("photoswipe"),
          showHideAnimationType: "none",
        });

        lightboxRef.current.init();
      });
    };

    initGallery();

    return () => {
      destroyed = true;

      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }

      if (masonryRef.current) {
        masonryRef.current.destroy();
        masonryRef.current = null;
      }
    };
  }, [filter]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryContent}>
        <div className={styles.galleryHeader}>
          <div className={styles.galleryHeaderTitle}>
            <h2>{t?.gallery.title}</h2>
          </div>
          <div className={styles.galleryHeaderCategory}>
            {["video", "photo", "all"].map((category) => (
              <button
                key={category}
                className={classNames(styles.filterButton, {
                  [styles.video]: category === "video",
                  [styles.photo]: category === "photo",
                  [styles.all]: category === "all",
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
        <div id="gallery" className={styles.galleryBody} ref={galleryRef}>
          {filteredGalleryItems.map((galleryItem) => (
            <div
              key={galleryItem.src}
              className={classNames(styles.galleryItem, "gallery-item", {
                [styles.video]: galleryItem.category === "video",
                [styles.photo]: galleryItem.category === "photo",
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
                  src={`https://www.youtube.com/embed/${getYoutubeId(
                    galleryItem.src
                  )}`}
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
                  data-pswp
                  data-pswp-width="800"
                  data-pswp-height="600"
                  title={galleryItem.title}
                >
                  <Image
                    src={galleryItem.src}
                    width={800}
                    height={600}
                    quality={100}
                    priority
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
