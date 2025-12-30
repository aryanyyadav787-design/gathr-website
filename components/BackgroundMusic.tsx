import { useEffect, useRef, useState } from 'react';

interface BackgroundMusicProps {
    youtubeVideoId: string;
}

// Extend Window interface for YouTube API
declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
        ytPlayer: any;
    }
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ youtubeVideoId }) => {
    const playerRef = useRef<any>(null);
    const [apiReady, setApiReady] = useState(false);

    useEffect(() => {
        // Check if API is already loaded
        if (window.YT && window.YT.Player) {
            setApiReady(true);
            return;
        }

        // Load YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // Set up callback for when API is ready
        window.onYouTubeIframeAPIReady = () => {
            setApiReady(true);
        };
    }, []);

    useEffect(() => {
        if (!apiReady) return;

        // Create player with optimized settings for instant playback
        const player = new window.YT.Player('yt-player', {
            height: '1',
            width: '1',
            videoId: youtubeVideoId,
            playerVars: {
                autoplay: 1,              // Auto-play as soon as ready
                controls: 0,              // No controls
                loop: 1,                  // Loop the video
                playlist: youtubeVideoId, // Required for loop to work
                playsinline: 1,           // Play inline on mobile
                mute: 0,                  // Start unmuted
                enablejsapi: 1,           // Enable JS API
                origin: window.location.origin,
                widgetid: 1,
                // Performance optimizations for faster loading
                modestbranding: 1,        // Minimal YouTube branding
                rel: 0,                   // Don't show related videos
                iv_load_policy: 3,        // Hide annotations
                disablekb: 1,             // Disable keyboard controls
                fs: 0,                    // No fullscreen button
                // Quality settings for faster load
                vq: 'small',              // Lower quality for faster buffering
            },
            events: {
                onReady: (event: any) => {
                    // Set volume immediately
                    event.target.setVolume(50); // 50% volume
                    event.target.unMute();

                    // Force play immediately
                    event.target.playVideo();

                    console.log('YouTube player ready and playing');
                },
                onStateChange: (event: any) => {
                    console.log('Player state:', event.data);

                    // Force play if paused or buffering takes too long
                    if (event.data === window.YT.PlayerState.PAUSED ||
                        event.data === window.YT.PlayerState.CUED) {
                        event.target.playVideo();
                    }

                    // If video ends, replay (backup to loop parameter)
                    if (event.data === window.YT.PlayerState.ENDED) {
                        event.target.playVideo();
                    }
                },
                onError: (event: any) => {
                    console.error('YouTube player error:', event.data);
                }
            },
        });

        playerRef.current = player;
        window.ytPlayer = player; // For debugging

        return () => {
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
            }
        };
    }, [apiReady, youtubeVideoId]);

    return (
        <div
            id="yt-player"
            style={{
                position: 'fixed',
                bottom: '-100px',
                left: '-100px',
                width: '1px',
                height: '1px',
                opacity: 0,
                pointerEvents: 'none'
            }}
        />
    );
};
