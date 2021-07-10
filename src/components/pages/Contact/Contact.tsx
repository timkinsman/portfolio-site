import React from "react"
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className="global-container global-fadein">
      <Navbar page="contact" />
      <div className={styles["contact-container"]}>
        <h4><a href="https://discordapp.com/users/355321462032171009/" target="_blank">Discord</a></h4>
        <h4><a href="mailto:tkinsm@gmail.com" target="_blank">Email</a></h4>
        <h4><a href="https://github.com/timkinsman" target="_blank">Github</a></h4>
        <h4><a href="https://www.instagram.com/tkinsm/" target="_blank">Instagram</a></h4>
        <h4><a href="https://au.linkedin.com/in/timothykinsman" target="_blank">Linkedin</a></h4>
        <h4><a href="tel:+61422903423" target="_blank">Phone</a></h4>
        <h4><a href="https://open.spotify.com/user/31rr7rfdy3rqb5wfsf3ypy6dloby?si=2d580c8571af4529" target="_blank">Spotify</a></h4>
      </div>
      <Footer page="contact" />
    </div>
  )
}

export default Contact
