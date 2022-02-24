import React from "react";
import Image from "next/image";

const Project = ({
  title,
  main_image,
  description,
  link,
  stacks,
  github,
  url,
  dribbble,
}: any) => {
  return (
    <article className="project" onClick={() => window.open(link)} >
      {main_image && (
        <img className="project-img" src={main_image} alt="" />
        // <Image
        //   src={main_image}
        //   width={600}
        //   height={350}
        //   className="project-img"
        // />
      )}
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stacks.map((stack: any) => {
            return <span key={stack.id}>{stack.stack_description}</span>;
          })}
        </div>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              {/* <FontAwesomeIcon
                  className="project-icon"
                  icon={["fab", "github-square"]}
                /> */}
            </a>
          )}
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              {/* <FontAwesomeIcon
                  icon={faShareSquare}
                  className="project-icon"
                /> */}
            </a>
          )}
          {dribbble && (
            <a href={dribbble} target="_blank" rel="noreferrer">
              {/* <FontAwesomeIcon
                  icon={["fab", "dribbble-square"]}
                  className="project-icon"
                /> */}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
