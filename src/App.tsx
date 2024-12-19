import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>Hello</Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
