const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu); 
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  aside.classList.toggle('inactive');

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');

  }
  aside.classList.toggle('hidden');

}

const productList = [];
productList.push({
  name:'Mandarina',
  price:'120.000',
  Image: './assets/img/Mandarina.jpg'
});
productList.push({
  name:'aguacate',
  price:'120.000',
  Image: './assets/img/Aguacate.jpg'
});
productList.push({
  name:'Mango',
  price:'120.000',
  Image: './assets/img/Mango.jpeg'
});
productList.push({
  name:'Limon',
  price:'120.000',
  Image: './assets/img/Limon.jpg'
});
productList.push({
  name:'Lechuga',
  price:'120.000',
  Image: './assets/img/Lechuga crespa.jpeg'
});
productList.push({
  name:'Maracuya',
  price:'120.000',
  Image: './assets/img/Maracuya.jpg'
});
productList.push({
  name:'Ppapa capira',
  price:'120.000',
  Image: './assets/img/Papa capira.jpg'
});
productList.push({
  name:'Papa criolla',
  price:'120.000',
  Image: './assets/img/Papa criolla.jpg'
});
productList.push({
  name:'Mandarina',
  price:'120.000',
  Image: './assets/img/Mandarina.jpg'
});
productList.push({
  name:'aguacate',
  price:'120.000',
  Image: './assets/img/Aguacate.jpg'
});
productList.push({
  name:'Mango',
  price:'120.000',
  Image: './assets/img/Mango.jpeg'
});
productList.push({
  name:'Limon',
  price:'120.000',
  Image: './assets/img/Limon.jpg'
});
productList.push({
  name:'Lechuga',
  price:'120.000',
  Image: './assets/img/Lechuga crespa.jpeg'
});
productList.push({
  name:'Maracuya',
  price:'120.000',
  Image: './assets/img/Maracuya.jpg'
});
productList.push({
  name:'Papa capira',
  price:'120.000',
  Image: './assets/img/Papa capira.jpg'
});
productList.push({
  name:'Papa criolla',
  price:'120.000',
  Image: './assets/img/Papa criolla.jpg'
});

function renderProducts(array){
  for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Image);
    productImg.addEventListener('click', console.log)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './assets/img/icons/bt_added_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productInfo);
    productCard.appendChild(productImg);
  
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
