import ProductItem from './ProductItem';
import classes from './Products.module.css';

// itemId: newItem.id,
// price: newItem.price,
// quantity: newItem.quantity,
// totalPrice: newItem.price * newItem.quantity,
// name: newItem.title,

const DUMMY_PRODUCTS = [
  {
    id : 'p1',
    price : 6,
    title : "My first book",
    description : 'This is a first product - amazing!',
    quantity : 1,
  },
  {
    id : 'p2',
    price : 7,
    title : "My second book",
    description : 'This is a second product - amazing!',
    quantity : 1,
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
          <ProductItem
          title={product.title}
          price={product.price}
          description={product.description}
          key = {product.id}
          id = {product.id}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
