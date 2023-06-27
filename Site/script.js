// Array para armazenar os itens do carrinho
let cartItems = [];

// Função para adicionar um item ao carrinho
function addToCart(productId) {
    // Simulando a busca do produto pelo ID
    let product = getProductById(productId);
    
    // Verificando se o produto já está no carrinho
    let existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
        // Se o produto já estiver no carrinho, incrementa a quantidade
        existingItem.quantity++;
    } else {
        // Se o produto ainda não estiver no carrinho, adiciona como um novo item
        cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    // Atualiza o carrinho na página
    updateCart();
}

// Função para buscar um produto pelo ID (simulação)
function getProductById(productId) {
    // Simulação de busca do produto em um banco de dados
    // Aqui você pode implementar a lógica para buscar o produto real
    // Este é apenas um exemplo simplificado
    switch (productId) {
        case 1:
            return { id: 1, name: 'Produto 1', price: 99.99 };
        case 2:
            return { id: 2, name: 'Produto 2', price: 49.99 };
        case 3:
            return { id: 3, name: 'Produto 3', price: 79.99 };
        default:
            return null;
    }
}

// Função para atualizar o carrinho na página
function updateCart() {
    let cartItemsContainer = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');
    
    // Limpa os itens do carrinho antes de atualizar
    cartItemsContainer.innerHTML = '';
    
    let totalPrice = 0;
    
    // Itera sobre os itens do carrinho e os exibe na página
    cartItems.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - Quantidade: ${item.quantity}`;
        cartItemsContainer.appendChild(li);
        
        totalPrice += item.price * item.quantity;
    });
    
    totalPriceElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
}
