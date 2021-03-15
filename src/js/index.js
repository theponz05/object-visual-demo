import {DOMSelectors} from "./Dom";
import {menu, inStockItems, vegetarianOptions} from "./Menu";

const init = function(){
    menu.forEach((item) =>
    DOMSelectors.displayContainer.insertAdjacentHTML("beforeend", `<ul class="item-list">
    <li class="item-name item-value">${item.name}</li>
    <li class="item-price item-value">${item.price}</li>
    <li class="item-vegetarian item-value">${item.vegetarian}</li>
    <li class="item-image">
      <img
        class="item-image"
        src="${item.img}"
        alt="${item.name}"
      />
    </li>
    <li class="item-in-stock item-value">In Stock</li>
  </ul>`)
    )
}
DOMSelectors.vegetarianButton.addEventListener("click", function(e){
    DOMSelectors.displayContainer.innerHTML = "";
    vegetarianOptions.forEach((item) => {
        DOMSelectors.displayContainer.insertAdjacentHTML("beforeend", `<ul class="item-list">
    <li class="item-name item-value">${item.name}</li>
    <li class="item-price item-value">${item.price}</li>
    <li class="item-vegetarian item-value">${item.vegetarian}</li>
    <li class="item-image">
      <img
        class="item-image"
        src="${item.img}"
        alt="${item.name}"
      />
    </li>
    <li class="item-in-stock item-value">In Stock</li>
  </ul>`)
    });
    
});
DOMSelectors.inStockButton.addEventListener("click", function (e) {
    DOMSelectors.displayContainer.innerHTML = "";
    inStockItems.forEach((item) => {
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<ul class="item-list">
      <li class="item-name item-value">${item.name}</li>
      <li class="item-price item-value"> $${item.price}</li>
      <li class="item-vegetarian item-value">Vegetarian: ${item.vegetarian}</li>
      <li class="item-image">
        <img
          class="item-image"
          src="${item.img}"
          alt=""
        />
      </li>
      <li class="item-in-stock item-value">In Stock: ${item.inStock}</li>
    </ul>`
      );
    });
  });
DOMSelectors.resetButton.addEventListener("click", function (e) {
    DOMSelectors.displayContainer.innerHTML = "";
    console.log("clear content works");
  });
DOMSelectors.fullMenuButton.addEventListener("click", function (e) {
    DOMSelectors.displayContainer.innerHTML = "";
    menu.forEach((item) => {
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<ul class="item-list">
      <li class="item-name item-value">${item.name}</li>
      <li class="item-price item-value"> $${item.price}</li>
      <li class="item-vegetarian item-value">Vegetarian: ${item.vegetarian}</li>
      <li class="item-image">
        <img
          class="item-image"
          src="${item.img}"
          alt=""
        />
      </li>
      <li class="item-in-stock item-value">In Stock: ${item.inStock}</li>
    </ul>`
      );
    });
  });
init();
const vegetarianOptions = menu.filter((item) => item.vegetarian === true);
const inStockOptions = menu.filter((item) => item.vegetarian === true);