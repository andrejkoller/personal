"use client";
import { Fancybox } from "@fancyapps/ui";
import Image from "next/image";
import { useEffect } from "react";
import imagesLoaded from "imagesloaded";

export default function Page() {
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

  const handleFilter = (category) => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item) => {
      if (category === "all") {
        item.style.display = "flex";
      } else if (item.classList.contains(category)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  };

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
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <div className="gallery-header">
          <div className="gallery-header-title">
            <h2>Gallery</h2>
          </div>
          <div className="gallery-header-category">
            <button
              id="video"
              className="filter-button"
              onClick={() => handleFilter("video")}
            >
              <h4>Videos</h4>
            </button>
            <button
              id="photo"
              className="filter-button"
              onClick={() => handleFilter("photo")}
            >
              <h4>Photos</h4>
            </button>
            <button
              id="all"
              className="filter-button"
              onClick={() => handleFilter("all")}
            >
              <h4>All</h4>
            </button>
          </div>
        </div>
        <div className="gallery-body">
          {galleryItems.map((galleryItem, index) => {
            return (
              <div
                className={`gallery-item ${galleryItem.category}`}
                key={index}
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
                  ></iframe>
                ) : (
                  <a href={galleryItem.src} data-fancybox="gallery">
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
