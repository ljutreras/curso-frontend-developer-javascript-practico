const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);

function toggleDesktopMenu() {
  const isCarritoAsideOpen = aside.classList.contains("inactive");

  if (!isCarritoAsideOpen) {
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu() {
  const isCarritoAsideOpen = aside.classList.contains("inactive");

  if (!isCarritoAsideOpen) {
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toogleCarritoAside() {
  const isMobileMenuClose = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClose) {
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computador",
  price: 620,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement("div");      //Creamos el elemento DIV general
    productCard.classList.add("product-card");              //Le agregamos una clase

    const productImg = document.createElement("img");       //Creamos el elemento IMG
    productImg.setAttribute("src", product.image);          //Seteamos la imagen desde el Array

    const productInfo = document.createElement("div");      //Creamos el elemento DIV que va dentro del general
    productInfo.classList.add("product-info");              //Le agregamos una clase

    const productInfoDiv = document.createElement("div");   //Creamos el DIV que almacena la informacion

    const productPrice = document.createElement("p");       //Creamos el elemento P
    productPrice.innerText = "$" + product.price;           //Le asignamos el valor con innerText traido del array

    const productName = document.createElement("p");        //Creamos el elemento P
    productName.innerText = product.name;                   //Le asignamos el valor con innerText traido del array

    productInfoDiv.appendChild(productPrice);               //Agregamos el elemento dentro del DIV INFO
    productInfoDiv.appendChild(productName);                //Agregamos el elemento dentro del DIV INFO     

    const productInfoFigure = document.createElement("figure");         //Creamos el elemento FIGURE
    const productImgCart = document.createElement("img");               //Creamos el elemento IMG
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");   //Agregamos la imagen de la IMG-FIGURE

    productInfoFigure.appendChild(productImgCart);          //Agregamos el elemento IMG al elemento Figure

    productInfo.appendChild(productInfoDiv);                //Agregamos INFO DIV al DIV padre
    productInfo.appendChild(productInfoFigure);             //Agregamos FIGURE al DIV padre

    productCard.appendChild(productImg);                    //Agregamos la imagen del producto al DIV abuelo
    productCard.appendChild(productInfo);                   //Agregamos el DIV padre al DIV abuelo

    cardsContainer.appendChild(productCard);                //Agregamos todos los elementos al HTML DIV CONTAINER
  }
}

renderProducts(productList)


