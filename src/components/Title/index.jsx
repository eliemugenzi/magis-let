import React from "react"

import styles from "./title.module.scss"

const Title = ({ text }) => {
  return (
    <>
      <section className="my-10 mx-10 w-60 content-center">
        <h2 className="my-5">{text}</h2>
        <div className={styles.line} />
      </section>
    </>
  )
}

export default Title
