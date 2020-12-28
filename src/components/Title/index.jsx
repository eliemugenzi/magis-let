import React from "react"
import { useMedia } from "react-use"

import styles from "./title.module.scss"

const Title = ({ text }) => {
  const isMobile = useMedia("(max-width:768px)")
  return (
    <>
      <section
        className={`my-10  ${isMobile ? "w-40" : "w-50 mx-10"} content-center`}
      >
        <h2 className="my-5">{text}</h2>
        <div className={styles.line} />
      </section>
    </>
  )
}

export default Title
