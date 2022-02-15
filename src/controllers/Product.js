import useFetch from "../hooks/useFetch";

function Product(productId)
{
    const productUrl = `https://fakestoreapi.com/products/${productId}`;
    const [isLoading, data, error] = useFetch(productUrl);
   return {
        loading:isLoading,
        data:data,
        error:error
        };
}

export default Product;