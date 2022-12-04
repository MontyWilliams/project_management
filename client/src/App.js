import Header from './components/Header.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// Create client and pass it the uri to our graphql interface
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header/>
        <div className="container">
          <h1>Whatup tho</h1>
        </div>
        </ApolloProvider>
    </>
  );
}

export default App;
