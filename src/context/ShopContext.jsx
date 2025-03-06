import { createContext } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [user, setUser] = useState(null);  // User state for storing user data
    const navigate = useNavigate();

    const logOut = () => {
        setUser(null);  // Clear user data on logout
        setCartItems({});  // Optionally, you can clear the cart
        toast.success("You have logged out successfully.");
        navigate('/');  // Redirect to homepage after logging out
    }

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Selected Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find(product => product._id === items);
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            }
        }
        return totalAmount;
    };

    const value = {
        products, currency, delivery_fee, search,
        setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantity,
        getCartAmount, navigate, user, setUser, logOut  // Added user state and logOut function
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
