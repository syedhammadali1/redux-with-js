const { createStore, bindActionCreators, combineReducers } = require("redux");

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake(){
    return {
        type:CAKE_ORDERED
    }
}
function restockCake(qty = 1){
    return {
        type:CAKE_RESTOCKED,
        payload:qty
    }
}
function orderIcecream(){
    return {
        type:ICECREAM_ORDERED
    }
}
function restockIcecream(qty = 1){
    return {
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}

const cakeInitialeState = {
    numOFCake:10,
    anotherPRoperty:true
}
const icecreamInitialeState = {
    numOFIcecream:30,
    anotherPRoperty:true
}


const cakeReducer = (state = cakeInitialeState , action) => {
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
                numOFCake:state.numOFCake + action.payload
            }
            break;
    
        default:
            return state;
            break;
    }
}
const icecreamReducer = (state = icecreamInitialeState , action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOFIcecream:state.numOFIcecream - 1
            }
            break;
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOFIcecream:state.numOFIcecream + action.payload
            }
            break;
    
        default:
            return state;
            break;
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})

const store = createStore(rootReducer);

const unsubscribe =  store.subscribe(() => console.log(store.getState()))

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(6))

const action =  bindActionCreators({orderCake,restockCake,orderIcecream,restockIcecream},store.dispatch);

action.orderCake()
action.restockCake(10)
action.orderIcecream()
action.restockIcecream(10)

unsubscribe();

store.dispatch(orderCake())