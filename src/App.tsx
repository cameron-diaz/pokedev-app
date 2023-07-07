import Background from "./components/atoms/Background"
import Footer from "./components/organisms/Footer"
import NavBar from "./components/organisms/NavBar"
import Wrapper from "./components/organisms/Wrapper"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import "./scss/index.scss"
import Search from "./components/pages/Search"
import MyList from "./components/pages/MyList"
import About from "./components/pages/About"
import Compare from "./components/pages/Compare"
import Pokemon from "./components/pages/Pokemon"

function App() {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<Pokemon />} path="/pokemon/:id"/>
            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>
          {/* <Wrapper /> */}
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App