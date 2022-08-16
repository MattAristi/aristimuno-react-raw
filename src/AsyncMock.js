const products = [
  {category: 'Horquillas',name: 'CLASSIC', price: 5000, colour: 'black', stock: 20, img:'/imagenesraw/horquillasimple.jpg', id: '0'},
  {category:"Horquillas", name: "RECTA",price: 6000,colour: "black",stock: 20,img: '/imagenesraw/horquillarecta.jpg',id: '1'},
  {category:"Cuadros",name: "HARSH",price: 20000,colour: "white",stock: 20,img: '/imagenesraw/harshv2raw2.jpg',id: '2'},
  {category:"Cuadros",name: "NIGTHROO",price: 23000,colour: "black",stock: 20,img: '/imagenesraw/nightrodblk.jpg',id: '3'},
  {category:"Cuadros",name: "NIGTHROO",price: 23000,colour: "red",stock: 20,img: '/imagenesraw/nightrodraw.jpg',id: '4'},
  {category:"Cuadros",name: "KLR wolf",price: 25000,colour: "black",stock: 20,img: '/imagenesraw/klrwolf.jpg',id: '5'},
  {category:"Cuadros",name: "KLR wolf",price: 25000,colour: "blue",stock: 20,img: '/imagenesraw/klrwolfblue.jpg',id: '6'},
  {category:"Portas",name: "Recta",price: 8000,colour: "black",stock: 20,img: '/imagenesraw/horquillaporta.jpg',id: '7'},
]


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 1000)
  })
}

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products[id])
    }, 1000)
  })
}

export const getProductsByCategory = (catId) =>{
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === catId))
    }, 1000)
  })
}