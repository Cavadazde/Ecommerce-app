import { createContext } from "react";
import {products} from "..assets/assets"

export const ShopContex =createContext();

const ShopContexProvider=()=>{
    const value={
       products
    }
    return(
        <ShopContex.Provider value={value}>
            {props.children}
        </ShopContex.Provider>

    )
}

export default ShopContexProvider