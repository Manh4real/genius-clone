import { SONGS, addSongToChart } from "../script.js";

const titleHeader = document.querySelector(".title-header");
const filter = document.querySelector(".chart .filter");
const btn = document.querySelector(".more-btn");
const listEl = document.querySelector(".chart .list");
const table = document.querySelector(".table");

const types = document.querySelectorAll("td.type");
const genres = document.querySelectorAll("td.genre");
const time = document.querySelectorAll("td.time");

window.addEventListener("click", offFilterTable);
btn.onclick = load;
table.onclick = toggleSelection;
titleHeader.onclick = toggleFilter;

function toggleFilter(e) {
  e.stopPropagation();
  showHideTable();
}

function showHideTable() {
  let check = table.classList.contains("hidden");
  if (check) return showTable();
  hideTable();
}

function showTable() {
  filter.classList.toggle("expanded");
  table.classList.remove("hidden");
  table.classList.add("show");
  filter.style.width = 300 + "px";
}
function hideTable() {
  filter.classList.toggle("expanded");
  table.classList.remove("show");
  table.classList.add("hidden");
  filter.style.width = 250 + "px";
}

function load() {
  loading();
  setTimeout(() => {
    loadMore();
    finishLoading();
  }, 2000);
}

function loading() {
  btn.classList.add("loading");
  btn.textContent = "Loading...";
}

function finishLoading() {
  btn.classList.remove("loading");
  btn.textContent = "Load More";
}

function loadMore() {
  if (listEl.children.length >= 50) return;
  for (let i = 0; i < 10; i++) addSongToChart(SONGS[i]);
}

function toggleSelection(e) {
  e.stopPropagation();
  let td = e.target.closest("td");
  if (!td) return;
  if (td.classList.contains("active") || td.textContent == "") return;
  selectType.call(types, td);
  selectGenre.call(genres, td);
  selectTime.call(time, td);
}

function selectType(td) {
  if (!td.classList.contains("type")) return;
  toggleTD.call(this, td);
}

function selectGenre(td) {
  if (!td.classList.contains("genre")) return;
  toggleTD.call(this, td);
}

function selectTime(td) {
  if (!td.classList.contains("time")) return;
  toggleTD.call(this, td);
}

function toggleTD(td) {
  this.forEach((type) => {
    type.classList.remove("active");
  });
  td.classList.add("active");
}

function offFilterTable(e) {
  if (e.target.closest("th")) return;
  if (table.classList.contains("hidden")) return;

  hideTable();
}
