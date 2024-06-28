import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(  //id가 root인 element를 root로 해서 react 컴포넌트를 render 하겠다는 뜻
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
