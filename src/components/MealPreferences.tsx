import { OverviewCards } from '@/components/OverviewCards'
import type { FavoriteFood, MealPreferencesType, MealType } from '@/types/meal-preferences'
import { useCallback, useState } from 'react'
import { FavoriteFoodsSection } from './FavoriteFoodsSection'

const initialPreferences: MealPreferencesType = {
  favoritesFoods: [
    { id: '1', name: 'Oatmeal with berries', mealType: 'breakfast' },
    { id: '2', name: 'Scrambled eggs with toast', mealType: 'breakfast' },
    { id: '3', name: 'Vegetable soup', mealType: 'lunch' },
    { id: '4', name: 'Grilled cheese sandwich', mealType: 'lunch' },
    { id: '5', name: 'Baked chicken', mealType: 'dinner' },
    { id: '6', name: 'Mashed potatoes', mealType: 'dinner' },
    { id: '7', name: 'Apple slices', mealType: 'snacks' },
    { id: '8', name: 'Yogurt', mealType: 'snacks' },
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

export default function MealPreferences() {
  const [preferences, setPreferences] = useState<MealPreferencesType>(initialPreferences)

  const logChange = useCallback((action: string, data: any) => {
    console.log(`[Meal Preferences] ${action}:`, data)

  }, [])

  const handleAddFavoriteFood = useCallback((name: string, mealType: MealType) => {
    const newFood: FavoriteFood = {
      id: Date.now().toString(),
      name,
      mealType,
    }
    setPreferences(prev => ({
      ...prev,
      favoritesFoods: [...prev.favoritesFoods, newFood],
    }))
    logChange('Add Favorite Food', newFood)
  }, [logChange])

  const handleEditFavoriteFood = useCallback((id: string, name: string, mealType: MealType) => {
    setPreferences(prev => ({
      ...prev,
      favoritesFoods: prev.favoritesFoods.map(food =>
        food.id === id ? { ...food, name, mealType } : food
      ),
    }))
    logChange('Edit Favorite Food', { id, name, mealType })
  }, [logChange])

  const handleRemoveFavoriteFood = useCallback((id: string) => {
    setPreferences(prev => ({
      ...prev,
      favoritesFoods: prev.favoritesFoods.filter(food => food.id !== id),
    }))
    logChange('Remove Favorite Food', { id })
  }, [logChange])


  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fff9f0" }}>
      <OverviewCards preferences={preferences} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <FavoriteFoodsSection
            favorites={preferences.favoritesFoods}
            onAddFood={handleAddFavoriteFood}
            onEditFood={handleEditFavoriteFood}
            onRemoveFood={handleRemoveFavoriteFood}
          />
        </div>
      </div>
    </div>
  )
}
