import useFetch from "../hooks/useFetch";

function Products()
{
    const [isLoading, data, error] = useFetch("https://fakestoreapi.com/products");
   return {
        loading:isLoading,
        data:data,
        error:error
        };
}

export default Products;