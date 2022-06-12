import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [ isPending, setisPending] = useState(true);
    const [ error, setError] = useState(null);



    useEffect( () => {

        const abortCont = new AbortController();

        console.log('useEffect running!');
        setTimeout(
            () => {
              fetch(url, { signal : abortCont.signal })
              .then( (res) => {
                  if(!res.ok){
                      throw Error('could not fetch the data'); 
                      
                  } 
                  return res.json()
              }
              ).then( data =>{
                  console.log(data)
                  setData(data);
                  setisPending(false);
                  setError(null);
                }).catch( err => { 
                    if(err.name === "AbortError"){
                        console.log('fetch aborted');
                    }
                    else{
                        setError(err.msg);
                        setisPending(false);
                    }
                    
                });
            }, 1000);

        return () => abortCont.abort() ;
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;