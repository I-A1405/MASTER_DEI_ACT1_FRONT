import CardCounter from './cardCounter';
import './ordersList.css';
function OrdersList({ products, column, canEdit }) {
    const settings = {
        remove:true
    };
    return (
        products.map(product => (
            <div key={product.id}  className={column}>
                <div className="container  product-list">
                    <div  className="row product-list__item mb-1">
                        <h5 className="product-list__title">{product.title}</h5>
                        <div className="col-md-4 product-list__thumbnail">
                            <img src={product.thumbnail} alt={product.title} className="img-fluid" />
                        </div>
                        <div className="col-md-8 product-list__details">

                            <p className="product-list__price">Price: ${product.price}</p>
                            <p className="product-list__quantity">Quantity: {product.quantity}</p>
                            <p className="product-list__total">Total: ${product.total.toFixed(2)}</p>
                            <p className="product-list__discount-percentage">Discount Percentage: {product.discountPercentage}%</p>
                            <p className="product-list__discounted-total">Discounted Total: ${product.discountedTotal.toFixed(2)}</p>
                        </div>
                        {canEdit &&
                            <CardCounter product={product} settings={settings} />
                        }
                    </div>
                </div>
            </div>
        ))
    );
}
export default OrdersList;