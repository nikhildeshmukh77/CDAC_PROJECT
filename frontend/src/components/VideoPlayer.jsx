function VideoPlayer({ videoUrl }) {

  if (!videoUrl) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Select a lesson to start watching
      </div>
    );
  }


  const isYouTube =
    videoUrl.includes("youtube.com") ||
    videoUrl.includes("youtube/embed");


  const cleanUrl = isYouTube
    ? `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}rel=0&modestbranding=1`
    : videoUrl;



  return (

    <div style={{ width:"100%", height:"100%" }}>


      {
        isYouTube ? (

          <iframe
            src={cleanUrl}
            title="Course Player Viewport"
            style={{
              width:"100%",
              height:"100%",
              border:"none"
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        ) : (

          <video
            key={videoUrl}
            src={videoUrl}
            controls
            style={{
              width:"100%",
              height:"100%"
            }}
          />

        )
      }


    </div>

  );

}


export default VideoPlayer;