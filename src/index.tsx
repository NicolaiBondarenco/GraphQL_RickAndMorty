import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Components/App/App'
import { ApolloProvider } from '@apollo/client'
import { client } from './GraphQL/ApolloPersons'
import { ThemeContext } from './Context/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={client}>
    <ThemeContext>
      <App />
    </ThemeContext>
  </ApolloProvider>,
)
