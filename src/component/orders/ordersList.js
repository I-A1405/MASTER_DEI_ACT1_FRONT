import './ordersList.css';
function OrdersList({products,column}) {
    return (
        products.map(product => (
            <div className={column}>
            <div className="container  product-list">
            <div key={product.id} className="row product-list__item mb-1">
            <h5 className="product-list__title">{product.title}</h5>
                <div className="col-md-4 product-list__thumbnail">
                    <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-8 product-list__details">
                    
                    <p className="product-list__price">Price: ${product.price}</p>
                    <p className="product-list__quantity">Quantity: {product.quantity}</p>
                    <p className="product-list__total">Total: ${product.total}</p>
                    <p className="product-list__discount-percentage">Discount Percentage: {product.discountPercentage}%</p>
                    <p className="product-list__discounted-total">Discounted Total: ${product.discountedTotal}</p>
                </div>
            </div>
            </div>
            </div>
        ))
    );
}
export default OrdersList;