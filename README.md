🛒 Cangsters - E-commerce de Ropa
Proyecto final desarrollado en React.js para el curso de ReactJS de Coderhouse.

🚀 Descripción
Cangsters es un e-commerce de ropa masculina que permite:

-Visualizar un catálogo de productos.

-Ver el detalle de cada producto.

-Agregar productos al carrito.

-Modificar cantidades dentro del carrito.

-Finalizar la compra llenando un formulario (nombre, email y teléfono).

-Registrar la compra en Firestore.

📦 Funcionalidades
-Navbar: con navegación de categorías y acceso al carrito.

-Catálogo de productos: carga dinámica desde Firestore.

-Detalle de producto: vista individual con selector de cantidad.

-Carrito de compras: ver productos añadidos, cantidades y precios totales.

-Checkout: formulario para completar la compra y envío de orden a Firestore.

-Actualización en tiempo real: el ícono del carrito muestra la cantidad total de productos agregados.

-Routing: navegación sin recarga de página usando React Router DOM.

⚙️ Tecnologías Utilizadas
React.js

-React Router DOM

-Firebase Firestore

-Vite

-JavaScript

📂 Estructura de Componentes
NavBar

-CartWidget

-ItemListContainer

-ItemList

-Item

-ItemDetailContainer

-ItemDetail

-ItemQuantitySelector

-AddItemButton

-Cart

-Checkout

-Brief

🔥 Instalación y uso
Clona el repositorio:

bash
git clone https://github.com/tuusuario/tu-repo.git
Instala las dependencias:

bash
npm install
Corre el proyecto en modo desarrollo:

bash
npm run dev
Asegúrate de tener configurado Firebase para la conexión a Firestore.

📜 Notas
El proyecto está conectado a Firestore para productos y órdenes.

El logo del carrito incrementa en tiempo real conforme se agregan productos.

