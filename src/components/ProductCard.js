import React from 'react'; 
import { Link } from 'react-router-dom';
import Products from "../controllers/Products";

function ProductCard()
{
    const {loading, data, error} = Products();
   
    return (
        <>
           { loading && <div className="text-center"><div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div></div>
            }
            { error && <div className="alert alert-danger">{ error }</div>}
            { data && data.map((item) => { //console.log(item);
            return <div className="col-md-6 col-lg-4 col-xl-3 d-md-flex align-items-md-stretch">
                <Link exact to={`/product/${item.id}`}>
                    <div className="card">
                        <div className="product_img">
                            <img src={ item.image } className="card-img-top" alt={ item.title } />
                        </div>
                        <div className="card-body">
                            <h4 className="product_card_title">{ item.title }</h4>
                            <p className="product_card_category">{ item.category }</p>
                            <p className="product_card_price">${ item.price }</p>
                        </div>
                    </div>
                </Link>
            </div>
        })}
        </>
    );
}

export default ProductCard;