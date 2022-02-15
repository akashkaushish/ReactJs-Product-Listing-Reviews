import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductData = async (url)=>{
      await fetch(url)
        .then((res) => { 
          if(!res.ok){
              throw Error('Could not fetch data for this resource.');
          }
          return  res.json()
          })
        .then((data) =>{ 
              setIsLoading(false)
              setError(null)
              setData(data)
          })
        .catch(err=>{ 
              setIsLoading(false)
              setData(null)
              setError(err.message)
        });
  }
  useEffect(() => {
    getProductData(url);
  }, [url]);

  return [isLoading, data, error];
};


export default useFetch;