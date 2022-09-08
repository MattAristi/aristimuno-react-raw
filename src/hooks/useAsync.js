import { useEffect, useState } from "react"
export const useAsync = (asyncFn, dep=[])=> {
    const [data, setData]=useState()
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState()

    useEffect(()=> {
        setLoading(true)

        asyncFn().then(response=>{
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally (() =>{
            setLoading(false)
        })
    },dep)
    return {
        data,
        loading,
        error
    }

}
