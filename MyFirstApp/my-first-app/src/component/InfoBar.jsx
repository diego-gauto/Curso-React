import { Link } from "react-router-dom";

const InfoBarComponent = ({ carrito, handleKeyUp }) => {
  return (
    <div className="bg-white py-4">
      <div>
        <input
          type="Text"
          onInput={handleKeyUp}
          placeholder="Buscar por nombre"
        />
      </div>
      <Link to={"/"}> Ir al Home</Link>
      <br />
      Elementos del carrito: {carrito.length}
    </div>
  );
};

export default InfoBarComponent;
