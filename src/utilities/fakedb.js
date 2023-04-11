// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("apply-job", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("apply-job", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = JSON.parse(localStorage.getItem("apply-job"));
  if (storedCart) {
    shoppingCart = storedCart;
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("apply-job");
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
