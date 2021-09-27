import { animate } from "./animate.js";
import { createDropdown, removeDropdown } from "./script.js";

const dypherLyricsElems = document.querySelectorAll(".decipher-lyrics");
const rightSide = document.querySelector(".right.info-abt-sng-lrcs");
const annotationTitle = rightSide.querySelector(".about .title");
// const lyricsEl = document.querySelector(".lyrics");
let prev;

window.addEventListener("click", function () {
  removeAnnotation();
  // removeLeaderboard();
});
let checkTop;

annotationTitle.onclick = displayLeaderboard;
enableAnnotation();
function enableAnnotation() {
  dypherLyricsElems.forEach((el) => {
    el.onclick = function (e) {
      e.stopPropagation();
      displayAnnotation(this);
    };
  });
}

function displayLeaderboard(e) {
  e.stopPropagation();
  this.classList.toggle("active");
}

function displayAnnotation(el) {
  if (prev == el) return;
  prev = el;
  document
    .querySelector(".annotation-displayed")
    ?.classList.remove("annotation-displayed");

  el.classList.add("annotation-displayed");
  rightSide.querySelector(".annotation-container")?.remove();
  //   rightSide.innerHTML = "";
  rightSide.classList.add("overlapped");
  let annotation = createAnnotation(el);
  rightSide.append(annotation);
  addEventsForAnnotation(annotation);
  animate(annotation, { duration: 200, draw: slide });
}

function addEventsForAnnotation(el) {
  let btn = el.querySelector(".arrow-down-btn");
  btn.onclick = function (e) {
    e.stopPropagation();
    this.classList.toggle("active");
  };
  btn.querySelector(".report").onclick = function () {
    alert("Reported");
  };
  el.querySelector(".top .title").onclick = displayLeaderboard;
  el.querySelectorAll(".drpbl-inl-bl").forEach((item) => {
    item.addEventListener("mouseenter", createDropdown);
    item.addEventListener("mouseleave", removeDropdown);
  });
}

function slide(el, progress) {
  el.style.transform = `
    translate(-${30 - progress * 30}px, ${checkTop ? 0 : -30}%)`;
  el.style.opacity = progress;
}

