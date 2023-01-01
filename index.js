const { createStore } = require("redux");

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function orderCake(){
    return {
        type:CAKE_ORDERED
    }
}
function cake_restock(qty = 1){
    return {
        type:CAKE_RESTOCKED,
        quantity:qty
    }
}

const initialeState = {
    numOFCake:10,
    anotherPRoperty:true
}


const reducer = (state = initialeState , action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOFCake:state.numOFCake - 1
            }
            break;
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOFCake:state.numOFCake + action.quantity
            }
            break;
    
        default:
            return state;
            break;
    }
}



const store = createStore(reducer);

const unsubscribe =  store.subscribe(() => console.log(store.getState().numOFCake))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(cake_restock(6))

unsubscribe();

store.dispatch(orderCake())