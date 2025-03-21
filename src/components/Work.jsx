/**
 * @copyright 2024 PraveenSharrma
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: (
      <>
        Stitch & Sole Co.<br />
        full-stack e-commerce web app
      </>
    ),
    tags: [],
    projectLink: 'https://github.com/praveenshrrma'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title:  (
      <>
        SahandEstate<br />
        full-stack real estate platform
      </>
    ),
    tags: [],
    projectLink: 'https://github.com/praveenshrrma'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: (
      <>
        OrbitJobs Inc.<br />
        full-stack Job Board Platform
      </>
    ),
    tags: [],
    projectLink: 'https://github.com/praveenshrrma'
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: (
      <>
        IMAGINIFY-AI<br />
        fullstack AI image SaaS platform
      </>
    ),
    tags: [],
    projectLink: 'https://github.com/praveenshrrma'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: ( <>
    LAMA-AI<br />
    full-stack ChatGPT-like chatbot application
  </>)
,
    tags: [],
    projectLink: 'https://github.com/praveenshrrma'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: (
      <>
        Zentree<br />
        award-winning animated website
      </>
    ),
    tags: [],
    projectLink: 'https://github.com/praveenshrrma'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work