import "./App.css"
import MealPreferences from "./components/MealPreferences"
import { ProfileHeader } from "./components/ProfileHeader"

const App = () => {
  return (<div className="min-h-screen" style={{ backgroundColor: "#fff9f0" }}>
    <ProfileHeader />
    <MealPreferences />
  </div>)
}

export default App