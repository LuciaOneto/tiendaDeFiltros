// Array de productos
const productos = [
  {
    marca: 'Nike',
    categoria: 'Senderismo',
    precio: 120,
    imagen: './assets/zapa6.jpeg'
  },
  {
    marca: 'Asis',
    categoria: 'Running',
    precio: 65,
    imagen: './assets/zapa3.jpg'
  },
  {
    marca: 'Reebook',
    categoria: 'Running',
    precio: 130,
    imagen: 'assets/zapa10.jpeg'
  },
  {
    marca: 'Asis',
    categoria: 'Running',
    precio: 120,
    imagen: './assets/zapa1.jpg'
  },
  {
    marca: 'Reebook',
    categoria: 'Senderismo',
    precio: 110,
    imagen: 'assets/zapa2.webp'
  },
  {
    marca: 'Nike',
    categoria: 'Running',
    precio: 120,
    imagen: './assets/zapa9.jpeg'
  },
  {
    marca: 'Asis',
    categoria: 'Running',
    precio: 110,
    imagen: './assets/zapa8.jpeg'
  },
  {
    marca: 'Asis',
    categoria: 'Senderismo',
    precio: 85,
    imagen: './assets/zapa7.jpeg'
  },
  {
    marca: 'Reebook',
    categoria: 'Senderismo',
    precio: 90,
    imagen: 'assets/zapa4.webp'
  },
  {
    marca: 'Nike',
    categoria: 'Senderismo',
    precio: 140,
    imagen: './assets/zapa5.jpeg'
  },
  {
    marca: 'Nike',
    categoria: 'Running',
    precio: 70,
    imagen: './assets/zapa16.jpg'
  },
  {
    marca: 'Reebook',
    categoria: 'Running',
    precio: 100,
    imagen: 'assets/zapa11.jpeg'
  },
  {
    marca: 'Reebook',
    categoria: 'Running',
    precio: 120,
    imagen: './assets/zapa15.jpg'
  },
  {
    marca: 'Asis',
    categoria: 'Running',
    precio: 60,
    imagen: './assets/zapa12.jpg'
  },
  {
    marca: 'Reebook',
    categoria: 'Running',
    precio: 100,
    imagen: 'assets/zapa14.jpg'
  },
  {
    marca: 'Nike',
    categoria: 'Running',
    precio: 125,
    imagen: 'assets/zapa13.jpg'
  }
  // Añade más productos
]

// Elementos del DOM
const modal = document.getElementById('filter-modal')
const filterToggle = document.getElementById('filter-toggle')
const closeModal = document.querySelector('.close')
const productList = document.getElementById('product-list')
const applyFiltersButton = document.getElementById('apply-filters')
const clearFiltersButton = document.getElementById('clear-filters')

// Mostrar/Ocultar el modal
filterToggle.addEventListener('click', () => {
  modal.style.display = 'flex' // Mostrar el modal
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}

// Función para mostrar los productos
function pintarProductos(productos) {
  productList.innerHTML = ''
  productos.forEach((producto) => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product-item')
    productDiv.innerHTML = `
    <img src = ${producto.imagen} >
      <h3> ${producto.marca}</h3>
      <p>${producto.categoria}</p>
      <p> ${producto.precio}€</p>
      <button> Comprar </button>
    `
    productList.appendChild(productDiv)
  })
}

// Mostrar todos los productos al cargar
pintarProductos(productos)

// Aplicar filtros
applyFiltersButton.addEventListener('click', () => {
  const selectedCategory = document.getElementById('category').value.trim()
  const maxPrice = parseFloat(document.getElementById('price').value)
  const selectedBrand = document.getElementById('brand').value.trim()
  let filteredProducts = productos

  // Filtrar por categoría
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.categoria.toLowerCase() === selectedCategory.toLowerCase()
    )
  }
  // Filtrar por marca
  if (selectedBrand) {
    filteredProducts = filteredProducts.filter(
      (product) => product.marca.toLowerCase() === selectedBrand.toLowerCase()
    )
  }
  // Filtrar por precio
  if (!isNaN(maxPrice)) {
    filteredProducts = filteredProducts.filter(
      (product) => product.precio <= maxPrice
    )
  }

  if (filteredProducts.length === 0) {
    alert(
      'No hay productos con los filtros seleccionados, mostrando productos sugeridos.'
    )
    filteredProducts = productos.sort(() => 0.5 - Math.random()).slice(0, 3)
  }

  pintarProductos(filteredProducts)
})

// Limpiar filtros
clearFiltersButton.addEventListener('click', () => {
  document.getElementById('category').value = ''
  document.getElementById('price').value = ''
  document.getElementById('brand').value = ''
  pintarProductos(productos)
})
