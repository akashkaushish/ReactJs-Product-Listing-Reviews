import React from 'react'; 
import ProductCard from '../components/ProductCard'; 



class Home extends React.Component {
    render() {
            return (
                    <>
                        <main id="main">
                            <section className="product_grid">
                                <div className="container">
                                    <div className="row">
                                        <ProductCard />
                                       
                                    </div>
                                </div>
                            </section>
                        </main>
                    </>
            )
        }
    }
    
export default Home;