import { useEffect, useState} from "react";

 const Mercadolibre= () => {
        const [resApi, setResApi]= useState([])
        const [input, setInput] = useState ('')
    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=auto')
    //         .then(respons => {
    //             return respons.json()
    //         })
    //         .then(res => setResApi(res.results)
    //         )
            
    // },[])
    const handleSearch = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(respons => {
                return respons.json()
            })
            .then(res => setResApi(res.results)
            )
            
    }

    return(
        <>
            <h1>Mercadolibre</h1>
            <input value={input} onChange={(e)=> setInput(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            {resApi.map(prod => {
                return (
                    <div key={prod.id}>
                        
                        <h3>{prod.title}</h3>
                        <img src={prod.thumbnail} alt={prod.title}></img>
                    </div>
                )
            })}
        </>
    )
 }

 export default Mercadolibre