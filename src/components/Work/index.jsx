import React from "react"
import { Tag } from "element-react"
import { useMedia } from "react-use"

import "./index.scss"

const Work = ({ cover, title, description, category }) => {
  const isMobile = useMedia("(max-width:768px)")
  return (
    <>
      <section className="workItem">
        <div className={isMobile ? "p-0" : "p-20"}>
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
        <div>
          <img src={cover} alt={title} className="workItem__image" />
        </div>
      </section>
    </>
  )
}

export default Work
