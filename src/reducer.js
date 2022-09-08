export const initialState = {
    basket: []
};

// Selector 
//take the basket
//reduce it to the total amount
//return the total amount

export const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);


export const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {

        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // duplicate de basket and then splice it up to the id
            // make a new array without the item
            const newBasket = [...state.basket];

            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
            );

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket!`
                );
            }
            return { ...state, basket: newBasket };


        default:
            return state;


    }
};

export default reducer;
