import '../Checkout/Checkout.css';

import {Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch} from 'firebase/firestore';
import { useContext, useState } from 'react'

import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import {NotificationContext} from '../compontentsExported'
import { db } from '../../Services/firebase/index';

const Checkout = () => {
    const [name, setName]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')
    const {setNotification}=  useContext(NotificationContext)
    const {cart, getTotal,clearCart, getTotalQ} = useContext(CartContext)
    const [plural, setPlural]= useState('')
    const total = getTotal()
    const totalQ = getTotalQ()
    
    
    
    const createOrder = async() => {
        try {
        const objectOrder = {
            buyer: {
                name:name,
                phone:phone,
                email:email
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        }
        
        
        const ids = cart.map(prod => prod.id)
        const productsRef= collection(db, 'products')
        const productsAddsFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
        
        const {docs} = productsAddsFirestore
        const outOfStock = []
        const batch = writeBatch(db)
    
        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockFirestore = dataDoc.stock

            const prodAdd = cart.find(prod => prod.id ===doc.id)
            const prodQuant = prodAdd?.quantity

            if (stockFirestore>= prodQuant) {
                console.log('Hay stock');
                batch.update(doc.ref, {stock: stockFirestore-prodQuant})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc});
                    console.log('hay '+dataDoc.stock+' '+dataDoc.category+' '+dataDoc.name+' en stock');
                }
            })
        if (outOfStock.length === 0) {
            const orderRef = collection(db, 'orders')
            const orderAdd = await addDoc(orderRef, objectOrder)
            batch.commit()
            console.log(orderAdd.id);
            setNotification('succes', `Revisa tu correo para realizar el pago. Has reservado ${totalQ} producto${(total>1)? 's':''} por un total de $${total}`,6)
            clearCart()
            }
    
        }catch(error){
            console.log(error);
        }finally {
            console.log('ejecucion de create order realizada');
        }
    }
    return (
        <form className='form-checkout'>
            <h1>Orden de compra</h1>
            <div className='label-input'>
                <label htmlFor="name" className="form">Nombre</label>
                <input type="text"  className="form" required="text" value={name} onInput={(evt) => setName(evt.target.value)} />
            </div>
            <div>
                <label htmlFor="phone" className="form">Telefono</label>
                <input type="text"  className="form" required="text" value={phone} onInput={(evt) => setPhone(evt.target.value)} />
            </div>
            <div>
                <label htmlFor="email" className="form">Email</label>
                <input type="text"  className="form" required="text" value={email} onInput={(evt) => setEmail(evt.target.value)} />
            </div>

            <button className="btn-order" onClick={() => createOrder()} ><Link className="link-order" to="/">Generar Orden</Link></button>
            <button className="btn-cancel-order" onClick={() => clearCart()} ><Link className="link-order" to="/">Cancelar Orden</Link></button>
        </form>
    )
}


export default Checkout