import React from "react"
import Chatbot from "../../chatbot/Chatbot"
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"

const Home = () => {
  return (
    <div className="global-container global-fadein">
      <Navbar />
      <div>
        <Chatbot />
      </div>
      <Footer />
    </div>
  )
}

export default Home
