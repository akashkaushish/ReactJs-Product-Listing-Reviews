import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound()
{
    return (
    <>
    	<Header />
      <main id="main">
        <section class="product_grid">
          <div class="container">
            <div class="row">
    	        <h2>Page Not Found</h2>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </>
    );
}

export default NotFound;