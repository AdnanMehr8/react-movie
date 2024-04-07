import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';

const VideoList = props => {    
    const { category } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            if (res.results.length > 0) {
                setVideo(res.results[0]);
            }
        }
        getVideos();
    }, [category, props.id]);
    
    return (
        <>
            {video && <Video item={video} category={category}/>}
        </>
    );
}

const Video = props => {
    const item = props.item;
    const { category } = props;
    const { id, season, episode } = useParams();
    const iframeRef = useRef(null);

    useEffect(() => {
        const resizeIframe = () => {
            const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
            iframeRef.current.setAttribute('height', height);
        };
        resizeIframe();
        window.addEventListener('resize', resizeIframe);
        return () => {
            window.removeEventListener('resize', resizeIframe);
        };
    }, []);

    let videoUrl;
    if (category === "movie") {
        videoUrl = `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`;
    } else if (category === "tv") {
        // If episode is available, construct the URL with season and episode, otherwise just use season
        if (episode) {
            videoUrl = `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1&s=${season}&e=${episode}`;
        } else {
            videoUrl = `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1&s=${season}`;
        }
    }

    
    return (
        <div className="video">
            <div className="video__title">
                {/* <h2>{item.name}</h2> */}
            </div>
            <iframe 
                src={videoUrl}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList;
