import "./App.css";
import logo from "./assets/images/logo.png";
import { useEffect, useState } from "react";

function App() {
  const [currentUrl, setCurrentUrl] = useState(
    "https://www.youtube.com/embed/_5qIOrTD8GQ?list=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8"
  );

  useEffect(() => {
    const response = fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8&key=AIzaSyCKvlQE5T_hGeW2GkrqQ-cDUS3aI7yf3NU"
    );
    const etape = response.then((response) => response.json());
    const myJson = etape.then((json) => json.items);

    myJson.then((data) =>
      console.log(data.map((elm) => elm.snippet.resourceId.videoId))
    );
  });

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
