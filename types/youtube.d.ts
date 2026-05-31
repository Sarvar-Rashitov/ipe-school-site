interface YTPlayerVars {
  autoplay?: number;
  mute?: number;
  loop?: number;
  playlist?: string;
  rel?: number;
  playsinline?: number;
}

interface YTPlayerEvent {
  target: YTPlayer;
}

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  destroy(): void;
}

interface YTPlayerOptions {
  videoId: string;
  playerVars?: YTPlayerVars;
  events?: {
    onReady?: (event: YTPlayerEvent) => void;
    onStateChange?: (event: YTPlayerEvent) => void;
  };
}

interface YT {
  Player: new (element: HTMLElement | string, options: YTPlayerOptions) => YTPlayer;
}

interface Window {
  YT?: YT;
  onYouTubeIframeAPIReady?: () => void;
}
