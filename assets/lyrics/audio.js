const player = document.querySelector(".apple-music-player_player");

const songPlayer = player.querySelector("#song-player");
const playBtn = player.querySelector(".apple-music-player_player .play-btn");
const play = playBtn.querySelector(".play");
const pause = playBtn.querySelector(".pause");
const songCover = player.querySelector(".song-cover");

const songTrackingCtn = player.querySelector(".song-tracking-ctn");
const tracktor = songTrackingCtn.querySelector(".song-tracktor");
const dot = songTrackingCtn.querySelector(".dot");
const playedPart = songTrackingCtn.querySelector(".song-tracktor .played-part");
const songDurationEl = songTrackingCtn.querySelector(".song-drtn");
const curTimeEl = songTrackingCtn.querySelector(".cur-time");

let DURATION;
const TRACKTOR_LENGTH = parseFloat(tracktor.offsetWidth);

let prevTime = 0; // the previous playback time
let draggedWidth = 0;
let pos; // position on mousemove
let onDown = (isPlaying = isDragging = false);

songCover.onclick = function () {
  player.classList.toggle("shrinked");
};
player.onclick = function (e) {
  e.stopPropagation();
};
playBtn.onclick = playAndPause;

songPlayer.onloadedmetadata = updateDuration;
if (songPlayer.readyState >= 2) updateDuration();

function updateDuration() {
  // console.log(this);
  DURATION = songPlayer.duration;
  let songDuration = formatSeconds(DURATION);
  songDurationEl.innerHTML = songDuration;
}

songPlayer.onended = function () {
  playBtn.classList.remove("playing");
  enablePlayBtn();
  curTimeEl.innerHTML = "00: 00";
  styleTracktor(0);
};

songPlayer.ontimeupdate = function () {
  if (!isPlaying || isDragging) return;

  let curTime = Math.trunc(this.currentTime);
  if (prevTime != curTime) {
    prevTime = curTime;
    displayCurrentPlayTime(this.currentTime);
  }
  styleTracktor((this.currentTime * 100) / DURATION);
};

dot.onmousedown = function () {
  onDown = true;
  window.addEventListener("mousemove", handleMousemove);
};
songTrackingCtn.addEventListener("click", function (e) {
  changeCurrentPlaybackTime(e);
  songPlayer.currentTime = (draggedWidth / TRACKTOR_LENGTH) * DURATION;
});
window.addEventListener("mouseup", handleMousemUp);
window.addEventListener("keydown", function (e) {
  if (e.key == " ") {
    e.preventDefault();
    playAndPause.call(playBtn);
  }
});

function playAndPause() {
  isPlaying = this.classList.toggle("playing");
  if (isPlaying) {
    songPlayer.play();
    enablePauseBtn();
  } else {
    songPlayer.pause();
    enablePlayBtn();
  }
}

function handleMousemUp() {
  if (!onDown) return;
  onDown = isDragging = false;
  songPlayer.currentTime = (draggedWidth / TRACKTOR_LENGTH) * DURATION;
  window.removeEventListener("mousemove", handleMousemove);
}
function handleMousemove(e) {
  e.preventDefault();
  if (!onDown) return;
  isDragging = true;
  changeCurrentPlaybackTime(e);
}

function displayCurrentPlayTime(time) {
  curTimeEl.innerHTML = formatSeconds(time);
}

function changeCurrentPlaybackTime(e) {
  let coords = tracktor.getBoundingClientRect();
  pos = e.pageX - coords.left;
  if (pos < 0) draggedWidth = 0;
  else if (pos > TRACKTOR_LENGTH) draggedWidth = TRACKTOR_LENGTH;
  else draggedWidth = pos;

  displayCurrentPlayTime((draggedWidth * DURATION) / TRACKTOR_LENGTH);
  styleTracktor((draggedWidth * 100) / TRACKTOR_LENGTH);
}

function enablePauseBtn() {
  play.style.display = "none";
  pause.style.display = "";
}

function enablePlayBtn() {
  play.style.display = "";
  pause.style.display = "none";
}

function styleTracktor(progress) {
  dot.style.left = `calc(${progress}% - 6px)`;
  playedPart.style.width = progress + "%";
}

function formatSeconds(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainder = Math.trunc(seconds % 60);

  return padStart(minutes) + ": " + padStart(remainder);
}

function padStart(num) {
  return num >= 10 ? num : `0${num}`;
}
