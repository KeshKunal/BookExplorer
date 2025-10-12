import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"

function App(){
  return (
    <BrowserRouter>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}
export default App;