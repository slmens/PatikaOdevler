const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


const btnAll = document.querySelector("#btn-all");
const btnKorea = document.querySelector("#btn-korea");
const btnJapan = document.querySelector("#btn-japan");
const btnChina = document.querySelector("#btn-china");

const sectionCenter = document.querySelector("#row");

const leftImgDivRef = document.querySelector("#leftImgDiv");
const leftInnerDivRef = document.querySelector("#leftInnerDiv");
const rigthImgDivRef = document.querySelector("#rigthImgDiv");
const rigthInnerDivRef = document.querySelector("#rigthInnerDiv");

btnAll.addEventListener("click", loadAll);
btnKorea.addEventListener("click", loadKorea);
btnJapan.addEventListener("click", loadJapan);
btnChina.addEventListener("click", loadChina);

function loadAll() {

  sectionCenter.innerHTML = '';

  for (let i = 0; i < menu.length; i++) {
    const recipeDiv = document.createElement("div");

    recipeDiv.classList.add(
      "menu-items",
      "col-lg-6",
      "col-sm-12",
      menu[i].category
    );
    

    const img = document.createElement("img");
    img.classList.add("photo");
    img.src = menu[i].img;
    img.alt = menu[i].title;
    recipeDiv.appendChild(img);

    const recipeInfo = document.createElement("div");
    recipeInfo.classList.add("menu-info");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    const title = document.createElement("h4");
    title.textContent = menu[i].title;
    menuTitle.appendChild(title);

    const price = document.createElement("h4");
    price.classList.add("price");
    price.textContent = menu[i].price;
    menuTitle.appendChild(price);
    recipeInfo.appendChild(menuTitle);

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-text");
    const text = document.createElement("p");
    text.classList.add("desc");
    text.textContent = menu[i].desc;
    menuInfo.appendChild(text);

    recipeInfo.appendChild(menuInfo);

    recipeDiv.appendChild(recipeInfo);
    sectionCenter.appendChild(recipeDiv);
  }
}

function loadKorea() {
  sectionCenter.innerHTML = '';

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].category === "Korea") {
      const recipeDiv = document.createElement("div");

    recipeDiv.classList.add(
      "menu-items",
      "col-lg-6",
      "col-sm-12",
      menu[i].category
    );
    

    const img = document.createElement("img");
    img.classList.add("photo");
    img.src = menu[i].img;
    img.alt = menu[i].title;
    recipeDiv.appendChild(img);

    const recipeInfo = document.createElement("div");
    recipeInfo.classList.add("menu-info");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    const title = document.createElement("h4");
    title.textContent = menu[i].title;
    menuTitle.appendChild(title);

    const price = document.createElement("h4");
    price.classList.add("price");
    price.textContent = menu[i].price;
    menuTitle.appendChild(price);
    recipeInfo.appendChild(menuTitle);

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-text");
    const text = document.createElement("p");
    text.classList.add("desc");
    text.textContent = menu[i].desc;
    menuInfo.appendChild(text);

    recipeInfo.appendChild(menuInfo);

    recipeDiv.appendChild(recipeInfo);
    sectionCenter.appendChild(recipeDiv);
    }
  }
}

function loadJapan() {
  sectionCenter.innerHTML = '';

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].category === "Japan") {
      const recipeDiv = document.createElement("div");

    recipeDiv.classList.add(
      "menu-items",
      "col-lg-6",
      "col-sm-12",
      menu[i].category
    );
    

    const img = document.createElement("img");
    img.classList.add("photo");
    img.src = menu[i].img;
    img.alt = menu[i].title;
    recipeDiv.appendChild(img);

    const recipeInfo = document.createElement("div");
    recipeInfo.classList.add("menu-info");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    const title = document.createElement("h4");
    title.textContent = menu[i].title;
    menuTitle.appendChild(title);

    const price = document.createElement("h4");
    price.classList.add("price");
    price.textContent = menu[i].price;
    menuTitle.appendChild(price);
    recipeInfo.appendChild(menuTitle);

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-text");
    const text = document.createElement("p");
    text.classList.add("desc");
    text.textContent = menu[i].desc;
    menuInfo.appendChild(text);

    recipeInfo.appendChild(menuInfo);

    recipeDiv.appendChild(recipeInfo);
    sectionCenter.appendChild(recipeDiv);
    }
  }
}

function loadChina() {
  sectionCenter.innerHTML = '';
  
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].category === "China") {
      const recipeDiv = document.createElement("div");

    recipeDiv.classList.add(
      "menu-items",
      "col-lg-6",
      "col-sm-12",
      menu[i].category
    );
    

    const img = document.createElement("img");
    img.classList.add("photo");
    img.src = menu[i].img;
    img.alt = menu[i].title;
    recipeDiv.appendChild(img);

    const recipeInfo = document.createElement("div");
    recipeInfo.classList.add("menu-info");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    const title = document.createElement("h4");
    title.textContent = menu[i].title;
    menuTitle.appendChild(title);

    const price = document.createElement("h4");
    price.classList.add("price");
    price.textContent = menu[i].price;
    menuTitle.appendChild(price);
    recipeInfo.appendChild(menuTitle);

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-text");
    const text = document.createElement("p");
    text.classList.add("desc");
    text.textContent = menu[i].desc;
    menuInfo.appendChild(text);

    recipeInfo.appendChild(menuInfo);

    recipeDiv.appendChild(recipeInfo);
    sectionCenter.appendChild(recipeDiv);
    }
  }
}
