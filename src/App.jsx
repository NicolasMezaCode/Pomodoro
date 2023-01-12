import Header from "./components/Header"
import ColorProvider from "./context/ColorContext"
function App() {

  return (
    <div className="App">
      <ColorProvider>
        <Header />
      </ColorProvider>
    </div>
  )
}

export default App
