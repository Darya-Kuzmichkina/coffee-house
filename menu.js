
const arrItems = [
  {
    type: "coffee",
    svg: "./imgs/coffee1.png",
    name: "Irish coffee",
    description:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "$7.00",
  },
  {
    type: "coffee",
    svg: "./imgs/coffee2.png",
    name: "Kahlua coffee",
    description:
      "Classic coffee with mil k and Kahlua liqueur under a cap of frothed milk",
    price: "$7.00",
  },
  {
    type: "coffee",
    svg: "./imgs/coffee3.png",
    name: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "$5.50",
  },
  {
    type: "coffee",
    svg: "./imgs/coffee4.png",
    name: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "$5.00",
  },
  {
    type: "coffee",
    svg: "./imgs/coffee5.png",
    name: "Espresso",
    description: "Classic black coffee",
    price: "$4.50",
  },
  {
    type: "coffee",
    svg: "./imgs/coffee6.png",
    name: "Latte",
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "$5.50",
  },
  {
    type: "coffee",
    svg: "./imgs/coffee7.png",
    name: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: "$5.50",
  },
  {
    type: "coffee",
    svg: "./imgs/coffee8.png",
    name: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "$6.50",
  },
  {
    type: "tea",
    svg: "./imgs/tea1.png",
    name: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "$4.50",
  },
  {
    type: "tea",
    svg: "./imgs/tea2.png",
    name: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "$5.00",
  },
  {
    type: "tea",
    svg: "./imgs/tea3.png",
    name: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: "$5.00",
  },
  {
    type: "tea",
    svg: "./imgs/tea4.png",
    name: "Sea buckthorn",
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "$5.50",
  },
  {
    type: "dessert",
    svg: "./imgs/dessert1.png",
    name: "Marble cheesecake",
    description:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "$3.50",
  },
  {
    type: "dessert",
    svg: "./imgs/dessert2.png",
    name: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: "$4.00",
  },
  {
    type: "dessert",
    svg: "./imgs/dessert3.png",
    name: "Cheesecakes",
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "$4.50",
  },
  {
    type: "dessert",
    svg: "./imgs/dessert4.png",
    name: "Creme brulee",
    description:
      "Delicate creamy dessert in a caramel basket with wild berries",
    price: "$4.00",
  },
  {
    type: "dessert",
    svg: "./imgs/dessert5.png",
    name: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "$4.50",
  },
  {
    type: "dessert",
    svg: "./imgs/dessert6.png",
    name: "Honey cake",
    description: "Classic honey cake with delicate custardv",
    price: "$4.50",
  },
  {
    type: "dessert",
    svg: "./imgs/dessert7.png",
    name: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "$5.50",
  },
  {
    type: "dessert",
    svg: "./imgs/dessert8.png",
    name: "Black forest",
    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "$6.50",
  },
];

const container = document.querySelector('.container');
const coffeeBtn = document.querySelector('#coffee');
const teaBtn = document.querySelector('#tea');
const dessertBtn = document.querySelector('#dessert');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal .close');
const containerDrink = document.querySelector(".containerDrink");
const btnReturn = document.querySelector('.arrow .collapse');

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
btnClose.addEventListener('click', () => modal.style.display = 'none');
const allArr = ['coffee', 'tea', 'dessert'];

const showRes = (params) => {
  containerDrink.innerHTML = ``;
  modal.style.display = 'none'
  const ResultFilter = arrItems.filter((el) => (params.includes(el.type) ? true : false));

  ResultFilter.forEach((el) => {
    const container = document.createElement("div");
    container.className = 'container';
    containerDrink.appendChild(container);
    container.innerHTML += `<img class="image_1" src='${el.svg}'/><div class="info"><h3>${el.name}</h3><p>${el.description}</p></div><p class="price">${el.price}</p>`;
    container.addEventListener("click", () => {
      modal.innerHTML = `<div class ="cart"><img class="image_1" src='${el.svg}'/><div class="right"><h3>${el.name}</h3><p>${el.description}</p><div class="sizeBtn">
 <p>Size</p>  <button><div>S</div>200 ml </button> <button> <div>M</div>300 ml </button>
  <button> <div>L</div>400 ml </button> </div> <div class="additivesBtn">  <p>Additives</p>
 <button> <div>1</div>Sugar </button> <button> <div>2</div>Cinnamon </button><button><div>3</div>Syrup </button>
  </div> <div class="total"><p>Total:</p><p class="price">${el.price}</p></div><div class="line"></div>
  <div class="miniInfo"> <div> <img src="/imgs/info-empty.svg" alt=""></div>
  <h5>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty
   points and enjoy your favorite coffee with up to 20% discount.</h5> </div> <button class="close">Close</button> </div> </div>`
      modal.style.display = "flex";
      const close = document.querySelector(".close");
      close.addEventListener("click", () => (modal.style.display = "none"));


      const sizeBtns = document.querySelectorAll('.sizeBtn button');
      const additivesBtns = document.querySelectorAll('.additivesBtn button');

      sizeBtns.forEach(btn => {

        btn.addEventListener('click', () => {
          sizeBtns.forEach(el => el.classList.remove('active'));
          btn.classList.add('active');
        });
      });
      additivesBtns.forEach(btn => {

        btn.addEventListener('click', () => {
          additivesBtns.forEach(el => el.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    });

  });
  

};

coffeeBtn.addEventListener('click', () => showRes('coffee'));
teaBtn.addEventListener('click', () => showRes('tea'));
dessertBtn.addEventListener('click', () => showRes('dessert'));

showRes(allArr);

