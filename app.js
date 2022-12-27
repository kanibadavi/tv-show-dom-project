const url = "https://api.tvmaze.com/shows/82/episodes";

async function data() {
  const response = await fetch(url);
  const urlData = await response.json();

  console.log(urlData);

  products(urlData);
}

data();

// put main in document

const navbar = document.createElement("div");
document.body.append(navbar);
navbar.classList.add("navbar");

const image2 = document.createElement("img");
navbar.append(image2);
image2.setAttribute(
  "src",
  "https://cdn-1.webcatalog.io/catalog/tvmaze/tvmaze-icon-filled.png?v=1666372404459"
);
image2.classList.add("logo");

const nav = document.createElement("nav");
navbar.append(nav);

const ul = document.createElement("ul");
nav.append(ul);

const li = document.createElement("li");
ul.append(li);

const anchor = document.createElement("a");
li.append(anchor);
anchor.setAttribute("href", "");
anchor.textContent = "HOME";
const anchor2 = document.createElement("a");
li.append(anchor2);
anchor2.setAttribute("href", "");
anchor2.textContent = "WATCH";
const anchor3 = document.createElement("a");
li.append(anchor3);
anchor3.setAttribute("href", "");
anchor3.textContent = "ABOUT";

const section2 = document.createElement("section");
document.body.append(section2);
section2.classList.add("row");

const section3 = document.createElement("div");
section2.append(section3);
section3.classList.add("col");

const heading1 = document.createElement("h1");
heading1.textContent = "TVmaze";
section3.append(heading1);
heading1.classList.add("heading");
const paragraph1 = document.createElement("p");
paragraph1.textContent = "Choose one and lets watch it!";
section3.append(paragraph1);
paragraph1.classList.add("paragraph");

const section4 = document.createElement("div");
section2.append(section4);
section4.classList.add("col");

const cards = document.createElement("div");
section4.append(cards);
cards.classList.add("card" , "zeshtalu");

const div1 = document.createElement("div");
cards.append(div1);
div1.classList.add("div1")
const heading5 = document.createElement("h5");
div1.append(heading5);
heading5.classList.add("card1");
heading5.textContent = "Game Of Thrones 1";
const paragraph2 = document.createElement("p");
div1.append(paragraph2);
paragraph2.textContent =
  "The first season of the fantasy drama television series Game of Thrones premiered on HBO on April 17, 2011, in the U.S. and concluded on June 19, 2011.";

const div2 = document.createElement("div");
cards.append(div2);
div2.classList.add("div2")
const heading6 = document.createElement("h5");
div2.append(heading6);
heading6.classList.add("card2");
heading6.textContent = "Game Of Thrones 2";
const paragraph3 = document.createElement("p");
div2.append(paragraph3);
paragraph3.textContent =
  "The second season of the fantasy drama television series Gam of Thrones premiered in the United States on HBO on April 1, 2012, and concluded on June 3, 2012.";

const div3 = document.createElement("div");
cards.append(div3);
div3.classList.add("div3")
const heading7 = document.createElement("h5");
div3.append(heading7);
heading7.classList.add("card3");
heading7.textContent = "Game Of Thrones 3";
const paragraph4 = document.createElement("p");
div3.append(paragraph4);
paragraph4.textContent =
  "The third season of the fantasy drama television series Game of Thrones premiered in the United States on HBO on March 31, 2013, and concluded on June 9, 2013.";

const div4 = document.createElement("div");
cards.append(div4);
div4.classList.add("div4")
const heading8 = document.createElement("h5");
div4.append(heading8);
heading8.classList.add("card4");
heading8.textContent = "Game Of Thrones 4";
const paragraph5 = document.createElement("p");
div4.append(paragraph5);
paragraph5.textContent =
  "The fourth season of the fantasy drama television series Game of Thrones premiered in the United States on HBO on April 6, 2014, and concluded on June 15, 2014.";

const main = document.createElement("main");
document.body.append(main);
main.classList.add("main");

function products(data) {
  data.forEach((product) => {
    //put section in main
    const section = document.createElement("section");
    main.append(section);
    //put border in section
    const border = document.createElement("article");
    section.append(border);
    border.classList.add("container");
    //put image in border
    const image = document.createElement("img");
    image.src = product.image.medium;
    border.append(image);

    // const div = document.createElement("div");
    // div.append(border);
    // border.classList.add("div");

    const heading = document.createElement("h1");
    heading.textContent = `${product.name}`;
    border.append(heading);
    heading.classList.add("head");

    const button = document.createElement("button");
    button.textContent = `S0${product.season}E0${product.number}`;
    border.append(button);
    button.classList.add("button");

    const paragraph = document.createElement("p");
    paragraph.innerHTML = product.summary;
    border.append(paragraph);
    paragraph.classList.add("para");

    //   const shortening = document.createElement("p");
    //   shortening.innerHTML = summary.substring(0, 120);
    //   shortening.setAttribute("data-id", index);
    //   shortening.addEventListener("click", () =>{
    //     if (shortening.textContent.length < 119){
    //       shortening.innerHTML = summary;
    //     } else {
    //       shortening.innerHTML = summary.substring(0 , 120)
    //     }
    //   })
  });
}
