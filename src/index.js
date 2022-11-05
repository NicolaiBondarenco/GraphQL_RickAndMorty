import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Components/App/App'
import { ApolloProvider } from '@apollo/client'
import { client } from './GraphQL/ApolloPersons'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
