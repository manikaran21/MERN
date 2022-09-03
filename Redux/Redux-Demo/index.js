const redux = require('redux') ;
const createStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers ;
const reduxLogger = require('redux-logger') ;
const applyMiddleware = redux.applyMiddleware ;
const logger = reduxLogger.createLogger() ;

const BUY_CAKE = 'BUY_CAKE' ;
const BUY_ICECREAM ="BUY_ICECREAM" ;

function buyCake(){
    return {
        type:BUY_CAKE ,
        info:"First redux action"
    }
}

function buyIceCream(){
    return {
        type:BUY_ICECREAM ,
        info:"First redux action"
    }
}

// (priviousState , action) => newState

// const initialState = {
//     numOfCakes:10 , 
//     numOfIceCreams:20
// }
const initialCakeState = {
    numOfCakes:10 
}
const initialIceCreamState ={
    numOfIceCreams:20
}


const cakeReducer = (state=initialCakeState,action) => {
      switch(action.type){
        case BUY_CAKE: return { // first create copy of state object then update
            ...state , numOfCakes :state.numOfCakes -1 
               }
        
        default: return state ;

      }
}
const iceCreamReducer = (state=initialIceCreamState,action) => {
    switch(action.type){
     
      case BUY_ICECREAM: return { // first create copy of state object then update
          ...state , numOfIceCreams :state.numOfIceCreams -1 
           }
      default: return state ;

    }
}

const rootReducer = combineReducers({
    cake : cakeReducer ,
    iceCream : iceCreamReducer
}) ;
const store = createStore(rootReducer,applyMiddleware(logger)) ;
//console.log('initial state  : '  , store.getState()) ;
// setup the listner for the store before dispatch
const unsubscribe = store.subscribe(() => {}) ;
store.dispatch(buyCake()) ;
store.dispatch(buyCake()) ;
store.dispatch(buyCake()) ;
store.dispatch(buyIceCream()) ;
store.dispatch(buyIceCream()) ;
unsubscribe() ;

// Middleware : Is the suggested way to extend Redux with custom functionality
