
let shop = document.getElementById("shop");
let listCard = document.getElementById("card-list");
let total = document.querySelector(".total");
let quantity = document.getElementById("quantity");
let trendProduct = document.getElementById("trend-item");
let trendCategory1 = document.getElementById("trend-category1");
let trendCategory2 = document.getElementById("trend-category2");
let headerTotal = document.getElementById("cart-total-header");

let listCards = [];

let products = [{
  id: "1",
  name: "Laptop",
  price: "800.00",
  realPrice: "1000.00",
  image: "images/laptop.png",
  image2: "images/laptop.png",
  image3: "images/laptop.png",
  image4: "images/laptop.png",
  rating: "4.5",
  quantity: "10",
  category: "laptop",
  isLiked: false,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, commodi doloribus corrupti reprehenderit placeat necessitatibus, vitae, nemo fugit tempora ipsam optio quis. Perspiciatis, placeat? Nesciunt ratione debitis rerum harum vero!"
}, {
  id: "2",
  name: "Phone",
  price: "500.00",
  realPrice: "1000.00",
  image: "images/phone.png",
  image2: "images/laptop.png",
  image3: "images/laptop.png",
  image4: "images/laptop.png",
  rating: "4.6",
  quantity: "10",
  category: "phone",
  isLiked: false,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, commodi doloribus corrupti reprehenderit placeat necessitatibus, vitae, nemo fugit tempora ipsam optio quis. Perspiciatis, placeat? Nesciunt ratione debitis rerum harum vero!"
}, {
  id: "3",
  name: "Tv",
  price: "600.00",
  realPrice: "1000.00",
  image: "images/tv.png",
  image2: "images/laptop.png",
  image3: "images/laptop.png",
  image4: "images/laptop.png",
  rating: "4.7",
  quantity: "10",
  category: "tv",
  isLiked: false,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, commodi doloribus corrupti reprehenderit placeat necessitatibus, vitae, nemo fugit tempora ipsam optio quis. Perspiciatis, placeat? Nesciunt ratione debitis rerum harum vero!"
}, {
  id: "4",
  name: "Headphones",
  price: "40.00",
  realPrice: "1000.00",
  image: "images/headphones.png",
  image2: "images/laptop.png",
  image3: "images/laptop.png",
  image4: "images/laptop.png",
  rating: "4.8",
  quantity: "20",
  category: "headphones",
  isLiked: false,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, commodi doloribus corrupti reprehenderit placeat necessitatibus, vitae, nemo fugit tempora ipsam optio quis. Perspiciatis, placeat? Nesciunt ratione debitis rerum harum vero!"
}, {
  id: "5",
  name: "Mouse",
  price: "15.00",
  realPrice: "1000.00",
  image: "images/mouse.png",
  image2: "images/laptop.png",
  image3: "images/laptop.png",
  image4: "images/laptop.png",
  rating: "4.9",
  quantity: "20",
  category: "mouse",
  isLiked: false,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, commodi doloribus corrupti reprehenderit placeat necessitatibus, vitae, nemo fugit tempora ipsam optio quis. Perspiciatis, placeat? Nesciunt ratione debitis rerum harum vero!"
}, {
  id: "6",
  name: "Keyboard",
  price: "20.00",
  realPrice: "1000.00",
  image: "images/keyboard.png",
  image2: "images/laptop.png",
  image3: "images/laptop.png",
  image4: "images/laptop.png",
  rating: "4.2",
  quantity: "20",
  category: "keyboard",
  isLiked: false,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, commodi doloribus corrupti reprehenderit placeat necessitatibus, vitae, nemo fugit tempora ipsam optio quis. Perspiciatis, placeat? Nesciunt ratione debitis rerum harum vero!"
}, {
  id: "7",
  name: "Camera",
  price: "30.00",
  realPrice: "1000.00",
  image: "images/camera.png",
  image2: "images/laptop.png",
  image3: "images/laptop.png",
  image4: "images/laptop.png",
  rating: "4.5",
  quantity: "20",
  category: "camera",
  isLiked: false,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, commodi doloribus corrupti reprehenderit placeat necessitatibus, vitae, nemo fugit tempora ipsam optio quis. Perspiciatis, placeat? Nesciunt ratione debitis rerum harum vero!"
},
]



