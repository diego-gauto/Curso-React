import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

const ListContainer = () => {
  const { listProducts } = useContext(CartContext);

  return (
    <>
      <h1>Hola, soy un listado de productos</h1>
      {listProducts.map((element) => {
        return (
          <div key={element.id}>
            <strong> {element.name} </strong>
            <h5>${element.price}</h5>
            <Link to={`/product/${element.id}`}>Ver producto</Link>
          </div>
        );
      })}
    </>
  );
};

export default ListContainer;
