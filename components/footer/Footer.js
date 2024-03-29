import Image from 'next/image'
import React from 'react'
import styles from "../../styles/Home.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer} style={{ flex: "1 1 auto" }}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
  )
}

export default Footer