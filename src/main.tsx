import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './Components/Header.tsx'
import Search from './Components/Search.tsx'
import Categories from './Components/Categories.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Search />
    <Categories />
  </StrictMode>,
)
