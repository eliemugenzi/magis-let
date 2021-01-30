import React from "react"
import { useQueryParam, StringParam } from "use-query-params"
import { capitalize } from "lodash"

import Title from "../../components/Title"
import Work from "../../components/Work"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Projects = () => {
  const [category] = useQueryParam("category", StringParam)

  const projects = [
    {
      id: 1,
      title: "Magis Motherboard M1",
      description:
        "As the days went by, we noticed he didn’t get any better and due to the severity of the issue he was hospitalized last month. ",
      cover:
        "https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758__480.jpg",
      category: "electronics",
    },
    {
      id: 2,
      title: "Kasha New Office",
      description:
        "As the days went by, we noticed he didn’t get any better and due to the severity of the issue he was hospitalized last month. ",
      cover:
        "https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808__480.jpg",
      category: "architecture",
    },
    {
      id: 3,
      title: "ACME Web Solutions",
      description:
        "As the days went by, we noticed he didn’t get any better and due to the severity of the issue he was hospitalized last month.",
      category: "information-technology",
      cover:
        "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427__480.jpg",
    },
    {
      id: 4,
      title: "Kasha New Office",
      description:
        "As the days went by, we noticed he didn’t get any better and due to the severity of the issue he was hospitalized last month. ",
      cover:
        "https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808__480.jpg",
      category: "architecture",
    },
  ]

  const initialProjects = category
    ? projects.filter(p => p.category === category)
    : projects

  const [ourProjects, setProjects] = React.useState(initialProjects)

  React.useEffect(() => {
    const currentProjects = category
      ? projects.filter(p => p.category === category)
      : projects
    setProjects(currentProjects)
  }, [category, projects])

  console.log("CATEGORY", category)
  return (
    <Layout>
      <SEO title="Our Projects" />
      <section className="mx-20">
        <div className="mx-80 my-10">
          <Title
            text={`Our ${category ? capitalize(category) : ""} Projects`}
          />
        </div>
        <section>
          {ourProjects.map(p => (
            <Work
              title={p.title}
              description={p.description}
              cover={p.cover}
              category={capitalize(p.category)}
            />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default Projects
