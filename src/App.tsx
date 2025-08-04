import { useState } from 'react'
import './App.css'
import { OverviewCards } from './components/OverviewCards'
import { ProfileHeader } from './components/ProfileHeader'
import type { MealPreferencesType } from './types/meal-preferences'

const initialPreferences: MealPreferencesType = {
  favoritesFoods: [
    { id: '1', name: 'Oatmeal with berries', mealType: 'breakfast' },
    // { id: '2', name: 'Scrambled eggs with toast', mealType: 'breakfast' },
    { id: '3', name: 'Vegetable soup', mealType: 'lunch' },
    // { id: '4', name: 'Grilled cheese sandwich', mealType: 'lunch' },
    { id: '5', name: 'Baked chicken', mealType: 'dinner' },
    // { id: '6', name: 'Mashed potatoes', mealType: 'dinner' },
    { id: '7', name: 'Apple slices', mealType: 'snacks' },
    // { id: '8', name: 'Yogurt', mealType: 'snacks' },
  ],
  dislikedFoods: [
    { id: '1', name: 'Spicy foods', severity: 'severe', reason: 'Causes digestive discomfort' },
    { id: '2', name: 'Raw vegetables', severity: 'moderate', reason: 'Difficult to chew' },
    { id: '3', name: 'Liver', severity: 'severe', reason: 'Strong taste preference' },
  ],
  allergies: [
    { id: '1', name: 'Tree nuts', severity: 'severe', reaction: 'Anaphylaxis risk' },
    { id: '2', name: 'Lactose', severity: 'mild', reaction: 'Digestive sensitivity' },
    { id: '3', name: 'Gluten', severity: 'moderate', reaction: 'Noticeable reaction' },
  ],
  specialInstructions: '',
}

function App() {
  const [preferences, setPreferences] = useState<MealPreferencesType>(initialPreferences)

  return (
    <>
      <ProfileHeader />
      <OverviewCards preferences={preferences} />
    </>
  )
}

export default App
