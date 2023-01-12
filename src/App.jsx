import Background from "./components/Background"
import Header from "./components/Header"
import ColorProvider from "./context/ColorContext"
function App() {

  return (
    <div className="App">
      <ColorProvider>
        <Header />
        <Background/>
      </ColorProvider>
    </div>
  )
}

export default App
