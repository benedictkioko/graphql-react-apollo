import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo-client";
import { Task } from "./Task";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Task />
      </div>
    </ApolloProvider>
  );
}

export default App;
