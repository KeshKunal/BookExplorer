import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"
import BookDetails from "./Components/BookDetails";
import SearchResults from "./pages/SearchResults";

function App(){
  return (
    <BrowserRouter>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}
export default App;