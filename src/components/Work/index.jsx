import React from "react"
import { Card, Tag } from "element-react"

const Work = ({ cover, title, description, category }) => {
  return (
    <>
      <section>
        <Card className="mx-1 my-5">
          <img src={cover} alt={title} />
          <div className="p-1">
            <h2 className="mr-10 my-5">{title}</h2>
            <Tag type="primary">{category}</Tag>
            <p
              className="my-5"
              style={{
                fontSize: 14,
              }}
            >
              {description}
            </p>
          </div>
        </Card>
      </section>
    </>
  )
}

export default Work
