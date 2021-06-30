import logo from './logo.svg'
import './App.css'
import { NavigationBar } from './components/NavBar/NavigationBar'
import { SearchBar } from './components/SearchBar/SearchBar'
import { DrinkResult } from './components/DrinkResult/DrinkResult'

function App() {
  return (
    <div className="base">
      <NavigationBar  />
      <DrinkResult />
      <SearchBar />
    </div>
  )
}

export default App