var initProductQty = function () {

  $('.product-qty').each(function () {

    var $el_product = $(this);
    var quantity = 0;

    $el_product.find('.quantity-right-plus').click(function (e) {
      e.preventDefault();
      var quantity = parseInt($el_product.find('#quantity').val());
      $el_product.find('#quantity').val(quantity + 1);
    });

    $el_product.find('.quantity-left-minus').click(function (e) {
      e.preventDefault();
      var quantity = parseInt($el_product.find('#quantity').val());
      if (quantity > 0) {
        $el_product.find('#quantity').val(quantity - 1);
      }
    });

  });

}

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <div id=${value.id} class="product-item swiper-slide">
          <a href="#" class="btn-wishlist"><svg width="24" height="24">
              <use xlink:href="#heart"></use> 
            </svg></a>
          <figure>
            <a onclick="popupOpen(${key})" title="Product Title">
              <img src= ${value.image}  class="tab-image">
            </a>
          </figure>
          <h3>${value.name}</h3>
          <span class="qty">${value.quantity} Unit</span><span class="rating"><svg width="24" height="24" class="text-primary">
              <use xlink:href="#star-solid"></use>
            </svg> ${value.rating}</span>
          <span class="price">$${value.price}</span>
          <div class="d-flex align-items-center justify-content-between">
            <div class="input-group product-qty">
              <span class="input-group-btn">
                <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus"
                  data-field="">
                  <svg width="16" height="16">
                    <use xlink:href="#minus"></use>
                  </svg>
                </button>
              </span>
              
              <input type="text" id="quantity" name="quantity" class="form-control input-number" value=1
                min="1" max="100">
              <span class="input-group-btn">
                <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus"
                  data-field="">
                  <svg width="16" height="16">
                    <use xlink:href="#plus"></use>
                  </svg>
                </button>
              </span>
            </div>
            <button class="cart-button">
          <i onclick="addToCard(${key})" class="fa-regular fa-cart-shopping">Add to Cart</i>
        </button>
          </div>
        </div>
          `;
    trendProduct.appendChild(newDiv);
    shop.appendChild(newDiv);

  })
}
initApp();

function initTrend() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <div class="col" >
      <div class="product-item">
        <a href="#" class="btn-wishlist"><svg width="24" height="24">
            <use xlink:href="#heart"></use>
          </svg></a>
        <figure>
          <a onclick="popupOpen(${key})" title="Product Title">
            <img src=${value.image} class="tab-image">
          </a>
        </figure>
        <h3>${value.name}</h3>
        <span class="qty">${value.quantity} Unit</span><span class="rating"><svg width="24" height="24"
            class="text-primary">
            <use xlink:href="#star-solid"></use>
          </svg>${value.rating}</span>
        <span class="price">$${value.price}</span>
        <div class="d-flex align-items-center justify-content-between">
          <div class="input-group product-qty">
            <span class="input-group-btn">
              <button type="button" class="quantity-left-minus btn btn-danger btn-number"
                data-type="minus" data-field="">
                <svg width="16" height="16">
                  <use xlink:href="#minus"></use>
                </svg>
              </button>
            </span>
            <input type="text" id="quantity" name="quantity" class="form-control input-number" value=1
              min="1" max="100">
            <span class="input-group-btn">
              <button type="button" class="quantity-right-plus btn btn-success btn-number"
                data-type="plus" data-field="">
                <svg width="16" height="16">
                  <use xlink:href="#plus"></use>
                </svg>
              </button>
            </span>
          </div>
          <button class="cart-button">
          <i onclick="addToCard(${key})" class="fa-regular fa-cart-shopping">Add to Cart</i>
        </button>
        </div>
      </div>
    </div>
        `;
    trendProduct.appendChild(newDiv);
  })
}
initTrend();

