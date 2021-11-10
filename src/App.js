import "./App.css";
import logo from "./assets/images/logo.png";
import { useEffect, useState } from "react";
import { VideoCard } from "./components/VideoCard";

const YOUTUBE_PLAYLIST =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8&key={process.env.API_KEY}"; //TODO rajouter la nouvelle clé

function App() {
  const [currentUrl, setCurrentUrl] = useState(
    "https://www.youtube.com/embed/_5qIOrTD8GQ?list=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8"
  );

  const [videoDatas, setVideoDatas] = useState([]);
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
          (elm) => {
            const videoData = {
              title : elm.snippet.title,
              thumbnailUrl : elm.snippet.thumbnails.standard.url,
              thumbnailWidth :elm.snippet.thumbnails.standard.width, 
              thumbnailHeight :elm.snippet.thumbnails.standard.height, 
              idVideo : elm.snippet.resourceId.videoId
            };
            setVideoDatas(videoData);
          }
        );
        
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
          {videoDatas.map((videoData) => (
            <VideoCard videoData={videoData} setCurrentUrl={setCurrentUrl}/>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
