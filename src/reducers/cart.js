
try {
    if (JSON.parse(localStorage.getItem('cart'))) {
        var initialState = {
            listCart: JSON.parse(localStorage.getItem('cart'))
        }
    }
    else {
        var initialState = {
            listCart: []
        }
    }
  } catch (e) {
    
}


const cartReducer = (state=initialState,action) =>{
    switch (action.type) {
        case 'ADD_TO_CART': {
            
            const newList = [...state.listCart];
            
            newList.push(action.payload);
            return {
                ...state,
                listCart:newList
            }
        }
        default:
            return state;
  }
}

export default cartReducer;