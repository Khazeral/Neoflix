
export const VideoCard = ({videoData, setCurrentUrl}) =>{

    return (
      <div onClick={() => setCurrentUrl(`https://www.youtube.com/embed/${videoData.idVideo}?list=PLYd1lOBobngDybD4FFaAEWTwkQ5YXEaS8`)} className="videoCard">
        <img class="videoThumbnails"
            src={videoData.thumbnailUrl}
            alt="Thumbnail of video ">
        </img>
      </div>
    );
  };