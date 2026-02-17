const enterScreen = document.getElementById('enter-screen');
const enterBtn = document.getElementById('enter-btn');
const mainWrapper = document.getElementById('main-wrapper');
const audio = document.getElementById('bg-audio');
const audioToggle = document.getElementById('audio-toggle');
const iconVolume = audioToggle.querySelector('.icon-volume');
const iconMute = audioToggle.querySelector('.icon-mute');
const video = document.getElementById('bg-video');

let audioPlaying = false;

function enterSite() {
	enterScreen.classList.add('hidden');
	mainWrapper.classList.add('visible');

	audio.volume = 0.35;
	audio.play().then(() => {
		audioPlaying = true;
		audioToggle.classList.add('playing');
		iconVolume.classList.remove('hidden');
		iconMute.classList.add('hidden');
	}).catch(() => {
		audioPlaying = false;
		audioToggle.classList.remove('playing');
		iconVolume.classList.add('hidden');
		iconMute.classList.remove('hidden');
	});

	if (video.paused) {
		video.play().catch(() => {});
	}
}

enterBtn.addEventListener('click', enterSite);

audioToggle.addEventListener('click', () => {
	if (audioPlaying) {
		audio.pause();
		audioPlaying = false;
		audioToggle.classList.remove('playing');
		iconVolume.classList.add('hidden');
		iconMute.classList.remove('hidden');
	} else {
		audio.play().then(() => {
			audioPlaying = true;
			audioToggle.classList.add('playing');
			iconVolume.classList.remove('hidden');
			iconMute.classList.add('hidden');
		}).catch(() => {});
	}
});