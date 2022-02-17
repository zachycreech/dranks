import './App.css'
import { NavigationBar } from './components/NavBar/NavigationBar'
import { SearchBar } from './components/SearchBar/SearchBar'

function App() {
  return (
    <div className="base">
      <NavigationBar  />
      <SearchBar />
    </div>
  )
}

export default App
