import React from "react"
import Chatbot from "../../chatbot/Chatbot"
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className="global-container global-fadein">
      <Navbar page="home" />
      <div className={styles["home-hero"]}>
        <Chatbot />
      </div>
      <Footer />
    </div>
  )
}

export default Home
