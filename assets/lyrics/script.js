// const trackInfoEl = document.querySelector("#main .right .track-info");
const dropableItems = document.querySelectorAll(".drpbl-inl-bl");
const people = document.querySelectorAll(".drpbl");
const readmoreEl = document.querySelector("#main .right .rd-mr");

dropableItems.forEach((item) => {
  item.addEventListener("mouseenter", createDropdown);
  item.addEventListener("mouseleave", removeDropdown);
});
readmoreEl.onclick = function () {
  let p = this.parentNode;
  this.remove();
  p.insertAdjacentHTML(
    "beforeend",
    `<a href="#" class="blueish">Dave Free</a>’s production company.`
  );
  p.parentNode.insertAdjacentHTML(
    "beforeend",
    `
  <p>This is one of Kendrick Lamar’s very few musical appearances since the 2018 <a href="#" class="blueish">Black Panther movie soundtrack</a> and is the first showcase of his presumed alter ego, <a href="#" class="blueish">Oklama</a>, introduced a week before the song’s release with a <a href="#" class="blueish">mysterious website</a>.
  On August 23, 2021, Keem <a href="#" class="blueish">announced the release of the single</a> by posting the cover art, a family picture of the two cousins paying homage to the cover of Kendrick’s acclaimed 2012 debut album, <a href="#" class="blueish">good kid, m.A.A.d city</a>.</p>
  <img src="../img/image10.jpg" width="100%" />
  <p>Keem later shared <a href="#" class="blueish">two new snippets</a> of the song and previewed a <a href="#" class="blueish">reversed preview</a> of the Dave Free-directed music video, which released the same night as the song.
  </p>`
  );
};

let id;
export function createDropdown(e) {
  e.target.classList.add("drop-enabled");
  let div = document.createElement("div");
  div.className = "dropped";
  //   let ddctn = document.createElement("div");
  //   ddctn.className = "dropped-ctn";
  div.innerHTML = `
  <div class="dropped-ctn">
    <div class="title">
        <div class="image" style="background-image: url(../img/image9.png);"></div>
        <div class="text">
            <h3 class="name">${e.target.innerText}</h3>
            <a href="https://www.youtube.com/watch?v=v6HBZC9pZHQ" class="vtfd-prfl-btn">See Vertified Profile</a>
        </div>
    </div>
    <div class="dscrptn">
        Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper and songwriter from Compton, CA. He first gained major attention.
    </div>
</div>
    `;
  // div.append(ddctn);

  // div.onclick = function (e) {
  //   console.log(":))");
  //   e.preventDefault();
  //   e.stopPropagation();
  // };

  id = setTimeout(function () {
    e.target.append(div);
  }, 300);
}

export function removeDropdown(e) {
  clearTimeout(id);
  id = null;
  e.target.classList.remove("drop-enabled");
  e.target.querySelector(".dropped")?.remove();
}
/**
 * let data = [
 *  {id: "ar001", type: "artist", name: "abc", description: "abc def ...", isVerified: true},
 * {id: "ft001", type: "feature", name: "def", description: "abc def ...", byWho: {id: "ar001", name: "abc"}}
 * ]
 *
 */
// var ID = function () {
//   return "_" + Math.random().toString(36).substr(2, 9);
// };
// function renderTrackInfo() {
//   let data = [];

//   people.forEach((person) => {
//     let obj = {
//       id: ID(),
//       name: person.innerText,
//       type: "artist",
//       description: `Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper and songwriter from Compton, CA. He first gained major attention.`,
//       isVerified: true,
//     };
//     data.push(obj);
//   });
//   return data;
// }
