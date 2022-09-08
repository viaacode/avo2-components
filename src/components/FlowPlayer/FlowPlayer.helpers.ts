export function setPlayingVideoSeekTime(seekTime: number): void {
	const playingVideo: HTMLVideoElement | null = document.querySelector(
		'.c-video-player .is-playing video'
	) as HTMLVideoElement | null;
	if (playingVideo) {
		playingVideo.currentTime = seekTime;
	}
}

export function getPlayingVideoSeekTime(): number | null {
	const playingVideo: HTMLVideoElement | null = document.querySelector(
		'.c-video-player .is-playing video'
	) as HTMLVideoElement | null;
	if (playingVideo) {
		return playingVideo.currentTime;
	} else {
		return null;
	}
}
