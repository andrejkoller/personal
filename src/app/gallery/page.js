"use client";

import { useEffect, useState, useMemo } from "react";
import { Fancybox } from "@fancyapps/ui";
import Image from "next/image";
import imagesLoaded from "imagesloaded";

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
];

export default function Page() {
  const [filter, setFilter] = useState("all");

  const filteredItems = useMemo(() => {
    return galleryItems.filter(
      (item) => filter === "all" || item.category === filter
    );
  }, [filter]);

  useEffect(() => {
    const grid = document.querySelector(".gallery-body");
    if (!grid) return;

    import("masonry-layout").then((Masonry) => {
      const masonry = new Masonry.default(grid, {
        itemSelector: ".gallery-item",
        percentPosition: true,
      });

      const imagesPromise = new Promise((resolve) => {
        imagesLoaded(grid, resolve);
      });

      const iframes = grid.querySelectorAll("iframe");
      const iframesPromise = Promise.all(
        Array.from(iframes).map(
          (iframe) =>
            new Promise((resolve) => {
              iframe.addEventListener("load", resolve);
            })
        )
      );

      Promise.all([imagesPromise, iframesPromise]).then(() => {
        masonry.layout();
      });

      Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: false,
        Toolbar: {
          display: ["zoom", "fullscreen", "close"],
        },
      });

      return () => {
        Fancybox.unbind("[data-fancybox='gallery']");
        masonry.destroy();
      };
    });
  }, [filter]);

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <div className="gallery-header">
          <div className="gallery-header-title">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-header-category">
            {["video", "photo", "all"].map((category) => (
              <button
                key={category}
                className={`filter-button ${category} ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
                aria-label={`Show ${category} items`}
              >
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}s</h4>
              </button>
            ))}
          </div>
        </div>
        <div className="gallery-body">
          {filteredItems.map((galleryItem) => (
            <div
              key={galleryItem.src}
              className={`gallery-item ${galleryItem.category}`}
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
                  src={`https://www.youtube.com/embed/${new URLSearchParams(
                    new URL(galleryItem.src).search
                  ).get("v")}`}
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
