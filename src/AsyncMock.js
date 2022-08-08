const products = [
  {category: 'Horquilla',name: 'CLASSIC', price: 5000, colour: 'black', stock: 20, img:'imagenesraw/horquillasimple.jpg', id: '1'},
  {category:"Horquilla", name: "RECTA",price: 6000,colour: "black",stock: 20,img: 'imagenesraw/horquillarecta.jpg',id: '2'},
  {category:"Cuadro",name: "HARSH",price: 20000,colour: "white",stock: 20,img: 'imagenesraw/harshv2raw2.jpg',id: '3'},
  {category:"Cuadro",name: "NIGTHROO",price: 23000,colour: "black",stock: 20,img: 'imagenesraw/nightrodblk.jpg',id: '4'},
  {category:"Cuadro",name: "NIGTHROO",price: 23000,colour: "red",stock: 20,img: 'imagenesraw/nightrodraw.jpg',id: '5'},
  {category:"Cuadro",name: "KLR wolf",price: 25000,colour: "black",stock: 20,img: 'imagenesraw/klrwolf.jpg',id: '6'},
  {category:"Cuadro",name: "KLR wolf",price: 25000,colour: "blue",stock: 20,img: 'imagenesraw/klrwolfblue.jpg',id: '7'},
  {category:"Porta",name: "Recta",price: 8000,colour: "black",stock: 20,img: 'imagenesraw/horquillaporta.jpg',id: '8'},
]


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

