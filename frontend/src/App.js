import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./apollo-client"

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">Hello there</div>
    </ApolloProvider>
  );
}

export default App;
