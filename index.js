const CAKE_ORDERED = 'CAKE_ORDERED';

function orderCake(){
    return {
        type:CAKE_ORDERED
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
    
        default:
            return state;
            break;
    }
}