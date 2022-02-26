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
          I'll be more than happy to code you one live. Older stuff at the
          bottom. No recent projects, since I like to actually enjoy life
          outside of work hours. Would love to work on some of these though
          (React pdf renderer).
        </p>
      </div>

      <div className="projectGrid">
        <Project
          title="Easypop: The last popup app you’ll ever need "
          description="Labor of the last 2 years of work. We have taken everything that a Shopify user may need and bundled it into one app."
          main_image="/easypop.png"
          link="https://easypop.app/"
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
          description="Something I've started just as a challenge for myself, which I ended up enjoying quite a bit. Editing is a bitch though."
          main_image="/yt.png"
          link="https://www.youtube.com/channel/UCeXeDbQp6NA5b4yAAPGa49w"
          stacks={[
            { id: "1", stack_description: "React" },
            { id: "2", stack_description: "NextJS" },
            { id: "5", stack_description: "MongoDB" },
          ]}
        />
        <Project
          title="Learning on the Job: The blog"
          description="An extra to the youtube channel. Currently inactive."
          main_image="/blog.webp"
          stacks={[{ id: "1", stack_description: "All kinds of things" }]}
        />
        <Project
          title="Older custom WP themes"
          description="That's how I used to make money back in the day. Still actually like these a lot."
          main_image="/wp_1.webp"
          link="https://dribbble.com/DrJULIK"
          stacks={[
            { id: "1", stack_description: "HTML" },
            { id: "2", stack_description: "CSS" },
            { id: "3", stack_description: "Wordpress" },
            { id: "4", stack_description: "PHP" },
          ]}
        />
        <Project
          title="Random custom sites that I still maintain"
          description="Sometimes I just can't refuse."
          main_image="/yt.png"
          stacks={[
            { id: "1", stack_description: "React" },
            { id: "2", stack_description: "NextJS" },
          ]}
        />
        <Project
          title="Random custom sites that I still maintain"
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
