import "./header.css"
import {
    faFaceSadCry,
    faFaceSadTear,
    faFaceAngry,
    faFaceMehBlank,
    faFaceTired
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <>
    <div className="header">
        <div className="headerContainer">
        <h1>ToxiSense</h1>
            <p>Use sentiment analysis to quickly detect the level of toxicity in text data.</p>
            <div className="headerIcons">
            <span className="icon"><FontAwesomeIcon  icon={faFaceSadCry} size="3x"/></span>
            <span className="icon"><FontAwesomeIcon icon={faFaceSadTear}size="3x" /></span>
            <span className="icon"><FontAwesomeIcon icon={faFaceAngry} size="3x"/></span>
            <span className="icon"><FontAwesomeIcon icon={faFaceMehBlank}size="3x" /></span>
            <span className="icon"><FontAwesomeIcon icon={faFaceTired}size="3x" /></span>
            </div>
        </div>
    </div>
    <div className="solution-block">
      <div className="container">
        <div className="content">
          <h2>What is Toxicity Analysis?</h2>
          <div className="text-wrapper">
            <p className="content-text">
            Toxicity analysis refers to the process of evaluating the level of toxicity or harmfulness in a given piece of text.
            <br/>
            <br/>
            It involves using machine learning or natural language processing techniques to assess the content and identify any potentially offensive, abusive, hateful, or harmful language within the text.
            <br/>
            <br/>
            The purpose of toxicity analysis is to flag or categorize text based on its potential to cause harm, enable moderation, and promote safer online environments.
            <br/>
            <br/>
            </p>
            <p className="content-text">
            It can be applied in various contexts such as social media platforms, comment sections, chat applications, content moderation systems, and more.
            <br/>
            <br/>
            It involves analyzing the language and context to identify potentially offensive, abusive, or harmful content.
<br/>
            <br/>
It plays a crucial role in detecting and addressing harmful content, promoting healthy communication, and fostering a more inclusive and respectful online community.
<br/>
            <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="analysis-benifit">
      <div className="container">
        <div className="ab-h">
          <h2>How can your business benefit from a <span className="orange-span">Toxicity Analyzer</span> tool?</h2>
        </div>
        <div className="ab-left">
          <div className="ab-row">
            <div className="ab-col">
              <div className="ab-header">
                <h4>Improve <span className="orange-span">Content</span>Moderation</h4>
              </div>
              <div className="ab-desc">
                <p>Toxicity analyzer tools can help businesses in effectively moderating user-generated content on their platforms. By automatically identifying and flagging toxic or harmful content, businesses can maintain a safer and more respectful environment for their users. This improves user experience, reduces the risk of legal issues, and protects the brand's reputation.</p>
              </div>
            </div>
            <div className="ab-col">
              <div className="ab-img">
                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Improve Content Moderation" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="ab-right">
          <div className="ab-row">
            <div className="ab-col">
              <div className="ab-img">
                <img src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Monitor brand Reputation" className="img-fluid" />
              </div>
            </div>
            <div className="ab-col">
              <div className="ab-header">
                <h4><span className="orange-span">Monitor</span>Brand Reputation</h4>
              </div>
              <div className="ab-desc">
                <p>Toxicity analyzer tools can assist businesses in monitoring and managing their online brand reputation. By quickly identifying and addressing instances of toxic content related to their brand or products, businesses can take appropriate actions to mitigate any potential damage to their reputation and maintain a positive brand image.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
