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
          url="https://easypop.app/"
        />
        <Project
          title="Password generator"
          description="A simple password generator.You can include/exclude letters, numbers and special characters, and modify the length from 2 to 50 characters."
          main_image="/pass_gen.png"
          link="https://gleeful-begonia-768088.netlify.app/"
          stacks={[
            { id: "1", stack_description: "HTML" },
            { id: "2", stack_description: "CSS" },
            { id: "3", stack_description: "JavaScript" }
          ]}
          url="https://gleeful-begonia-768088.netlify.app/"
        />
        <Project
          title="Learning on the Job: My Youtube Experiment"
          description="Something I've started just as a challenge for myself, which I ended up enjoying quite a bit. Editing is a bitch though."
          main_image="/yt.png"
          stacks={[
            { id: "1", stack_description: "React" },
            { id: "2", stack_description: "NextJS" },
            { id: "5", stack_description: "MongoDB" },
          ]}
          youtube="https://www.youtube.com/channel/UCeXeDbQp6NA5b4yAAPGa49w"
        />
        <Project
          title="Learning on the Job: The blog"
          description="An extra to the youtube channel. Currently inactive."
          main_image="/blog.webp"
          stacks={[{ id: "1", stack_description: "All kinds of things" }]}
          url="https://mystifying-tesla-6bdf27.netlify.app/"
        />
        <Project
          title="Older custom WP themes"
          description="That's how I used to make money back in the day. Still actually like these a lot."
          main_image="/wp_1.webp"
          link="https://dribbble.com/DrJULIK"
          dribbble={[
            "https://dribbble.com/shots/11681302-ArchDuke",
            "https://dribbble.com/shots/11704809-minimal",
            "https://dribbble.com/shots/11639958-Madera",
          ]}
          stacks={[
            { id: "1", stack_description: "HTML" },
            { id: "2", stack_description: "CSS" },
            { id: "3", stack_description: "Wordpress" },
            { id: "4", stack_description: "PHP" },
          ]}
        />
        <Project
          title="My old resume"
          description="SEE THIS FOR MORE OLDER PROJECTS. I put a bit more effort into that one over two years ago. Has a lot of stuff there, including stuff that got me my first junior position."
          main_image="/old_resume.webp"
          stacks={[
            { id: "1", stack_description: "React" },
            { id: "2", stack_description: "Gatsby" },
          ]}
          url="https://newresume.netlify.app/"
        />
        <Project
          title="PDF Menu Render"
          description="A pretty cool idea I wish I had more time to work on. The idea is to create a dashboard for client to CRUD menu items that are automatically generated into a beautiful restaurant menu. I will most definitely rework this in the future to its fullest capabilities."
          main_image="/pdf.webp"
          stacks={[{ id: "1", stack_description: "React" }]}
          url="https://reactpdfmenurender.netlify.app/"
          github="https://github.com/DrJulik/ReactMenuPdfRender"
        />
      </div>
    </section>
  );
};

export default Projects;
