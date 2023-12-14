import React from "react"
import ReactDom from "react-dom/client"
import { Provider } from "react-redux"

import App from "./app"
import store from "./store/store"


const root = ReactDom.createRoot(document.getElementById('assets'))

root.render(

    <Provider store={store}>
        <App />
  </Provider>
)