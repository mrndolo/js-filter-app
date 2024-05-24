const data = [
    {
      id: 1,
      name: "Rolex Men's Pro Diver",
      img: "./images/watch1.jpg",
      price: 150,
      cat: "Luxury",
    },
    {
      id: 11,
      name: "Classic Men's Pro Diver 2",
      img: "./images/watch2.jpg",
      price: 100,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "./images/watch3.jpg",
      price: 165,
      cat: "Luxury",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "./images/watch4.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "./images/watch5.jpg",
      price: 46,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Sportwatch ",
      img: "./images/watch6.jpg",
      price: 20,
      cat: "Casual",
    },
    {
      id: 6,
      name: "Invicta Men's Pro Diver",
      img: "./images/watch7.jpg",
      price: 74,
      cat: "Luxury",
    },
    {
      id: 7,
      name: "Invicta Men's Pro Diver 2",
      img: "./images/watch8.jpg",
      price: 94,
      cat: "Luxury",
    },
    {
      id: 8,
      name: "Timex Men's Expedition Scout ",
      img: "./images/watch9.jpg",
      price: 40,
      cat: "Luxury",
    },
    {
      id: 9,
      name: "Casio Heritage",
      img: "./images/watch10.jpg",
      price: 220,
      cat: "Casual",
    },
    {
      id: 10,
      name: "Apple Smartwatch ",
      img: "./images/watch11.jpg",
      price: 30,
      cat: "Sport",
    },
    {
      id: 14,
      name: "Classic Sportwatch ",
      img: "./images/watch12.jpg",
      price: 85,
      cat: "Sport",
    },
    {
      id: 12,
      name: "Hearty Digital Smartwatch ",
      img: "./images/watch13.jpg",
      price: 110,
      cat: "Sport",
    },
    {
      id: 13,
      name: "Garmin Venu Navigator ",
      img: "./images/watch14.jpg",
      price: 69,
      cat: "Casual",
    },
  ];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
        `
         <div class="product">
            <img src=${product.img} alt=""/>
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
        `
      ).join("");
  };

displayProducts(data);

searchInput.addEventListener("keyup", (e)=>{
  // console.log(e.target.value)
  const value = e.target.value.toLowerCase();
  // console.log(value)

  if(value){
    displayProducts(data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1))
  }else{
    displayProducts(data)
  }
})

const setCategories = ()=>{
  const allCats = data.map(item=>item.cat)
  // console.log(allCats.filter((item,i)=>{
  //   return allCats.indexOf(item)===i
  // }))
  const categories = [
    "All",
    ...allCats.filter((item,i)=>{
    return allCats.indexOf(item)===i
  })
];
  // console.log(categories);

  categoriesContainer.innerHTML = categories.map(cat=>
    `
    <span class="cat">${cat}</span>
    `
  ).join("");

categoriesContainer.addEventListener("click",(e)=>{
  // console.log(e.target.textContent)
  const selectedCat = e.target.textContent;

  selectedCat === "All"
    ? displayProducts(data)
    : displayProducts(data.filter((item) => item.cat === selectedCat))

})

}

setCategories()