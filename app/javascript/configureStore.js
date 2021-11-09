import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
const SET_GREETING = 'store/greeting/SET_GREETING'

const initialState = {
    greeting: ''
}

export const fetchGreeting = () => async(dispatch) => {
    await fetch('http://localhost:3000/v1/greetings.json')
    .then(res => res.json())
    .then(data =>  {
        console.log(data)
      dispatch(
          {type: SET_GREETING,
            payload: data.greeting.text})
    })
    .catch(err => console.log(err))
}

const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_GREETING:
            return {...state, greeting: action.payload}
        default:
            return state
    }
}

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk,logger))
    return store
}