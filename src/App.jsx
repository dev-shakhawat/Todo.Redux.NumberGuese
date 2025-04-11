import { BrowserRouter, Routes, Route } from "react-router";



// components
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Todo } from "./pages/Todo";
import { NumberGuess } from "./pages/NumberGuess";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/numberguess" element={<NumberGuess/>} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App
