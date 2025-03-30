import './assets/styles/global.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import MenuBar from "./components/MenuBar/MenuBar.tsx";
import Dashboard from "./pages/Dashboard.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MenuBar/>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)
