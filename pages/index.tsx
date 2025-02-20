import { Fragment } from "react";
import type { NextPage } from "next";
import IntroJumbotron from "components/IntroJumbotron";
import ProjectCard from "components/ProjectCard";
import Link from "next/link";
import projects from "data/projects.json";

const Home: NextPage = () => {
  return (
    <Fragment>
      <main className="h-full">
        <IntroJumbotron />

        <section className="star_projects">
          <h2>Personal Project(s)</h2>

          <ul className="card-wrapper">
            {projects
              .filter(({ star }) => star)
              .map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
          </ul>

          <div className="link">
            <Link href="/projects">
              <a>view all projects</a>
            </Link>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
