 Proyecto de un E-commerce de una fabrica de componentes para bicicletas en fase de desarrollo para el curso de react en CoderHouse. Fue creado en React js.

Para crear la aplicacion ha sido instalado, un editor de codigo y Node.js 
Para trabajar en la aplicación se incluyeron las siguientes librerias:
-React para la creacion de la app.
-React Router Dom para generar las rutas de nuestra aplicacion.
-Node.Js & npm.

Por otro lado creamos un "mapa" de nuestra app creando una carpeta de componentes donde enocntraremos cada uno de nuestros elementos de la app.
Para tener un orden creamos una carpeta que contiene todos los componentes y cada componente posee una carpeta donde se encuentran, el archivo JS y el CSS respectivamente. 
-Navbar: Es la barra de navegacion donde podemos encontrar los botones que filtran la busqueda de productos y tambien está el boton que direcciona al carrito..
-ItemLisContainer : Es el contenedor que muestra todos los productos disponibles.
-ItemList: Este componente es el que desmenuza el array de objetos (producto) para poder armar cada producto con el siguiente componente 'Item'.
-Item: Es la card de cada producto que trae todos los datos de ItemList e ItemListContainer.
-ItemDetailContainer: Este es el componente que define el objeto seleccionado para ampliar detalle. 
-ItemDetail: Es el card que muestra el detalle del producto seleccionado y desde alli poder agregar el producto y la cantidad seleccionada.
-ItemCount: Contador que nos permite seleccionar la cantidad que queremos de algun producto.
-CartWidget : Este es el lugar donde se guardan los datos de cada uno de los productos y su cantidad respectivamente.
