import { BrowserRouter } from "react-router-dom"
import CenterTarefas from "./components/CenterTarefas/CenterTarefas"
import  './index.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <CenterTarefas></CenterTarefas>
      </BrowserRouter>
    </>
  )
}
export default App
