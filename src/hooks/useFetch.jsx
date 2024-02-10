import { useState, useEffect } from "react";



const useFetch = (url) => {

    const [data, setdata] = useState(null)
    const [isPending, setisPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const controller = new AbortController()

        const fetchData = async () => {
            setisPending(true)
        

        try{
            const res = await fetch(url,{signal:controller.signal})
            if(!res.ok){
                throw new Error(res.statusText)
            }

            const data = await res.json()

            setisPending(false)
            setdata(data)
            setError(false)
        }catch(err){
            if(err.name === "AbortError"){
                console.log("the fetch was aborted")
            }else{
                setisPending(false)
                setError('could not fetch data')
            }
        }
    }

      fetchData()

      return ()=>{
        controller.abort()
      }
    
},[url])

  return {data,isPending,error}
}

export default useFetch