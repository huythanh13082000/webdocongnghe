export const addNewCart = (params) => {
    return {
        type: 'ADD_TO_CART',
        payload: params,
    }
}