function initTrendCategory1() {
  products.forEach((value, key) => {
    if (products[key].category == "laptop" || products[key].category == "phone") {
      let newDiv = document.createElement('div');
      newDiv.classList.add('item');
      newDiv.innerHTML = `
      <div class="col" >
      <div class="product-item">
        <a href="#" class="btn-wishlist"><svg width="24" height="24">
            <use xlink:href="#heart"></use>
          </svg></a>
        <figure>
          <a onclick="popupOpen(${key})" title="Product Title">
            <img src=${value.image} class="tab-image">
          </a>
        </figure>
        <h3>${value.name}</h3>
        <span class="qty">${value.quantity} Unit</span><span class="rating"><svg width="24" height="24"
            class="text-primary">
            <use xlink:href="#star-solid"></use>
          </svg>${value.rating}</span>
        <span class="price">$${value.price}</span>
        <div class="d-flex align-items-center justify-content-between">
          <div class="input-group product-qty">
            <span class="input-group-btn">
              <button type="button" class="quantity-left-minus btn btn-danger btn-number"
                data-type="minus" data-field="">
                <svg width="16" height="16">
                  <use xlink:href="#minus"></use>
                </svg>
              </button>
            </span>
            <input type="text" id="quantity" name="quantity" class="form-control input-number" value=1
              min="1" max="100">
            <span class="input-group-btn">
              <button type="button" class="quantity-right-plus btn btn-success btn-number"
                data-type="plus" data-field="">
                <svg width="16" height="16">
                  <use xlink:href="#plus"></use>
                </svg>
              </button>
            </span>
          </div>
          <button class="cart-button">
          <i onclick="addToCard(${key})" class="fa-regular fa-cart-shopping">Add to Cart</i>
        </button>
        </div>
      </div>
    </div>
        `;
      trendCategory1.appendChild(newDiv);
    }
  })

}
initTrendCategory1();

function initTrendCategory2() {
  products.forEach((value, key) => {
    if (products[key].category == "keyboard" || products[key].category == "headphones" || products[key].category == "mouse" || products[key].category == "camera") {
      let newDiv = document.createElement('div');
      newDiv.classList.add('item');
      newDiv.innerHTML = `
      <div class="col" >
      <div class="product-item">
        <a href="#" class="btn-wishlist"><svg width="24" height="24">
            <use xlink:href="#heart"></use>
          </svg></a>
        <figure>
          <a onclick="popupOpen(${key})" title="Product Title">
            <img src=${value.image} class="tab-image">
          </a>
        </figure>
        <h3>${value.name}</h3>
        <span class="qty">${value.quantity} Unit</span><span class="rating"><svg width="24" height="24"
            class="text-primary">
            <use xlink:href="#star-solid"></use>
          </svg>${value.rating}</span>
        <span class="price">$${value.price}</span>
        <div class="d-flex align-items-center justify-content-between">
          <div class="input-group product-qty">
            <span class="input-group-btn">
              <button type="button" class="quantity-left-minus btn btn-danger btn-number"
                data-type="minus" data-field="">
                <svg width="16" height="16">
                  <use xlink:href="#minus"></use>
                </svg>
              </button>
            </span>
            <input type="text" id="quantity" name="quantity" class="form-control input-number" value=1
              min="1" max="100">
            <span class="input-group-btn">
              <button type="button" class="quantity-right-plus btn btn-success btn-number"
                data-type="plus" data-field="">
                <svg width="16" height="16">
                  <use xlink:href="#plus"></use>
                </svg>
              </button>
            </span>
          </div>
          <button class="cart-button">
          <i onclick="addToCard(${key})" class="fa-regular fa-cart-shopping">Add to Cart</i>
        </button>
        </div>
      </div>
    </div>
        `;
      trendCategory2.appendChild(newDiv);
    }
  })

}
initTrendCategory2();


function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
    alert("sepete eklendi");
  } else {
    listCards[key].quantity += 1; 
    alert("sepete eklendi");
  }
  reloadCard();
}

