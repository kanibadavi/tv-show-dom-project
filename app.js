//get data////////////////////////////////////////

const url = "https://api.tvmaze.com/shows/82/episodes";







//make cards for each episode
function makeCards(data) {
  const divEl = document.createElement("div");
  divEl.classList.add("divContainer")
  document.querySelector(".main").append(divEl);
    data.forEach((user) => {
    //put section in main
    const section = document.createElement("section");
    section.classList.add("div-card");
    section.setAttribute("data-name",user.name)
    section.setAttribute("data-desc",user.summary)
    divEl.append(section);
    //put border in section
    const border = document.createElement("article");
    section.append(border);
    border.classList.add("container");
    //put image in border
    const image = document.createElement("img");
    image.src = user.image.medium;
    border.append(image);
    //put heading in border
    const heading = document.createElement("h1");
    heading.textContent = `${user.name}`;
    border.append(heading);
    heading.classList.add("head");
    //put button in border
    const button = document.createElement("button");
    button.textContent = `S0${user.season}E0${user.number}`;
    border.append(button);
    button.classList.add("button");
    //put p in border
    const paragraph = document.createElement("p");
    paragraph.innerHTML = user.summary;
    border.append(paragraph);
    paragraph.classList.add("para");

    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = `S0${user.season}E0${user.number} - ${user.name}`;
    document.querySelector(".select").append(option);
  });
}









async function data(url) {
  try{
    const response = await fetch(url);
    const users = await response.json();

    console.log(users);
    renderBase()
    makeCards(users)



    
    // input.addEventListener("keyup",(e)=>{
    //   const searchTerm = e.target.value.toLowerCase()
    //   let myArr = []
    //   users.map(movie => {
    //     if(Object.values(movie).includes(searchTerm)){
    //       myArr.push(movie)
    //     }
    //     makeCards(myArr)
    //     })
    //   })
    










  } catch(err){
    console.log(err);
  }}
data(url);
///////////////////////////////////////////////////

function renderBase () {
  //add navbar to body
const navbar = document.createElement("div");
document.body.append(navbar);
navbar.classList.add("navbar");



//add form to navbar
const form = document.createElement("form");
navbar.append(form);
form.setAttribute("action", "");
form.classList.add("search-bar");

//add logo to navbar
const image2 = document.createElement("img");
navbar.append(image2);
image2.setAttribute(
  "src",
  "https://cdn-1.webcatalog.io/catalog/tvmaze/tvmaze-icon-filled.png?v=1666372404459"
);
image2.classList.add("logo");

//add nav to navbar
const nav = document.createElement("nav");
navbar.append(nav);

//add unordered list to nav
const ul = document.createElement("ul");
nav.append(ul);

//add list to unordered list
const li = document.createElement("li");
ul.append(li);

//add anchors to list
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

//add input to form
const input = document.createElement("input");
form.append(input);
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Search Here... ");
// input.setAttribute("onkeyup", "myFunction()");
input.addEventListener("input", (e)=>{
 
  const elements = document.querySelectorAll(".div-card")
  console.log(elements);
  const search = e.target.value
  console.log(search);
  for(let el of elements){
    // console.log(el);
    if(el.getAttribute("data-name").toLowerCase().includes(search.toLowerCase()) || el.getAttribute("data-desc").toLowerCase().includes(search.toLowerCase())){
      el.style.display = "inline-block"
    }else {
      el.style.display = "none"
    }
  }
});
input.classList.add("search-item");

const select = document.createElement("select");
select.classList.add("select");
navbar.append(select);
const option = document.createElement("option");
option.value = "all"
select.append(option);
option.textContent= "all episodes"
select.addEventListener("change" , (e) => {
  const elements = document.querySelectorAll(".div-card")
  console.log(elements);
  const search = e.target.value
  console.log(search);
  for(let el of elements){
    // console.log(el);
    if(search === "all"){
      el.style.display = "inline-block"
    } else if(el.getAttribute("data-name").toLowerCase().includes(search.toLowerCase()) || el.getAttribute("data-desc").toLowerCase().includes(search.toLowerCase())){
      el.style.display = "inline-block"
    }else {
      el.style.display = "none"
    }
  }
})

//add button to form
const button = document.createElement("button");
form.append(button);
button.setAttribute("type", "submit");

//add search icon to button
const image3 = document.createElement("img");
button.append(image3);
image3.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3917/3917754.png"
);
image3.setAttribute("alt", "search icon");

//add a section to body
const section2 = document.createElement("section");
document.body.append(section2);
section2.classList.add("row", "hero");

//add main to body
const main = document.createElement("main");
document.body.append(main);
main.classList.add("main");

//add a section into our section
const section3 = document.createElement("div");
section2.append(section3);
section3.classList.add("col");

//add our starting heading and paragraph to section
const heading1 = document.createElement("h1");
heading1.textContent = "TVmaze";
section3.append(heading1);
heading1.classList.add("heading");
const paragraph1 = document.createElement("p");
paragraph1.textContent = "Choose one and lets watch it!";
section3.append(paragraph1);
paragraph1.classList.add("paragraph");

//add another section
const section4 = document.createElement("div");
section2.append(section4);
section4.classList.add("col");

//add cards in the header
const cards = document.createElement("div");
section4.append(cards);
cards.classList.add("zeshtalu");

//four starting seasons
const div1 = document.createElement("div");
cards.append(div1);
div1.classList.add("div1");
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
div2.classList.add("div2");
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
div3.classList.add("div3");
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
div4.classList.add("div4");
const heading8 = document.createElement("h5");
div4.append(heading8);
heading8.classList.add("card4");
heading8.textContent = "Game Of Thrones 4";
const paragraph5 = document.createElement("p");
div4.append(paragraph5);
paragraph5.textContent =
  "The fourth season of the fantasy drama television series Game of Thrones premiered in the United States on HBO on April 6, 2014, and concluded on June 15, 2014.";
//////////////////////////////////////////////////////////

/////////////////////////////////////////////

}