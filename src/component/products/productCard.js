function ProductCard({product }) {
    return ( <div className="col-md-4 col-lg-3 mb-4">
        <div className="card product-card">
          <img src={product.thumbnail} className="card-img-top product-card__image" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Category: {product.category}</p>
            <p className="card-text">Brand: {product.brand}</p>
            <p className="card-text">Price: ${product.price}</p>
          </div>
        </div>
      </div> );
}

export default ProductCard;