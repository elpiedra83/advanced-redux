import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../store/cart-slice";

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  // const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // const newTotalQuantity = cart.totalQuantity + 1;

    // const updatedItems = cart.items.slice(); //create a copy via slice to avoid mutating the
    // const existingItem = updatedItems.find((item) => item.id === id);
    // if (existingItem) {
    //   const updateItem = { ...existingItem }; //new object + copy existing properties
    //   updateItem.quantity++;
    //   updateItem.price = updateItem.price + price;
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updateItem;
    // } else {
    //   updatedItems.push({
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title,
    //   });
    // }
    // const newCart = {
    //   items: updatedItems,
    //   totalQuantity: newTotalQuantity,
    // };
    // dispatch(cartActions.replaceCart(newCart));
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
