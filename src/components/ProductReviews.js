import React, { useState } from 'react'; 
import PostReview from "../components/PostReview";

function ProductReviews(props)
{
    const reviewData = props.reviews;
    const [reviews, setReviews] = useState(reviewData);

    const addReview= function(review) {
        setReviews([...reviews, review]);
      }
    return (  <>
                   <section className="review_section">
                        <h2>REVIEWS</h2>
                        <div className="row">
                        {reviews && reviews.map((review)=>{ 
                            return <article className="col-md-6 col-sm-12 col-xs-12 review" key={review.id}>
                                <div className="review_text">{review.title}</div>
                                <h4>{review.customer}</h4>
                            </article>
                        })}
                        
                        </div>
                    </section>

                    <PostReview addReview={addReview} />
            </>
        );
}
    
export default ProductReviews;