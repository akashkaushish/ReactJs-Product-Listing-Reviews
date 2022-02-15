import React, { useState, useEffect } from 'react'; 

function PostReview(props)
{
    //const reviewData = props.reviews;
    //const [reviews, setReviews] = useState(reviewData);
    /*
    const inputData={
            "id": new Date().getTime().toString(),
            "title":"Trying to add new review.",
            "customer": "Anonymous"
        };
        props.addReview(inputData);
    */
   const initialValues = { customerReview:"", userName:""};
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        //console.log(formValues);
   }
    const submitForm=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues)); 
        setIsSubmit(true); 
    };
    useEffect(() =>{ 
        if(Object.keys(formErrors).length === 0 && isSubmit){
            // If form submitted after validation
            
            // Code to save a review on server using API would come here

            // As we do not have API for now to save Review, so we are just adding it in the reviews locally for now.
            const inputData={
                "id": new Date().getTime().toString(),
                "title": formValues.customerReview,
                "customer": formValues.userName
            }
           props.addReview(inputData);
           setFormValues(initialValues);
           setIsSubmit(true); 
        }
    }, [formErrors]);
    const validate = (values) =>{
        const errors = {};
        if(!values.customerReview){
            errors.customerReview = "Review is a required field.";
        }
        if(!values.userName){
            errors.userName = "User name is a required field.";
        }
        return errors;
    };
    return (  <>
                   
                    <section className="add_review">
                        <h2>Write a Review</h2>
                        <form onSubmit={submitForm}>   
                        <div className="mb-3">
                            <label className="form-label">Your Review</label>
                            <textarea 
                                name="customerReview" 
                                value={formValues.customerReview} 
                                onChange={handleChange}
                                className="form-control" rows="3" />
                        </div>
                        { formErrors.customerReview && <p class="alert alert-danger">{formErrors.customerReview}</p> }
                        
                        <div className="mb-3">
                            <label className="form-label">Your Name</label>
                            <input 
                                type="text" 
                                name="userName" 
                                value={formValues.userName} 
                                onChange={handleChange}
                                className="form-control" placeholder="Your Name" />
                        </div>
                        { formErrors.userName && <p class="alert alert-danger">{formErrors.userName}</p> }
                        
                        <div className="mb-3">
                            <button type="submit" className="btn btn-dark">Post Your Review Now</button>
                        </div>
                        </form>
                    </section>
            </>
        );
}
    
export default PostReview;