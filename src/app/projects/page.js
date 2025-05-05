import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const projects = [
    {
      title: "Gymnopédies",
      author: "Érik Satie",
      description:
        "Érik Satie composed these three brief and atmospheric compositions in 3/4 time, each of which shares a common theme and structure. When experienced, they release a sentimental longing for the past or the bittersweet unknown. A time and place where you have never been before.",
      category: "Solo",
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
      category: "Solo",
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
      category: "Solo",
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
            <Link href="/" id="solo" className="filter-button">
              <h4>Solo</h4>
            </Link>
            <Link href="/" id="ensemble" className="filter-button">
              <h4>Ensemble</h4>
            </Link>
            <Link href="/" id="all" className="filter-button">
              <h4>All</h4>
            </Link>
          </div>
        </div>
        <div className="projects-body">
          {projects.map((project, index) => (
            <div
              className="project-item"
              key={index}
              style={{
                border: `1px solid ${
                  project.category === "Solo"
                    ? "#9a4c38"
                    : project.category === "Ensemble"
                    ? "#4a1e6a"
                    : ""
                }`,
              }}
            >
              <div className="project-image-title">
                <div className="project-image">
                  <Link href={project.href}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="project-title">
                  <h3>
                    <Link href={project.href}>
                      <h3>{project.title}</h3>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="project-author-category">
                <p className="author">{project.author}</p>
                <p className="category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
