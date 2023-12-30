"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Asset Curve Management System",
    description: "Asset Curve is a complete solution that gives you the ability to track assets whilst focusing on security in a cost effective and scalable way.",
    image: "/images/projects/1.png",
    tag: ["All","Python Web", "AI & Data Engineering"],
    gitUrl: "https://www.app.assetcurve.io/",
    previewUrl: "https://www.app.assetcurve.io/",
  },
  {
    id: 2,
    title: "QuikQuiz",
    description: "QuickQuiz is a complete solution for students and teachers to manage their quizzes, assignments alongwith real time monitoring of students.",
    image: "/images/projects/2.png",
    tag: ["All", "Python Web"],
    gitUrl: "https://github.com/syedhaideralizaidi/QUIZ-APP",
    previewUrl: "https://github.com/syedhaideralizaidi/QUIZ-APP",
  },
  {
    id: 3,
    title: "Social Media RSS Feed App",
    description: "Social Media App where users can connect with each other and get updates with the help of RSS feeds.",
    image: "/images/projects/3.png",
    tag: ["All", "Python Web"],
    gitUrl: "https://github.com/syedhaideralizaidi/Social-Media-App-Django",
    previewUrl: "https://github.com/syedhaideralizaidi/Social-Media-App-Django",
  },
  {
    id: 4,
    title: "Skill Swap",
    description: "SkillSwap is an online learning management system (LMS) that offers courses and training programs in a variety of subjects. It is designed to provide users with a personalized and engaging learning experience.",
    image: "/images/projects/4.png",
    tag: ["All", "AI & Data Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Hades",
    description: "Scraping products and detecting fake and fredaulent sygneta images used for promotion on different websites",
    image: "/images/projects/5.png",
    tag: ["All", "Python Web", "AI & Data Engineering"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Speech to Smart Contracts",
    description: "Real Time conversion of conversation between users into digital smart contracts",
    image: "/images/projects/6.png",
    tag: ["All", "AI & Data Engineering"],
    gitUrl: "https://github.com/syedhaideralizaidi/SContract",
    previewUrl: "https://github.com/syedhaideralizaidi/SContract",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python Web"
          isSelected={tag === "Python Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI & Data Engineering"
          isSelected={tag === "AI & Data Engineering"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;