function createAnnotation(target) {
  let div = document.createElement("div");
  div.className = "annotation-container";
  div.onclick = function (e) {
    e.stopPropagation();
    removePopupsOnAnnotation.call(this);
  };
  div.innerHTML = `
  <div class="annotation-content">
    <div class="arrow-left-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.87 21.32"><path d="M9.37 21.32L0 10.66 9.37 0l1.5 1.32-8.21 9.34L10.87 20l-1.5 1.32"></path></svg>
    </div>
    <div class="top">
      <span class="title">Genius Annotation <span class="ctrbts-text">3 contributors</span></span>
      <div class="leaderboard">
        <div class="leaderboard-main">
          <div class="cmptt">
            <span class="leaderboard-rank">1</span>
            <div class="rank-info">
              <div class="drpbl-inl-bl cmptt-info">
                <div class="cmptt-image small-image" style="background-image: url(../img/image8.jpg);"></div>
                <a href="#" class="name drpbl moderator">MERLYN</a>
              </div>
              <div class="percentage">63%</div>
              <div class="percent-indicator" style="width: 63%"></div>
            </div>
          </div>
          <div class="cmptt">
            <span class="leaderboard-rank">2</span>
            <div class="rank-info">
              <div class="drpbl-inl-bl cmptt-info">
                <div class="cmptt-image small-image" style="background-image: url(../img/image8.jpg);"></div>
                <a href="#" class="name drpbl moderator">PierFrancescoCosta</a>
              </div>
              <div class="percentage">22%</div>
              <div class="percent-indicator" style="width: 22%"></div>
            </div>
          </div>
          <div class="cmptt">
            <span class="leaderboard-rank">2</span>
            <div class="rank-info">
              <div class="drpbl-inl-bl cmptt-info">
                <div class="cmptt-image small-image" style="background-image: url(../img/image8.jpg);"></div>
                <a href="#" class="name drpbl moderator">FOBfansrar</a>
              </div>
              <div class="percentage">15%</div>
              <div class="percent-indicator" style="width: 15%"></div>
            </div>
          </div>
        </div> 
        <div class="leaderboard-footer">
          <div class="small">
            <div>
              Created by <a href="#" class="blueish">FOBfasrar</a> <span class="created-time">a month ago</span>
            </div>
            <div>
              Accepted by <a href="#" class="blueish">17cruzc</a>
            </div>
          </div>
          <div class="view-creadit-ctn">
            <span>VIEW ALL CREDIT</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-annotation-content">
        <p>Baby Keem was a relatively independent rapper until he <a href="#" class="blueish">partnered with</a> Kendrick Lamar’s service company pgLang in March 2020. Keem had <a href="#" class="blueish">previously worked</a> with <a href="#" class="blueish">Top Dawg Entertainment</a> but was not signed to them and didn’t garner attention until the success of his July 2019 single, <a href="#" class="blueish">“ORANGE SODA.”</a></p>
        <p>In October 2020, Kendrick <a href="#" class="blueish">interviewed Keem for i-D magazine.</a> During their conversation, Keem spoke on how pgLang helped him grow as an artist:</p>
        <blockquote class="quote">I’ve seen pgLang before it was even an idea that came to fruition. It’s sticking to and believing in something, even when you don’t know how it will be created. […] I believed in it, and I stuck to it and now everything is paying off.</blockquote>
        <p>“Man-Man” is a nickname Kendrick <a href="#" class="blueish">received from his parents</a> because he was a mature child. He used the name to describe himself on his 2017 song <a href="#" class="blueish">“HUMBLE.”</a>:</p>
        <blockquote class="quote">
        Who that nigga thinkin' that he frontin' on Man-Man? (Man-Man) <br/>
        Get the fuck off my stage, I’m the Sandman (Sandman)</blockquote>
    </div>
    <div class="bottom">
        <button class="show-btn">Show 1 proposed edit</button>
        <div>
            <div class="btn pyong">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.37 22"><path d="M0 7l6.16-7 3.3 7H6.89S5.5 12.1 5.5 12.17h5.87L6.09 22l.66-7H.88l2.89-8z"></path>
                    </svg>
                </span>
            </div>
            <div class="btn share-btn">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.94 22"><path d="M16.03 7.39v12.7H1.91V7.39H0V22h17.94V7.39h-1.91"></path><path d="M8.08 3.7v11.81h1.91V3.63l2.99 2.98 1.35-1.35L9.07 0 3.61 5.46l1.36 1.35L8.08 3.7"></path>
                    </svg>
                </span>
                <span class="text">Share</span>
            </div>
            <div class="btn arrow-down-btn">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.32 10.91"><path d="M10.66 10.91L0 1.5 1.32 0l9.34 8.24L20 0l1.32 1.5-10.66 9.41"></path>
                    </svg>
                </span>
                <div class="report">report abuse</div>
            </div>
        </div>
    </div>
</div>
    `;
  initPos(target, div);
  return div;
}

function removeAnnotation() {
  prev = null;
  document
    .querySelector(".annotation-displayed")
    ?.classList.remove("annotation-displayed");
  rightSide.classList.remove("overlapped");
  rightSide.querySelector(".annotation-container")?.remove();
}

// function removeLeaderboard() {
//   rightSide.querySelector(".about > div > .title")?.classList.remove("active");
// }

function initPos(target, el) {
  let prntTop = rightSide.getBoundingClientRect().top; // right side top
  let prntBottom = rightSide.getBoundingClientRect().bottom; // right side bottom
  let tarTop = target.getBoundingClientRect().top; // lyrics top
  let tarBottom = target.getBoundingClientRect().bottom; // lyrics bottom (window top-left corner)

  if (tarBottom + 400 >= prntBottom) {
    el.style.bottom = 0 + "px";
  } else {
    let check = tarTop - prntTop < 200;
    checkTop = check;
    el.style.top = check ? 0 + "px" : tarTop - prntTop + "px";
    // el.style.transform = `translate(0, ${checkTop ? 0 : -30}%)`;
  }
  el.querySelector(".arrow-left-indicator").style.top = 0 + "px";
}

function removePopupsOnAnnotation() {
  this.querySelector(".arrow-down-btn")?.classList.remove("active");
  this.querySelector(".top")?.classList.remove("active");
}
