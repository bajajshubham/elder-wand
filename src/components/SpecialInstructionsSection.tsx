import { Info, FileText } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useCharacterCounter } from '@/hooks/use-character-counter'
import { useEffect } from 'react'

interface SpecialInstructionsSectionProps {
  instructions: string
  onInstructionsChange: (instructions: string) => void
}

export function SpecialInstructionsSection({ 
  instructions, 
  onInstructionsChange 
}: SpecialInstructionsSectionProps) {
  const { text, count, updateText } = useCharacterCounter(500)

  useEffect(() => {
    updateText(instructions)
  }, [instructions, updateText])

  const handleChange = (value: string) => {
    updateText(value)
    onInstructionsChange(value)
  }

  const isNearLimit = count > 400

  return (
    <Card className="bg-white/80 backdrop-blur-xs shadow-md hover:shadow-lg transition-all duration-200" style={{ border: '0.666667px solid rgba(74, 144, 226, 1)' }}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
            <FileText className="w-4 h-4 text-slate-800" />
          </div>
          <CardTitle className="text-lg font-bold text-black">Special Instructions</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-6">
          <p className="text-sm text-black mb-1">
            Include texture preferences, temperature requirements, cultural/religious
          </p>
          <p className="text-sm text-black">
            dietary needs, or other important meal considerations.
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="instructions-textarea" className="text-sm font-medium text-black mb-2 block">
            Additional dietary considerations
          </label>
          <div className="space-y-2">
            <Textarea
              id="instructions-textarea"
              value={text}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Enter any special dietary requirements, texture preferences, cultural needs, or other important meal considerations..."
              className="min-h-32 resize-none bg-cream-50/30 focus:bg-white"
              style={{ border: "0.666667px solid rgba(176, 176, 176, 1)" }}
              maxLength={500}
            />
            <div className="text-right">
              <span className={`text-sm ${isNearLimit ? 'text-orange-600 font-medium' : 'text-gray-500'}`}>
                {count}/500 characters
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs text-black mb-1">
            Include any important details that will help caregivers provide the best meal
          </p>
          <p className="text-xs text-black">experience.</p>
        </div>

        <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
          <div className="flex gap-3">
            <Info className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
            <div className="text-sm text-blue-800">
              <h4 className="font-semibold mb-1">Helpful examples:</h4>
              <p>
                Texture preferences (soft, pureed), temperature needs (warm, room temperature), 
                cultural requirements (halal, kosher), assistance needs (cutting help, feeding assistance), 
                portion preferences (small frequent meals).
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
