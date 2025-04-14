import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({
    cart: [],
    total: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
    itemCount: 0,
});

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load cart from localStorage on initial render
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem("cart");
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
            setIsInitialized(true);
        } catch (error) {
            console.error("Error loading cart from localStorage:", error);
            setIsInitialized(true);
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (isInitialized) {
            try {
                localStorage.setItem("cart", JSON.stringify(cart));
                // Calculate total
                const newTotal = cart.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                );
                setTotal(newTotal);
            } catch (error) {
                console.error("Error saving cart to localStorage:", error);
            }
        }
    }, [cart, isInitialized]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if product already exists in cart
            const existingItemIndex = prevCart.findIndex(
                (item) => item.id === product.id
            );

            if (existingItemIndex >= 0) {
                // If product exists, increase quantity
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            } else {
                // If product doesn't exist, add it with quantity 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const value = {
        cart,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount: cart.reduce((sum, item) => sum + item.quantity, 0),
        isInitialized,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
