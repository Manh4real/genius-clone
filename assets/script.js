import { format as formatNum } from "./js/formatNumber.js";
import { render as renderLatestList } from "./js/latest.js";

const chartSongs = document.querySelector(".chart .main .list");

export const SONGS = [
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "Way Too Sexy",
    artistName: "Drake",
    basicInfo: {
      hotNum: 132,
      views: 665900,
    },
  },
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "Girls Want Girls",
    artistName: "Drake ft. Lil Baby",
    basicInfo: {
      hotNum: 132,
      views: 6600,
    },
  },
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "Fair Trade",
    artistName: "Drake ft. Travis Scott",
    basicInfo: {
      hotNum: 132,
      views: 6659000,
    },
  },
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "Champagne Poetry",
    artistName: "Drake",
    basicInfo: {
      hotNum: 132,
      views: 900,
    },
  },
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "Knife Talk",
    artistName: "Drake ft 21 Savage & Project Pat",
    basicInfo: {
      hotNum: 132,
      views: 665900,
    },
  },
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "Stay",
    artistName: "The Kid LAROI & Justin Bieber",
    basicInfo: {
      hotNum: 132,
      views: 665900,
    },
  },
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "In The Bible",
    artistName: "Drake ft. Lil Durk & Giveon",
    basicInfo: {
      hotNum: 132,
      views: 665900,
    },
  },
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "Papi's Home",
    artistName: "Drake",
    basicInfo: {
      hotNum: 132,
      views: 665900,
    },
  },
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "TSU",
    artistName: "Drake",
    basicInfo: {
      hotNum: 132,
      views: 665900,
    },
  },
  {
    id: "S001",
    image_url: "./img/image1.png",
    songName: "Love All",
    artistName: "Drake ft. JAY-Z",
    basicInfo: {
      hotNum: 132,
      views: 665900,
    },
  },
];

window.addEventListener("load", function () {
  renderChart(SONGS);
  renderLatestList();
  addLinks();
});

export function addSongToChart(song) {
  let li = document.createElement("li");
  li.innerHTML = `
        <span class="order">${SONGS.indexOf(song) + 1}</span>
        <a href="#">
            <div>
                <div
                class="image"
                style="background-image: url(${song.image_url})">
                </div>
                <h2 class="song">${song.songName}</h2>
            </div>
            <div class="artist-container">
                <h2 class="artist">${song.artistName}</h2>
            </div>
            <div class="hot">
                <span class="icon">
                  <svg viewBox="0 0 17 26">
                      <path
                      fill="#FF1464"
                      d="M4 3c2.95 1 6.84 8.93 6.84 8.93a8.361 8.361 0 0 0 1-5.43A15.928 15.928 0 0 1 17 18c-.12 7-8.85 8.05-8.85 8.05a4.63 4.63 0 0 0 1.76-2.87c.29-1.8-2.58-3.8-2.58-3.8-2.48 4.15-1.07 6.67-1.07 6.67S0 23.1 0 19.24c0-3.86 4.22-7.75 4.62-10.79A12.25 12.25 0 0 0 4 3zm2.58 5.51h-.02v.17A13.89 13.89 0 0 1 4.23 14C3.13 15.77 2 17.65 2 19.25c0 1 .88 2.07 2 3a12.38 12.38 0 0 1 1.62-3.9l1.1-1.84 1.84 1.2c.59.45 3.29 2.48 3.44 5a5.47 5.47 0 0 0 3-4.78 12.81 12.81 0 0 0-1.73-6.37c-.19.5-.426.98-.7 1.44l-1.89 3.1-1.62-3.29a39.714 39.714 0 0 0-2.48-4.3z">
                      </path>
                  </svg>
                </span>
                <span class="num">${song.basicInfo.hotNum}</span>
            </div>
            <div class="views">
                <span class="icon">
                  <svg viewBox="0 0 22 15.45">
                      <path
                      d="M11 2c4 0 7.26 3.85 8.6 5.72-1.34 1.87-4.6 5.73-8.6 5.73S3.74 9.61 2.4 7.73C3.74 5.86 7 2 11 2m0-2C4.45 0 0 7.73 0 7.73s4.45 7.73 11 7.73 11-7.73 11-7.73S17.55 0 11 0z">
                      </path>
                      <path
                      d="M11 5a2.73 2.73 0 1 1-2.73 2.73A2.73 2.73 0 0 1 11 5m0-2a4.73 4.73 0 1 0 4.73 4.73A4.73 4.73 0 0 0 11 3z">
                      </path>
                  </svg>
                </span>
                <span class="num">${formatNum(+song.basicInfo.views)}</span>
            </div>
        </a>
    `;
  chartSongs.append(li);
}

function renderChart(songs) {
  songs.forEach((song) => {
    addSongToChart(song);
  });
}

function addLinks() {
  const links = document.querySelectorAll(".chart .list li > a");
  links.forEach((link) => {
    link.href = "./lyrics/song-lyrics.html";
  });
}
