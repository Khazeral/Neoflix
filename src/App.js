import "./App.css";
import logo from "./assets/images/logo.png";
import { useState } from "react";

function App() {
  const [currentUrl, setCurrentUrl] = useState(
    "https://www.youtube.com/embed/_5qIOrTD8GQ?list=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8"
  );

  return (
    <>
      <img src={logo} alt="logo Neoflix" />

      <div className="brick-wall">
        <iframe
          width="300"
          src={currentUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2>LEs videos de la formation</h2>

      <hr />

      <div
        onClick={() =>
          setCurrentUrl("https://www.youtube.com/embed/q_i5jC0r48w")
        }
        className="test"
      ></div>
      <div
        onClick={() =>
          setCurrentUrl(
            "https://www.youtube.com/watch?v=NE92OWzwWVo&list=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8&index=3"
          )
        }
        className="test"
      ></div>
      <div
        onClick={() =>
          setCurrentUrl(
            "https://www.youtube.com/watch?v=q_i5jC0r48w&list=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8&index=4"
          )
        }
        className="test"
      ></div>
    </>
  );
}

export default App;
