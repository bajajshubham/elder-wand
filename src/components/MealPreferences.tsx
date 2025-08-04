import { useState, useCallback } from 'react'
import { OverviewCards } from '@/components/OverviewCards'
import { FavoriteFoodsSection } from '@/components/FavoriteFoodsSection'
import { DislikedFoodsSection } from '@/components/DislikedFoodsSection'
import { AllergiesSection } from '@/components/AllergiesSection'
import { SpecialInstructionsSection } from '@/components/SpecialInstructionsSection'
import type {
  MealPreferencesType,
  FavoriteFood,
  DislikedFood,
  Allergy,
  MealType,
  SeverityLevel,
} from '@/types/meal-preferences'

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

  const handleAddDislikedFood = useCallback((name: string, severity: SeverityLevel, reason?: string) => {
    const newFood: DislikedFood = {
      id: Date.now().toString(),
      name,
      severity,
      reason,
    }
    setPreferences(prev => ({
      ...prev,
      dislikedFoods: [...prev.dislikedFoods, newFood],
    }))
    logChange('Add Disliked Food', newFood)
  }, [logChange])

  const handleEditDislikedFood = useCallback((id: string, name: string, severity: SeverityLevel, reason?: string) => {
    setPreferences(prev => ({
      ...prev,
      dislikedFoods: prev.dislikedFoods.map(food =>
        food.id === id ? { ...food, name, severity, reason } : food
      ),
    }))
    logChange('Edit Disliked Food', { id, name, severity, reason })
  }, [logChange])

  const handleRemoveDislikedFood = useCallback((id: string) => {
    setPreferences(prev => ({
      ...prev,
      dislikedFoods: prev.dislikedFoods.filter(food => food.id !== id),
    }))
    logChange('Remove Disliked Food', { id })
  }, [logChange])

  const handleAddAllergy = useCallback((name: string, severity: SeverityLevel, reaction?: string) => {
    const newAllergy: Allergy = {
      id: Date.now().toString(),
      name,
      severity,
      reaction,
    }
    setPreferences(prev => ({
      ...prev,
      allergies: [...prev.allergies, newAllergy],
    }))
    logChange('Add Allergy', newAllergy)
  }, [logChange])

  const handleEditAllergy = useCallback((id: string, name: string, severity: SeverityLevel, reaction?: string) => {
    setPreferences(prev => ({
      ...prev,
      allergies: prev.allergies.map(allergy =>
        allergy.id === id ? { ...allergy, name, severity, reaction } : allergy
      ),
    }))
    logChange('Edit Allergy', { id, name, severity, reaction })
  }, [logChange])

  const handleRemoveAllergy = useCallback((id: string) => {
    setPreferences(prev => ({
      ...prev,
      allergies: prev.allergies.filter(allergy => allergy.id !== id),
    }))
    logChange('Remove Allergy', { id })
  }, [logChange])

  const handleInstructionsChange = useCallback((instructions: string) => {
    setPreferences(prev => ({
      ...prev,
      specialInstructions: instructions,
    }))
    logChange('Update Special Instructions', { instructions })
  }, [logChange])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fff9f0" }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col gap-2.5">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-black">Profile Overview</h1>
            <p className="text-black">Manage meal preferences for your residents</p>
          </div>
          <OverviewCards preferences={preferences} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FavoriteFoodsSection
              favorites={preferences.favoritesFoods}
              onAddFood={handleAddFavoriteFood}
              onEditFood={handleEditFavoriteFood}
              onRemoveFood={handleRemoveFavoriteFood}
            />
            <DislikedFoodsSection
              dislikedFoods={preferences.dislikedFoods}
              onAddFood={handleAddDislikedFood}
              onEditFood={handleEditDislikedFood}
              onRemoveFood={handleRemoveDislikedFood}
            />
          </div>

          <div className="space-y-6">
            <AllergiesSection
              allergies={preferences.allergies}
              onAddAllergy={handleAddAllergy}
              onEditAllergy={handleEditAllergy}
              onRemoveAllergy={handleRemoveAllergy}
            />
            <SpecialInstructionsSection
              instructions={preferences.specialInstructions}
              onInstructionsChange={handleInstructionsChange}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
