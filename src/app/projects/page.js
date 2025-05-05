"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const handleFilter = (category) => {
    const projectItems = document.querySelectorAll(".project-item");

    projectItems.forEach((item) => {
      if (category === "all") {
        item.style.display = "flex";
      } else if (item.classList.contains(category)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  };

  const projectItems = [
    {
      title: "Gymnopédies",
      author: "Érik Satie",
      description:
        "Érik Satie composed these three brief and atmospheric compositions in 3/4 time, each of which shares a common theme and structure. When experienced, they release a sentimental longing for the past or the bittersweet unknown. A time and place where you have never been before.",
      category: "solo",
      instrument: "Fortepiano",
      image: "/images/paris_place_de_la_republique_at_twighlight.jpg",
      href: "https://www.andrejkoller.com/projects/gymnopedies",
      link: "https://www.youtube.com/watch?v=6SYzyqDeXs4",
    },
    {
      title: "Oversky",
      author: "Luke Howard",
      description:
        'Luke Howard – "Oversky" is an atmospheric piano piece characterized by gentle, floating melodies and a melancholic yet hopeful mood. With its minimalist, neoclassical composition, it evokes the image of a vast sky ("Oversky"), where delicate sounds drift like passing clouds.',
      category: "solo",
      instrument: "Fortepiano",
      image: "/images/mondnacht_am_dnjepr.jpg",
      href: "https://www.andrejkoller.com/projects/oversky",
      link: "",
    },
    {
      title: "Les feuilles mortes",
      author: "Jean-Michel Blais",
      description:
        "Jean-Michel Blais’ interpretation of Les Feuilles Mortes captures the nostalgic essence of the classic French song while infusing it with his signature contemporary neoclassical style. His delicate touch on the piano brings out the melancholic beauty of falling autumn leaves, evoking a sense of longing and reflection. With soft, flowing melodies and subtle dynamic shifts, the piece feels intimate and cinematic, as if carrying the listener through a quiet, golden-hued autumn afternoon.",
      category: "solo",
      instrument: "Fortepiano",
      image: "/images/street_saverne.jpg",
      href: "https://www.andrejkoller.com/projects/les-feuilles-mortes",
      link: "",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <div className="projects-header-title">
            <h2>Projects</h2>
          </div>
          <div className="projects-header-category">
            <button
              id="solo"
              className="filter-button"
              onClick={() => handleFilter("solo")}
            >
              <h4>Solo</h4>
            </button>
            <button
              id="ensemble"
              className="filter-button"
              onClick={() => handleFilter("ensemble")}
            >
              <h4>Ensemble</h4>
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
        <div className="projects-body">
          {projectItems.map((projectItem, index) => (
            <div
              className={`project-item ${projectItem.category}`}
              key={index}
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
              <div className="project-image-title">
                <div className="project-image">
                  <Link href={projectItem.href}>
                    <Image
                      src={projectItem.image}
                      alt={projectItem.title}
                      width={500}
                      height={500}
                      layout="responsive"
                    />
                  </Link>
                </div>
                <div className="project-title">
                  <h3>
                    <Link href={projectItem.href}>
                      <span>{projectItem.title}</span>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="project-author-category">
                <p className="author">{projectItem.author}</p>
                <p className="category">{projectItem.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
