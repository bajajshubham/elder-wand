import { useState } from 'react'
import { AlertTriangle, Plus, Edit, X, Info, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Allergy, SeverityLevel } from '@/types/meal-preferences'

interface AllergiesSectionProps {
  allergies: Allergy[]
  onAddAllergy: (name: string, severity: SeverityLevel, reaction?: string) => void
  onEditAllergy: (id: string, name: string, severity: SeverityLevel, reaction?: string) => void
  onRemoveAllergy: (id: string) => void
}

const commonAllergies = ['Tree nuts', 'Dairy/Milk', 'Gluten', 'Shellfish', 'Eggs', 'Lactose']

const severityLevels: { value: SeverityLevel; label: string; description: string; color: string }[] = [
  { value: 'mild', label: 'Mild', description: 'Digestive sensitivity', color: 'border-yellow-300 bg-yellow-50 text-yellow-800' },
  { value: 'moderate', label: 'Moderate', description: 'Noticeable reaction', color: 'border-orange-300 bg-orange-50 text-orange-800' },
  { value: 'severe', label: 'Severe', description: 'Anaphylaxis risk', color: 'border-red-300 bg-red-50 text-red-800' }
]

export function AllergiesSection({ allergies, onAddAllergy, onEditAllergy, onRemoveAllergy }: AllergiesSectionProps) {
  const [newAllergy, setNewAllergy] = useState('')
  const [selectedSeverity, setSelectedSeverity] = useState<SeverityLevel>('moderate')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState('')
  const [editSeverity, setEditSeverity] = useState<SeverityLevel>('moderate')

  const handleAddAllergy = () => {
    if (newAllergy.trim()) {
      const reaction = getSeverityInfo(selectedSeverity).description
      onAddAllergy(newAllergy.trim(), selectedSeverity, reaction)
      setNewAllergy('')
    }
  }

  const handleQuickAdd = (allergyName: string) => {
    const reaction = getSeverityInfo(selectedSeverity).description
    onAddAllergy(allergyName, selectedSeverity, reaction)
  }

  const handleStartEdit = (allergy: Allergy) => {
    setEditingId(allergy.id)
    setEditName(allergy.name)
    setEditSeverity(allergy.severity)
  }

  const handleSaveEdit = () => {
    if (editingId && editName.trim()) {
      onEditAllergy(editingId, editName.trim(), editSeverity)
      setEditingId(null)
      setEditName('')
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditName('')
  }

  const getSeverityInfo = (severity: SeverityLevel) => {
    return severityLevels.find(s => s.value === severity) || severityLevels[1]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddAllergy()
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
    <Card className="backdrop-blur-xs shadow-md hover:shadow-lg transition-all duration-200" style={{ backgroundColor: "#fffefc", border: '0.666667px solid rgba(255, 96, 96, 0.53)' }}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255, 226, 226, 0.6)", border: '0.666667px solid rgba(255, 96, 96, 1)' }}>
            <AlertTriangle className="w-4 h-4 text-red-600" />
          </div>
          <CardTitle className="text-lg font-bold text-black">Allergies & Intolerances</CardTitle>
          <Badge className="bg-red-100 text-red-800 border-red-200">
            CRITICAL
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-6 p-3 rounded-lg border border-orange-200 bg-white">
          <div className="flex gap-3">
            <Info className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
            <div className="text-sm">
              <p className="text-red-700">This information is critical for safety. Please ensure all allergies and intolerances are accurately recorded.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-black mb-2">Common allergies</p>
          <div className="flex flex-wrap gap-2">
            {commonAllergies.map((allergy) => (
              <Button
                key={allergy}
                variant="outline"
                size="sm"
                onClick={() => handleQuickAdd(allergy)}
                className="text-xs border-red-200 bg-red-50 hover:bg-red-100"
                disabled={allergies.map((allergy) => allergy.name).includes(allergy)}
              >
                {allergy}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium text-black mb-2 block">
            Add allergy or intolerance <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2 mb-2 max-[425px]:hidden">
            <Input
              value={newAllergy}
              onChange={(e) => setNewAllergy(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter allergy or intolerance..."
              className="flex-1"
              required
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
              onClick={handleAddAllergy}
              size="icon"
              className="text-white shadow-md"
              style={{ backgroundColor: "rgba(6, 34, 47, 1)" }}
              disabled={!newAllergy.trim()}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="hidden max-[425px]:block mobile-add-section mb-2">
            <div className="mobile-input-row">
              <div className="mobile-add-row">
                <Input
                  value={newAllergy}
                  onChange={(e) => setNewAllergy(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter allergy or intolerance..."
                  className="w-full"
                  required
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
                  onClick={handleAddAllergy}
                  size="icon"
                  className="text-white shadow-md"
                  style={{ backgroundColor: "rgba(6, 34, 47, 1)" }}
                  disabled={!newAllergy.trim()}
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
          {allergies.length === 0 ? (
            <p className="text-sm text-gray-600 p-3 text-center">No allergies recorded</p>
          ) : (
            allergies.map((allergy) => {
              const severityInfo = getSeverityInfo(allergy.severity)
              return (
                <div
                  key={allergy.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-sage-200 shadow-xs hover:shadow-md transition-all duration-200"
                  style={{ backgroundColor: "rgba(250, 249, 245, 0.5)" }}
                >
                  {editingId === allergy.id ? (
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
                        <span className="text-sm font-medium text-black">{allergy.name}</span>
                        <Badge className={severityInfo.color}>
                          {severityInfo.label}
                        </Badge>
                        {allergy.reaction && (
                          <span className="text-xs text-gray-600">{allergy.reaction}</span>
                        )}
                      </div>
                      <div className="flex gap-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleStartEdit(allergy)}
                          className="w-8 h-8"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => onRemoveAllergy(allergy.id)}
                          className="w-8 h-8 hover:bg-red-50"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              )
            })
          )}
        </div>
      </CardContent>
    </Card>
  )
}
