import Header from './components/Header.jsx';
import Clients from './components/Clients.jsx';
import Projects from './components/Projects.jsx';
import ClientModal from './components/ClientModal.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
});

// Create client and pass it the uri to our graphql interface
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header/>
        <div className="container">
          <ClientModal />
          <Projects />
          <Clients />
        </div>
        </ApolloProvider>
    </>
  );
}

export default App;
