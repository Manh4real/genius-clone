const contentEl = document.querySelector(".latest .main-content");

const LATEST_NEWS = [
  {
    id: "LN001",
    title: "FEATURE",
    image: "/assets/img/image2.jpg",
    para: `Interview: Sully Talks About Producing Doja Cat’s “Get Into It
        (Yuh)” and “I Don’t Do Drugs”`,
    posted: {
      person: {
        name: "Chris Mench",
      },
      date: "Sep 14, 2021",
    },
  },
];

// render();

export function render() {
  for (let i = 0; i < 9; i++) {
    createArticle(LATEST_NEWS[0]);
  }
}

function createArticle(article) {
  let div = document.createElement("div");
  div.className = "article";

  div.innerHTML = `
    <a href="#">
        <div><h3 class="title">${article.title}</h3></div>
        <div class="image" style="background-image: url(${article.image})"></div>
        <p class="para">${article.para}</p>
        <div class="posted-by">
        <span>by</span>&nbsp;<span class="name">${article.posted.person.name} / </span> <span class="date">${article.posted.date}</span>
        </div>
    </a>
    `;

  contentEl.append(div);
}
