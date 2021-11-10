import "./App.css";
import logo from "./assets/images/logo.png";
import { useEffect, useState } from "react";

const YOUTUBE_PLAYLIST =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8&key={process.env.API_KEY}"; //TODO rajouter la nouvelle clé

function App() {
  const [currentUrl, setCurrentUrl] = useState(
    "https://www.youtube.com/embed/_5qIOrTD8GQ?list=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8"
  );

  const [videoIds, setVideoIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlaylist = async () => {
      setLoading(true);
      try {
        const response = await fetch(YOUTUBE_PLAYLIST);
        const json = await response.json();

        if (!response.ok) {
          throw new Error(response.error);
        }
        const playlist = json.items;
        const playlistIds = playlist.map(
          (elm) => elm.snippet.resourceId.videoId
        );
        setVideoIds(playlistIds);
      } catch (error) {
        setError(error);
        console.warn(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  console.log("rfresh");

  if (error) {
    return <h1>{error}</h1>;
  }

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

      <h2>Les videos de la formation</h2>

      <hr />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="lol">
          {videoIds.map((videoId) => (
            <div
              onClick={() => {
                setCurrentUrl(
                  `https://www.youtube.com/embed/${videoId}?list=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8`
                );
              }}
              className="test"
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
