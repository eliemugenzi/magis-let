import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="not-found">
      <h1 className="font-black my-8">404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>

    <style jsx="true">
      {`
        .not-found {
          display: grid;
          place-content: center;
          height: 70vh;
        }
      `}
    </style>
  </Layout>
)

export default NotFoundPage
