const CardComponent = ({ product, agregarAlCarrito }) => {
  return (
    <div className="card col-4">
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h1 className="card-title">
          {product.title} - <b>$ {product.price}</b>
        </h1>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            agregarAlCarrito(event, product);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
