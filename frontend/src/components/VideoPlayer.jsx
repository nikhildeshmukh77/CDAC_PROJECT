function VideoPlayer({ videoUrl }) {
  const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtube/embed");

  // Automatically cleans up the link to block advertisements and recommendations
  const cleanUrl = isYouTube 
    ? `${videoUrl}${videoUrl.includes("?") ? "&" : "?"}rel=0&modestbranding=1` 
    : videoUrl;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {isYouTube ? (
        <iframe
          src={cleanUrl}
          title="Course Player Viewport"
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video
          src={videoUrl}
          controls
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}

export default VideoPlayer;