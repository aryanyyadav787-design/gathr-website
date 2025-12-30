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

        // Create player
        const player = new window.YT.Player('yt-player', {
            height: '1',
            width: '1',
            videoId: youtubeVideoId,
            playerVars: {
                autoplay: 1,
                controls: 0,
                loop: 1,
                playlist: youtubeVideoId,
                playsinline: 1,
            },
            events: {
                onReady: (event: any) => {
                    // Unmute and set volume
                    event.target.unMute();
                    event.target.setVolume(50); // 50% volume

                    // Try to play
                    event.target.playVideo();

                    console.log('YouTube player ready and playing');
                },
                onStateChange: (event: any) => {
                    console.log('Player state:', event.data);

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
