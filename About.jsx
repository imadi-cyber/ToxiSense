import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import pic from "./photo.jpg"

import "./About.css"

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about">
      <h3 className="heading">Team Members</h3>
      <div className="wrapper">
        <div className="container">
          <img className="img" src={pic} alt="mine" />
          <h2>Shreyanshi Srivastava</h2>
          <h3>620243-B</h3>
          <h3>620243@student.nitandhra.ac.in</h3>
          <p>I designed the user interface of the application by using React JS and other frontend tools.</p>
        </div>
        <div className="container">
          <img className="img" src="https://media.licdn.com/dms/image/D5635AQFBkjoV2wOqgg/profile-framedphoto-shrink_400_400/0/1685160516173?e=1688385600&v=beta&t=3Eszcgf4H_dtmMD8cLHdAK1X876ClWJ-8jQXTxmlpmA" alt="his" />
          <h2>Aditya Mehta</h2>
          <h3>620103-A</h3>
          <h3>620103@student.nitandhra.ac.in</h3>
          <p>I wrote the code of Machine learning which uses natural language processing techniques to analyze the toxicity type in text.</p>
        </div>
    </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default About
