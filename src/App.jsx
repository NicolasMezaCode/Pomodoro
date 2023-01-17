import Background from "./components/Background"
import Counter from "./components/Counter"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import ColorProvider from "./context/ColorContext"
function App() {

  return (
    <div className="App">
      <ColorProvider>
        <Header />
        <Counter/>
        <Tasks/>
        <Background/>
      </ColorProvider>
    </div>
  )
}

export default App
