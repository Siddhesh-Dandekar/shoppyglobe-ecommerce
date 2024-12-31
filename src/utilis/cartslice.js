import { createSlice, current} from "@reduxjs/toolkit";

const cart = createSlice({
    name : "cart",
    initialState: {
        items: []
    },
    reducers:{
        addItem:(state, action) => {
            let item = state.items.find(item => item.productid == action.payload.productid);
            if(!item){
                state.items.push(action.payload)
            }
        },
        increaseQuantity:(state, action) => {
            let item = state.items.find((item) => item.productid == action.payload);
            item.productquantity ++;
            let amount = item.productprice * item.productquantity
            item.total = (amount - (amount * item.productdiscount/100));
        },
        decreaseQuantity:(state, action)=>{
            let item = state.items.find(item => item.productid == action.payload);
            item.productquantity--;
            let amount = item.productprice * item.productquantity
            item.total = (amount - (amount * item.productdiscount/100));
        },
        removeitem:(state, action)=>{
            let item = state.items.filter((item) => item.productid !== action.payload);
            state.items = item;
        },
        clearCart:(state, action)=>{
            state.items = []
        }
    }
})

export default cart.reducer;

export const {addItem, increaseQuantity, decreaseQuantity, removeitem , clearCart} = cart.actions;