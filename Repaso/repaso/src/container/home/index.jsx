import { Link } from "react-router-dom";

const HomeContainer = () => {
  return (
    <>
      <h1>Hola, estoy en la Home</h1>
      <Link to={"/list"}>Listado de productos</Link>
    </>
  );
};

export default HomeContainer;
