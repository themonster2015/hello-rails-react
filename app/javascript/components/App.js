import React from "react"
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import store from "../configureStore";
import Greeting from "./Greeting";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store()}>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={('Home')} />
      <Route  path='/hello' element={<Greeting /> } />

    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

