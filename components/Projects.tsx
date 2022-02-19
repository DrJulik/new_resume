import styles from "../styles/Projects.module.css";
import Project from "./projects/Project";

const Projects = () => {
  return (
    <section className="projects">
      <div>
        <h2 style={{ margin: 0, background: "#efb79621", padding: "1rem" }}>
          My work: Projects and Videos
        </h2>
        <p>
          If you're looking for a junior level to-do apps, just reach out to me.
          I'll code you one in an hour.
        </p>
      </div>

      <div className="projectGrid">
        <Project
          title="Easypop: The last popup app you’ll ever need "
          description="Labor of the last 2 years of work. We have taken everything that a Shopify user may need and bundled it into one app."
          main_image="/easypop.png"
          stacks={[
            { id: "1", stack_description: "React" },
            { id: "2", stack_description: "NextJS" },
            { id: "3", stack_description: "NodeJS" },
            { id: "4", stack_description: "Koa" },
            { id: "5", stack_description: "MongoDB" },
          ]}
        />
        <Project
          title="Learning on the Job: My Youtube Experiment"
          description="Labor of the last 2 years of work. We have taken everything that a Shopify user may need and bundled it into one app."
          main_image="/yt.png"
          stacks={[
            { id: "1", stack_description: "React" },
            { id: "2", stack_description: "NextJS" },
            { id: "3", stack_description: "NodeJS" },
            { id: "4", stack_description: "Koa" },
            { id: "5", stack_description: "MongoDB" },
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
