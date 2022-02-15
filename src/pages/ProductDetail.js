import React from 'react'; //, { useState }
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Product from "../controllers/Product";
import ProductReviews from "../components/ProductReviews";

function ProductDetail(id)
{  
    const { productId } = useParams(); 
    const {loading, data, error} = Product(productId);
    //const reviews= [];
   const reviews= [
                        {
                            "id":1,
                            "title":"Nice colour, fits well and very well made.Typical adds product. Love the color and the fit! I’m 5’7 and am a bit chubby so I ordered a large. The large fit me perfectly.",
                            "customer": "Aarav"
                        },
                        {
                            "id":2,
                            "title":"Fabric is soft and the fit is just right. I wish people who complained this is boxy had taken a good look at the product pictures here on Amazon because even on the model you can tell the cut is both boxy and a little short.",
                            "customer":"Shweta"
                        }
                    ];
            
    return (
                <>
                    <main id="main">
                        <section className="product_detail">
                        { loading && <div className="text-center"><div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div></div>
                        }
                        { error && <div className="alert alert-danger">{ error }</div>}
                        { data && 
                         <div className="container">
                            <div className="w-100 text-end mb-2"><Link to="/"><button type="button" className="btn btn-secondary px-4">Back</button></Link> </div>
                            
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <img src={data.image} className="img-fluid" alt="" />
                                </div>
                                
                                <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                                    <h2>{ data.title }</h2>
                                    <p className="price">${ data.price }</p>
                                    <div className="product_description">
                                        <h4>SPECIFICATIONS</h4>
                                        <ul>
                                        <li>{ data.category }</li>
                                        <li>{ data.description }</li>
                                        
                                        </ul>
                                    </div>
                                    <button type="button" className="btn btn-dark px-5">ADD TO CART</button>
                                </div>
                            </div>
                            <ProductReviews reviews={reviews} />   
                            
                            
                                
                        </div>
                    }
                        </section>
                    </main>
                    
                </>
            )
    }
    
export default ProductDetail;