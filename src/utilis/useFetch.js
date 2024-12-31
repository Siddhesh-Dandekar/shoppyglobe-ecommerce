import { useState } from "react";
import { useEffect } from "react";

//Custom useFetch hook
function useFetch(url){
    const [data, setData] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const Fetchdata = async () => {
            try{
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false);
            }
        }
        Fetchdata();
    },[])
    
    return{data , error, loading};
}
export default useFetch;