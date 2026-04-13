import { useEffect, useRef, memo } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  hlsUrl: string;
  fallbackUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}

const VideoPlayer = memo(({ hlsUrl, fallbackUrl, className = "", style }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsInstanceRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const destroyHls = () => {
      if (hlsInstanceRef.current) {
        hlsInstanceRef.current.destroy();
        hlsInstanceRef.current = null;
      }
    };

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        maxBufferLength: 300,
        maxMaxBufferLength: 600,
      });

      hls.loadSource(hlsUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          /* autoplay blocked – silently ignore */
        });
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal && fallbackUrl) {
          destroyHls();
          video.src = fallbackUrl;
          video.play().catch(() => {});
        }
      });

      hlsInstanceRef.current = hls;
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      /* Safari native HLS */
      video.src = hlsUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    } else if (fallbackUrl) {
      video.src = fallbackUrl;
    }

    return destroyHls;
  }, [hlsUrl, fallbackUrl]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
    />
  );
});

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
