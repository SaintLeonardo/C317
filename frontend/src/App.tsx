import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import { globalStyles } from "./styles/global";

function App() {

  globalStyles();
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App