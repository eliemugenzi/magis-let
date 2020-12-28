import React from "react"
import { Button, Layout as GridLayout } from "element-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/Title"
import Work from "../components/Work"

import styles from "../styles/home.module.scss"

const IndexPage = () => {
  // const sliders = [
  //   {
  //     img:
  //       "https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092__480.jpg",
  //   },
  //   {
  //     img:
  //       "https://cdn.pixabay.com/photo/2018/04/28/10/55/architecture-3357028__480.jpg",
  //   },
  //   {
  //     img:
  //       "https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041__480.jpg",
  //   },
  //   {
  //     img:
  //       "https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__480.jpg",
  //   },
  // ]
  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.heroSection}>
        <div className="mx-10 sm:mx-5 md:mx-5">
          <section className={styles.heroGrid}>
            <div className={styles.heroGridIntro}>
              <h3 className="font-bold">Welcome to Magis.</h3>
              <p className="my-5 mr-10 sm:mr-0 sm:my-2 md:mr-10">
                We aim at adding a modern and digital touch in homes, workplaces
                and daily lives of the local and regional community by valuing
                affordability and adaptability.
              </p>
              <div>
                <Button type="primary" className="button-primary my-5">
                  Explore our work
                </Button>
              </div>
            </div>
            <div className={styles.heroGridImage}>
              <img
                src="https://image.freepik.com/free-vector/geometric-background-memphis-style_52683-35346.jpg"
                alt=""
                className="my-10"
              />
            </div>
          </section>
        </div>
      </section>
      <section className="mx-10 my-20">
        <GridLayout.Row gutter="20">
          <GridLayout.Col span="12" offset="8">
            <Title text="Our Work" />
          </GridLayout.Col>
        </GridLayout.Row>
        <GridLayout.Row gutter="10" className="mx-10">
          <GridLayout.Col sm={12} lg={8} md={6} xs={8} span="10">
            <Work
              title="Magis MotherBoard M1"
              description="As the days went by, we noticed he didn’t get any better and due to the severity of the issue he was hospitalized last month. "
              cover="https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758__480.jpg"
              category="Electronics"
            />
          </GridLayout.Col>
          <GridLayout.Col sm={12} md={6} lg={8} xs={8} span="10">
            <Work
              title="Kasha new Office"
              description="As the days went by, we noticed he didn’t get any better and due to the severity of the issue he was hospitalized last month. "
              cover="https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808__480.jpg"
              category="Architecture"
            />
          </GridLayout.Col>
          <GridLayout.Col sm={12} md={6} lg={8} xs={8} span="10">
            <Work
              title="ACME web solutions"
              description="As the days went by, we noticed he didn’t get any better and due to the severity of the issue he was hospitalized last month."
              cover="https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427__480.jpg"
              category="Information Technology"
            />
          </GridLayout.Col>
          <GridLayout.Col sm={12} md={6} lg={8} xs={8} span="10">
            <Work
              title="Kasha new Office"
              description="As the days went by, we noticed he didn’t get any better and due to the severity of the issue he was hospitalized last month."
              cover="https://cdn.pixabay.com/photo/2016/02/19/11/36/canal-1209808__480.jpg"
              category="Architecture"
            />
          </GridLayout.Col>
        </GridLayout.Row>
      </section>
      <style jsx="true">
        {`
          .grid-content {
            height: 10px;
          }
        `}
      </style>
    </Layout>
  )
}

export default IndexPage
