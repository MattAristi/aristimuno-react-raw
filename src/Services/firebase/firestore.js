import {collection, doc, getDoc, getDocs, query, where} from 'firebase/firestore'

import{db} from '.'

export const getProducts= (catId) => {
            const collectionRef = !catId 
                ? collection(db, 'products')
                : query(collection(db, 'products'), where('category', '==', catId ))
                    return getDocs(collectionRef).then(response => {
                        const products = response.docs.map(doc=> {
                            const value = doc.data()
                            return{id : doc.id, ...value}   
                        })
                        return products;
                    }).catch(error=> {
                        return error
                    })
        }

export const getDetail= (prodId) =>{
        return getDoc(doc(db,'products', prodId)).then(response => {
            const values = response.data()
            const product = {id : response.id, ...values}
            return product;
        }).catch(error => {
            return error
            })
}