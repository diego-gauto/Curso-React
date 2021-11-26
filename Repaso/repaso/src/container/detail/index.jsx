import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../context/cart";

const DetailContainer = () => {
  const { id } = useParams();
  const { listProducts } = useContext(CartContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let result = listProducts.filter((element) => element.id === Number(id));
    setProduct(result[0]);
  }, []);

  return (
    <>
      <h1> {product.name}</h1>
      <h2>No hay descripcion</h2>
      <button>$ {product.price}</button>
    </>
  );
};

export default DetailContainer;
