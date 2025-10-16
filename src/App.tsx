import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import BookDetails from "./Components/BookDetails";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;