import Background from "./components/Background"
import Counter from "./components/Counter"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import ColorProvider from "./context/ColorContext"
import UserProvider from "./context/UserContext"
function App() {

  return (
    <div className="App">
      <UserProvider>
        <ColorProvider>
          <Header />
          <Counter/>
          <Tasks/>
          <Background/>
        </ColorProvider>
      </UserProvider>
    </div>
  )
}

export default App
