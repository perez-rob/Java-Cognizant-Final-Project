export const isInCart = (product, cartItems) => {
    return cartItems.find(item => item.shoeId === product.shoeId);
}