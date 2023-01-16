import Background from "./components/Background"
import Counter from "./components/Counter"
import Header from "./components/Header"
import ColorProvider from "./context/ColorContext"
function App() {

  return (
    <div className="App">
      <ColorProvider>
        <Header />
        <Counter/>
        <Background/>
      </ColorProvider>
    </div>
  )
}

export default App
