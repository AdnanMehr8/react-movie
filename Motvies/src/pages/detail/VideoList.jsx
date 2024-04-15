import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import './video.scss';

const VideoList = () => {
  const { type, id, season, episode } = useParams();
  

  useEffect(() => {
    const iframeElement = document.querySelector("iframe");

    if (iframeElement) {
      // Check if the document is currently in fullscreen mode
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        // Exit fullscreen mode if active
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  }, []); // Empty dependency array to run this effect only once

  return (
    <div>
      {type === "movie" ? (
        // Render movie video
        <iframe
          allowFullScreen
          // src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`}
          src={`https://v2.vidsrc.me/embed/`}
          width="100%"
          height="100%"
          style={{
            height: "100vh",
            width: "100%",
          }}
        />
      ) : (
        // Render TV show episode list
        <div>
  {/* Render episode list and individual episode */}

  <ul>
    {/* Render list of episodes */}
    {[].map((episodeNumber) => (
      <li key={episodeNumber}>
        {/* Render individual episode */}
        <a
          href={`/tv/${id}/${season}/${episodeNumber}`}
        >{`Episode ${episodeNumber}`}</a>
      </li>
    ))}
  </ul>
  {/* Render selected episode */}
  <iframe
    allowFullScreen
    // src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1&s=${season}&e=${episode}`}
    src={`https://v2.vidsrc.me/embed/${id}`}
    width="100%"
    height="100%"
    style={{
      height: "100vh",
      width: "100%",
    }}
  />
</div>
      )}
    </div>
  );
};

export default VideoList;
