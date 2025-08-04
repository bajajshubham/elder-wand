import { useState } from 'react'
import { Heart, Plus, Edit, X, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { FavoriteFood, MealType } from '@/types/meal-preferences'

interface FavoriteFoodsSectionProps {
  favorites: FavoriteFood[]
  onAddFood: (name: string, mealType: MealType) => void
  onEditFood: (id: string, name: string, mealType: MealType) => void
  onRemoveFood: (id: string) => void
}

const quickAddItems = ['Oatmeal', 'Scrambled Eggs', 'Chicken Soup', 'Fruit Salad', 'Yogurt']

const mealTypes: { value: MealType; label: string }[] = [
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'snacks', label: 'Snacks' }
]

export function FavoriteFoodsSection({ favorites, onAddFood, onEditFood, onRemoveFood }: FavoriteFoodsSectionProps) {
  const [newFood, setNewFood] = useState('')
  const [selectedMealType, setSelectedMealType] = useState<MealType>('breakfast')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState('')
  const [editMealType, setEditMealType] = useState<MealType>('breakfast')

  const handleAddFood = () => {
    if (newFood.trim()) {
      onAddFood(newFood.trim(), selectedMealType)
      setNewFood('')
    }
  }

  const handleQuickAdd = (foodName: string) => {
    onAddFood(foodName, selectedMealType)
  }

  const handleStartEdit = (food: FavoriteFood) => {
    setEditingId(food.id)
    setEditName(food.name)
    setEditMealType(food.mealType)
  }

  const handleSaveEdit = () => {
    if (editingId && editName.trim()) {
      onEditFood(editingId, editName.trim(), editMealType)
      setEditingId(null)
      setEditName('')
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditName('')
  }

  const groupedFavorites = favorites.reduce((groups, food) => {
    if (!groups[food.mealType]) {
      groups[food.mealType] = []
    }
    groups[food.mealType].push(food)
    return groups
  }, {} as Record<MealType, FavoriteFood[]>)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddFood()
    }
  }

  const handleEditKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveEdit()
    } else if (e.key === 'Escape') {
      handleCancelEdit()
    }
  }

  return (
    <Card className="bg-white/80 backdrop-blur-xs shadow-md hover:shadow-lg transition-all duration-200" style={{ border: '0.666667px solid rgba(126, 211, 33, 1)' }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
              <Heart className="w-4 h-4 text-slate-800" />
            </div>
            <CardTitle className="text-lg font-bold text-black">Favorite Foods</CardTitle>
          </div>
          <span className="text-sm text-gray-600">{favorites.length} items</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {quickAddItems.map((item) => (
              <Button
                key={item}
                variant="outline"
                size="sm"
                onClick={() => handleQuickAdd(item)}
                className="text-xs border-sage-200 hover:bg-cream-100 shadow-xs"
                style={{ backgroundColor: "rgba(251, 251, 230, 1)" }}
                disabled={favorites.map((favItem) => favItem.name).includes(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-black mb-2 block">Add favorite food</label>
          <div className="flex gap-2 max-[425px]:hidden">
            <Input
              value={newFood}
              onChange={(e) => setNewFood(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter favorite food..."
              className="flex-1"
            />
            <Select
              value={selectedMealType}
              onChange={(e) => setSelectedMealType(e.target.value as MealType)}
              className="w-32"
            >
              {mealTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </Select>
            <Button
              onClick={handleAddFood}
              size="icon"
              className="text-white shadow-md"
              style={{ backgroundColor: "rgba(6, 34, 47, 1)" }}
              disabled={!newFood.trim()}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="hidden max-[425px]:block mobile-add-section">
            <div className="mobile-input-row">
              <div className="mobile-add-row">
                <Input
                  value={newFood}
                  onChange={(e) => setNewFood(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter favorite food..."
                  className="w-full"
                />
              </div>
            </div>
            <div className="mobile-select-row">
              <div className="mobile-add-row">
                <Select
                  value={selectedMealType}
                  onChange={(e) => setSelectedMealType(e.target.value as MealType)}
                  className="flex-1"
                >
                  {mealTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </Select>
                <Button
                  onClick={handleAddFood}
                  size="icon"
                  className="text-white shadow-md"
                  style={{ backgroundColor: "rgba(6, 34, 47, 1)" }}
                  disabled={!newFood.trim()}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {mealTypes.map((mealType) => {
            const foods = groupedFavorites[mealType.value] || []
            if (foods.length === 0) return null

            return (
              <div key={mealType.value}>
                <h3 className="text-sm font-medium text-black mb-2 capitalize">{mealType.value}</h3>
                <div className="space-y-2">
                  {foods.map((food) => (
                    <div
                      key={food.id}
                      className="flex items-center justify-between p-3 bg-cream-50/50 rounded-lg border border-sage-200 shadow-xs hover:shadow-md transition-all duration-200"
                    >
                      {editingId === food.id ? (
                        <>
                          <div className="flex gap-2 flex-1 max-[425px]:hidden">
                            <Input
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              onKeyPress={handleEditKeyPress}
                              className="flex-1"
                            />
                            <Select
                              value={editMealType}
                              onChange={(e) => setEditMealType(e.target.value as MealType)}
                              className="w-24"
                            >
                              {mealTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </Select>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={handleSaveEdit}
                              className="w-8 hover:bg-green-50"
                              disabled={!editName.trim()}
                            >
                              <Check className="w-4 h-4 text-green-600" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={handleCancelEdit}
                              className="w-8 hover:bg-red-50"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="hidden max-[425px]:block mobile-edit-section">
                            <div className="mobile-edit-input-row">
                              <div className="mobile-edit-row">
                                <Input
                                  value={editName}
                                  onChange={(e) => setEditName(e.target.value)}
                                  onKeyPress={handleEditKeyPress}
                                  className="w-full"
                                />
                              </div>
                            </div>
                            <div className="mobile-edit-select-row">
                              <div className="mobile-edit-row">
                                <Select
                                  value={editMealType}
                                  onChange={(e) => setEditMealType(e.target.value as MealType)}
                                  className="flex-1"
                                >
                                  {mealTypes.map((type) => (
                                    <option key={type.value} value={type.value}>
                                      {type.label}
                                    </option>
                                  ))}
                                </Select>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={handleSaveEdit}
                                  className="w-8 hover:bg-green-50"
                                  disabled={!editName.trim()}
                                >
                                  <Check className="w-4 h-4 text-green-600" />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={handleCancelEdit}
                                  className="w-8 hover:bg-red-50"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="text-sm text-black">{food.name}</span>
                          <div className="flex gap-1">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handleStartEdit(food)}
                              className="w-8 h-8"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => onRemoveFood(food.id)}
                              className="w-8 h-8 hover:bg-red-50"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