function reloadCard() {
  
  listCard.innerHTML = '';
  let count = 0;
  
  let totalPrice = 0;

  countItem = parseFloat(document.getElementById("cart-count").innerHTML);
  countItem += 1;
  document.getElementById("cart-count").innerHTML = countItem;

  listCards.forEach((value, key) => {

    totalPrice = totalPrice + parseFloat(value.price);

    headerTotal.innerHTML = "$" +totalPrice;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
            <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">${value.name}</h6>
              <small class="text-body-secondary">${value.category}</small>
            </div>
            <span id = "cart-count" class="badge bg-primary rounded-pill">${value.quantity}</span>
            <span class="text-body-secondary">$${value.price}</span>
          </li>
          `;
      listCard.appendChild(newDiv);
    }
  })
  total.innerText = "$" + totalPrice.toLocaleString();
  quantity.innerHTML = count;
}

// popup products 
var sProduct = document.getElementById("s-product");

function initProduct(key) {

  sProduct.innerHTML = ""
  
  let newDiv = document.createElement('div');
  newDiv.classList.add('product');
  newDiv.innerHTML = `
    <span class="close-btn">&times;</span>
    <div class="sp-row">
    <div class="col-6">
      <div class="product-image">
        <div class="product-image-main">
          <img src="${products[key].image}"  alt="" id="product-main-image">
        </div>
        <div class="product-image-slider">
          <img src="${products[key].image}" alt="" class="image-list">
          <img src="${products[key].image2}" alt="" class="image-list">
          <img src="${products[key].image3}" alt="" class="image-list">
          <img src="${products[key].image4}" alt="" class="image-list">
        </div>
      </div>
    </div>
      <div class="product">
        <div class="product-title">
          <h2>${products[key].name}</h2>
        </div>
        <div class="product-rating">
          <span><i class="fa fa-star"></i></span>
          <span>${products[key].rating}</span>
          <span class="review"> &nbsp(47 Review)</span> 
        </div>
        <div class="product-price">
          <span class="offer-price">$${products[key].price}</span>
          <span class="sale-price">$${products[key].realPrice}</span>
        </div>

        <div class="product-details">
          <h3>Description</h3>
          <p>${products[key].desc}</p>
        </div>
        
        <div class="product-color">
          <h4>Color</h4>
          <div class="color-layout">
            <input type="radio" name="color" value="black" class="color-input">
            <label for="black" class="black"></label>
            <input type="radio" name="color" value="red" class="color-input">
            <label for="red" class="red"></label>

            <input type="radio" name="color" value="blue" class="color-input">
            <label for="blue" class="blue"></label>
          </div>
        </div>
        <span class="divider"></span>

        <div class="product-btn-group">
          <div class="button buy-now"><i class='bx bxs-zap'></i> Buy Now</div>
          <div onclick="addToCard(${key})" class="button heart"><i class='bx bxs-cart'></i> Add to Cart</div>
          <div class="button heart"><i class='bx bxs-heart'></i> Add to Wishlist</div>
        </div>
      </div>
    </div>
  </div>
    `;
  sProduct.appendChild(newDiv);

  var productPopup = document.getElementById("p-preview");

  var span = document.getElementsByClassName("close-btn")[0];

  productPopup.style.display = "block";

  span.onclick = function () {
    productPopup.style.display = "none";
  }


  window.onclick = function (event) {
    if (event.target == productPopup) {
      productPopup.style.display = "none";
    }
  }

  const sliderMainImage = document.getElementById("product-main-image");
  const sliderImageList = document.getElementsByClassName("image-list");

  sliderImageList[0].onclick = function () {
    sliderMainImage.src = sliderImageList[0].src;
  };

  sliderImageList[1].onclick = function () {
    sliderMainImage.src = sliderImageList[1].src;
  };

  sliderImageList[2].onclick = function () {
    sliderMainImage.src = sliderImageList[2].src;
  };

  sliderImageList[3].onclick = function () {
    sliderMainImage.src = sliderImageList[3].src;
  };
}

function popupOpen(key) {
  initProduct(key);
}

