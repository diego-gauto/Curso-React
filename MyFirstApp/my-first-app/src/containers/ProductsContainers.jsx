import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import CardComponent from "../component/cardComponent";
import InfoBarComponent from "../component/InfoBar";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
  const { products, carrito, setCarrito, fetchData, setProducts } =
    useContext(EcommerceContext);
  const { item } = useParams();
  // const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    if (item === undefined) fetchData("notebook");
    else fetchData(item);
    return () => {};
  }, [item]);

  const agregarAlCarrito = (event, product) => {
    carrito.push(product);
    setCarrito([...carrito]);
    //console.log(carrito);
  };

  const handleKeyUp = (e) => {
    // setSearchTerm(e.target.value);
    const aux = products.filter((element) => {
      if (element.title.toUpperCase().match(e.target.value.toUpperCase()))
        return true;
      return false;
    });
    console.log(aux);
    setProducts(aux);
  };

  return (
    <div className="container bg-warning">
      <InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp} />

      <div className="row px-2 py-2 ">
        {products.map((element) => {
          return (
            <CardComponent
              key={element.id}
              product={element}
              agregarAlCarrito={agregarAlCarrito}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
