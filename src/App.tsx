import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>Hello</Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
