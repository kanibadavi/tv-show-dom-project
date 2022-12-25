const url = "https://api.tvmaze.com/shows/82/episodes";

async function data() {
  const response = await fetch(url);
  const urlData = await response.json();

  console.log(urlData);

  products(urlData);
}

data();

function products(data) {
  const main = document.createElement("main");
  document.body.append(main);
  const section = document.createElement("section");
  main.append(section);
  data.forEach((product) => {
    const border = document.createElement("article");
    section.append(border);
    border.classList.add("container");

    const image = document.createElement("img");
    image.src = product.image.medium;
    section.append(image);

    const heading = document.createElement("h1");
    heading.textContent = product.name;
    section.append(heading);

    const heading2 = document.createElement("h2");
    heading2.textContent = `S0${product.season}0${product.number}`;
    section.append(heading2);

    const paragraph = document.createElement("p");
    paragraph.innerHTML = product.summary;
    section.append(paragraph);
  });
}
