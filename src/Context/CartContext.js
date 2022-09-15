import { createContext, useState } from "react"

export const CartContext = createContext()

export const CContextProvider = ({children})=>{
    const [cart, setCart]= useState([])
    const addItem = (addProd) => {
        if (!isInCart(addProd.id)){
        setCart([...cart, addProd])
        } else {
            const cartUpdated = cart.map(prod => {
                if (prod.id===addProd.id){
                    const ProductUpdataed = {
                        ...prod,
                        quantity : addProd.quantity
                    }
                    return ProductUpdataed
                } else{
                    return prod
                }
            })
            setCart(cartUpdated)
        }
    }

        const prevQuantity = (id) => {
            const product = cart.find(prod => prod.id === id)
            if (product){
                return product.quantity
            } else {
                return 0
            }
            
        }
        const getTotal = () => cart.reduce((total, prod) => (total += prod.quantity * prod.price), 0);

        const getTotalQ = () => cart.reduce((total, prod) => (total += prod.quantity), 0);

        const isInCart = (id) => {
            return cart.some(prod => prod.id === id)
        }
        const removeItem = (id) => {
            const itemLess = cart.filter(prod => prod.id !== id)
            setCart(itemLess)
        }
        const clearCart = () => {
            setCart([])
        }
        const getQuantityWidget = ()=> {
            let qWidget=0
            cart.forEach( prod=> {
                qWidget += prod.quantity
            })
            return qWidget
        }

    return (
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clearCart, getQuantityWidget, prevQuantity, getTotal, getTotalQ}}>
            {children}
        </CartContext.Provider> 
    )
}





