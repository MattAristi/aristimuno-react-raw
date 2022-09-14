

export const createAdaptedProductFromFiresttore = (doc) => {
    const data= doc.data()

    const productAdapted ={
        id: doc.id,
        category: data.category,
        name: data.name,
        price: data.price,
        color: data.color,
        stock: data.stock,
        img: data.img

    }
    return productAdapted
}