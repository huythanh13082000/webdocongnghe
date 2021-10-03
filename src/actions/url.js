const initialState = "";
const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'URL_UPDATE': {
            return state
            
        }
        
        default:
            return state;
    }
}
export default productReducer;