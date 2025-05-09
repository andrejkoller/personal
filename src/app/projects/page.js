"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.css";
import classNames from "classnames";

const projectItems = [
  {
    title: "Gymnopédies",
    author: "Érik Satie",
    category: "solo",
    instrument: "Fortepiano",
    image: "/images/paris_place_de_la_republique_at_twighlight.jpg",
    href: "/projects/gymnopedies",
  },
  {
    title: "Oversky",
    author: "Luke Howard",
    category: "solo",
    instrument: "Fortepiano",
    image: "/images/mondnacht_am_dnjepr.jpg",
    href: "/projects/oversky",
  },
  {
    title: "Les feuilles mortes",
    author: "Jean-Michel Blais",
    category: "solo",
    instrument: "Fortepiano",
    image: "/images/street_saverne.jpg",
    href: "/projects/les-feuilles-mortes",
  },
  {
    title: "Gnossiennes",
    author: "Érik Satie",
    category: "solo",
    instrument: "Fortepiano",
    image: "/images/allee_zum_schlosskammer.jpeg",
    href: "/projects/gnossiennes",
  },
  {
    title: "Vexations",
    author: "Érik Satie",
    category: "solo",
    instrument: "Fortepiano",
    image: "/images/grey_and_silver_whistler.webp",
    href: "/projects/vexations",
  },
    {
    title: "La Valse d'Amelie",
    author: "Yann Tiersen",
    category: "solo",
    instrument: "Fortepiano",
    image: "/images/interior_with_pink_wallpaper.jpg",
    href: "/projects/la-valse-d-amelie",
  },
];

export default function Page() {
  const [filter, setFilter] = useState("all");

  const filteredProjectItems = useMemo(() => {
    return projectItems.filter(
      (item) => filter === "all" || item.category === filter
    );
  }, [filter]);

  return (
    <div className={styles["projects-container"]}>
      <div className={styles["projects-content"]}>
        <div className={styles["projects-header"]}>
          <div className={styles["projects-header-title"]}>
            <h2>Projects</h2>
          </div>
          <div className={styles["projects-header-category"]}>
            {["solo", "ensemble", "all"].map((category) => (
              <button
                key={category}
                className={classNames(styles["filter-button"], {
                  [styles["solo"]]: category === "solo",
                  [styles["ensemble"]]: category === "ensemble",
                  [styles["all"]]: category === "all",
                })}
                onClick={() => setFilter(category)}
                aria-label={`Show ${category} items`}
              >
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              </button>
            ))}
          </div>
        </div>
        <div className={styles["projects-body"]}>
          {filteredProjectItems.map((projectItem) => (
            <div
              className={classNames(
                styles["project-item"],
                styles[projectItem.category]
              )}
              key={projectItem.title}
              style={{
                border: `1px solid ${
                  projectItem.category === "solo"
                    ? "#9a4c38"
                    : projectItem.category === "ensemble"
                      ? "#4a1e6a"
                      : ""
                }`,
              }}
            >
              <div className={styles["project-image-container"]}>
                <div className={styles["project-image"]}>
                  <Link
                    href={projectItem.href}
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={projectItem.image}
                      alt={projectItem.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </Link>
                </div>
                <div className={styles["project-title"]}>
                  <h3>
                    <Link href={projectItem.href}>
                      <span>{projectItem.title}</span>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={styles["project-details"]}>
                <p className={styles["author"]}>{projectItem.author}</p>
                <p className={styles["category"]}>{projectItem.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
