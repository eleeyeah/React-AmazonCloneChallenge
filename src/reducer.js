export const initialState = {
    basket: [],

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        /* case REMOVE_FROM_BASKET:
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
    } */
    }
};

export default reducer;
