import { useState } from 'react'
import { ThumbsDown, Plus, Edit, X, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { DislikedFood, SeverityLevel } from '@/types/meal-preferences'

interface DislikedFoodsSectionProps {
  dislikedFoods: DislikedFood[]
  onAddFood: (name: string, severity: SeverityLevel, reason?: string) => void
  onEditFood: (id: string, name: string, severity: SeverityLevel, reason?: string) => void
  onRemoveFood: (id: string) => void
}

const quickAddItems = ['Spicy Foods', 'Raw Vegetables', 'Liver', 'Brussels Sprouts', 'Strong Cheese']

const severityLevels: { value: SeverityLevel; label: string; description: string; color: string }[] = [
  { value: 'mild', label: 'Mild', description: 'Slight discomfort or preference to avoid', color: 'border-yellow-300 bg-yellow-50 text-yellow-800' },
  { value: 'moderate', label: 'Moderate', description: 'Noticeable reaction or strong dislike', color: 'border-orange-300 bg-orange-50 text-orange-800' },
  { value: 'severe', label: 'Absolutely Not', description: 'Strong adverse reaction', color: 'border-red-300 bg-red-50 text-red-800' }
]

export function DislikedFoodsSection({ dislikedFoods, onAddFood, onEditFood, onRemoveFood }: DislikedFoodsSectionProps) {
  const [newFood, setNewFood] = useState('')
  const [selectedSeverity, setSelectedSeverity] = useState<SeverityLevel>('mild')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState('')
  const [editSeverity, setEditSeverity] = useState<SeverityLevel>('mild')

  const handleAddFood = () => {
    if (newFood.trim()) {
      onAddFood(newFood.trim(), selectedSeverity)
      setNewFood('')
    }
  }

  const handleQuickAdd = (foodName: string) => {
    onAddFood(foodName, selectedSeverity)
  }

  const handleStartEdit = (food: DislikedFood) => {
    setEditingId(food.id)
    setEditName(food.name)
    setEditSeverity(food.severity)
  }

  const handleSaveEdit = () => {
    if (editingId && editName.trim()) {
      onEditFood(editingId, editName.trim(), editSeverity)
      setEditingId(null)
      setEditName('')
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditName('')
  }

  const getSeverityInfo = (severity: SeverityLevel) => {
    return severityLevels.find(s => s.value === severity) || severityLevels[0]
  }

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
    <Card className="bg-white/80 backdrop-blur-xs shadow-md hover:shadow-lg transition-all duration-200" style={{ border: '0.666667px solid rgba(155, 155, 155, 1)' }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
              <ThumbsDown className="w-4 h-4 text-slate-800" />
            </div>
            <CardTitle className="text-lg font-bold text-black">Foods to Avoid</CardTitle>
          </div>
          <span className="text-sm text-gray-600">{dislikedFoods.length} items</span>
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
                className="text-xs border-orange-200 bg-orange-50 hover:bg-orange-100"
                disabled={dislikedFoods.map((dislikedFood) => dislikedFood.name).includes(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-black mb-2 block">Add disliked food</label>
          <div className="flex gap-2 mb-2 max-[425px]:hidden">
            <Input
              value={newFood}
              onChange={(e) => setNewFood(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter food to avoid..."
              className="flex-1"
            />
            <Select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value as SeverityLevel)}
              className="w-32"
            >
              {severityLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
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
          <div className="hidden max-[425px]:block mobile-add-section mb-2">
            <div className="mobile-input-row">
              <div className="mobile-add-row">
                <Input
                  value={newFood}
                  onChange={(e) => setNewFood(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter food to avoid..."
                  className="w-full"
                />
              </div>
            </div>
            <div className="mobile-select-row">
              <div className="mobile-add-row">
                <Select
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value as SeverityLevel)}
                  className="flex-1"
                >
                  {severityLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
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
          <p className="text-xs text-black">
            Severity: {getSeverityInfo(selectedSeverity).description}
          </p>
        </div>

        <div className="space-y-2">
          {dislikedFoods.map((food) => {
            const severityInfo = getSeverityInfo(food.severity)
            return (
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
                        value={editSeverity}
                        onChange={(e) => setEditSeverity(e.target.value as SeverityLevel)}
                        className="w-24"
                      >
                        {severityLevels.map((level) => (
                          <option key={level.value} value={level.value}>
                            {level.label}
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
                            value={editSeverity}
                            onChange={(e) => setEditSeverity(e.target.value as SeverityLevel)}
                            className="flex-1"
                          >
                            {severityLevels.map((level) => (
                              <option key={level.value} value={level.value}>
                                {level.label}
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
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-black">{food.name}</span>
                      <Badge className={severityInfo.color}>
                        {severityInfo.label}
                      </Badge>
                    </div>
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
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
