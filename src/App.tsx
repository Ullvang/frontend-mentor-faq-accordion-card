import { useState } from "react";
import "./App.css";
import WomanOnlineMobile from "./images/illustration-woman-online-mobile.svg";
import WomanOnlineDesktop from "./images/illustration-woman-online-desktop.svg";
import Pattern from "./images/bg-pattern-mobile.svg";
import PatternDesktop from "./images/bg-pattern-desktop.svg";
import Box from "./images/illustration-box-desktop.svg";
import Arrow from "./images/icon-arrow-down.svg";

function App() {
  const [show, setShow] = useState(2);

  const handleShow = (number: number) => {
    if (show === number) {
      setShow(0);
    } else {
      setShow(number);
    }
  };

  return (
    <>
      <main>
        <div id="ic">
          <picture>
            <source srcSet={WomanOnlineDesktop} media="(min-width: 1200px)" />
            <img id="wom" src={WomanOnlineMobile} alt="Woman online" />
          </picture>
          <picture>
            <source srcSet={PatternDesktop} media="(min-width: 1200px)" />
            <img
              src={Pattern}
              alt=""
              // srcSet={PatternDesktop + " 1200w"}
              id="p"
            />
          </picture>
        </div>
        <div id="qc">
          <h1>FAQ</h1>
          <div className="q">
            <div onClick={() => handleShow(1)} className="question">
              <h2 className={show === 1 ? "dark" : ""}>
                How many team members can I invite?
              </h2>
              <img src={Arrow} alt="arrow" className={show === 1 ? "ud" : ""} />
            </div>
            {show === 1 && (
              <p>
                You can invite up to 2 additional users on the Free plan. There
                is no limit on team members for the Premium plan.
              </p>
            )}
          </div>
          <div className="q">
            <div onClick={() => handleShow(2)} className="question">
              <h2 className={show === 2 ? "dark" : ""}>
                What is the maximum file upload size?
              </h2>
              <img src={Arrow} alt="arrow" className={show === 2 ? "ud" : ""} />
            </div>
            {show === 2 && (
              <p>
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </p>
            )}
          </div>
          <div className="q">
            <div onClick={() => handleShow(3)} className="question">
              <h2 className={show === 3 ? "dark" : ""}>
                How do I reset my password?
              </h2>
              <img src={Arrow} alt="arrow" className={show === 3 ? "ud" : ""} />
            </div>
            {show === 3 && (
              <p>
                Click “Forgot password” from the login page or “Change password”
                from your profile page. A reset link will be emailed to you.
              </p>
            )}
          </div>
          <div className="q">
            <div onClick={() => handleShow(4)} className="question">
              <h2 className={show === 4 ? "dark" : ""}>
                Can I cancel my subscription?
              </h2>
              <img src={Arrow} alt="arrow" className={show === 4 ? "ud" : ""} />
            </div>
            {show === 4 && (
              <p>
                Yes! Send us a message and we’ll process your request no
                questions asked.
              </p>
            )}
          </div>
          <div className="q">
            <div onClick={() => handleShow(5)} className="question">
              <h2 className={show === 5 ? "dark" : ""}>
                Do you provide additional support?
              </h2>
              <img src={Arrow} alt="arrow" className={show === 5 ? "ud" : ""} />
            </div>
            {show === 5 && (
              <p>
                Chat and email support is available 24/7. Phone lines are open
                during normal business hours.
              </p>
            )}
          </div>
        </div>
      </main>
      <img id="box" src={Box} alt="Box" />
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="/">Your Name Here</a>.
      </footer>
    </>
  );
}

export default App;
