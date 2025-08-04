import { Heart, ThumbsDown, AlertTriangle, FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { MealPreferencesType } from '@/types/meal-preferences'

interface OverviewCardsProps {
  preferences: MealPreferencesType
}

export function OverviewCards({ preferences }: OverviewCardsProps) {
  const cards = [
    {
      icon: Heart,
      count: preferences.favoritesFoods.length,
      label: 'Favorites',
      sublabel: 'Liked items',
      borderColor: 'rgba(126, 211, 33, 1)',
      iconStyle: { backgroundColor: "rgba(255, 255, 255, 0)", border: "0.666667px solid rgba(6, 34, 47, 1)" },
      iconColor: 'text-slate-800'
    },
    {
      icon: ThumbsDown,
      count: preferences.dislikedFoods.length,
      label: 'Avoid',
      sublabel: 'Disliked items',
      borderColor: 'rgba(155, 155, 155, 1)',
      iconStyle: { backgroundColor: "rgba(255, 255, 255, 0)", border: "0.666667px solid rgba(6, 34, 47, 1)" },
      iconColor: 'text-slate-800'
    },
    {
      icon: AlertTriangle,
      count: preferences.allergies.length,
      label: 'Allergies',
      sublabel: 'allergies listed',
      borderColor: 'rgba(255, 96, 96, 0.53)',
      cardStyle: { backgroundColor: '#fffdfb' },
      textColor: 'text-red-600',
      iconStyle: { backgroundColor: 'rgba(255, 226, 226, 0.6)', border: '0.666667px solid rgba(255, 96, 96, 1)' },
      iconColor: 'text-red-600'
    },
    {
      icon: FileText,
      count: preferences.specialInstructions.length > 0 ? 1 : 0,
      label: 'Notes',
      sublabel: 'special instructions',
      borderColor: 'rgba(74, 144, 226, 1)',
      iconStyle: { backgroundColor: "rgba(255, 255, 255, 0)", border: "0.666667px solid rgba(6, 34, 47, 1)" },
      iconColor: 'text-slate-800'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const IconComponent = card.icon
        return (
          <Card
            key={index}
            className="bg-white/70 backdrop-blur-xs shadow-md hover:shadow-lg transition-all duration-200"
            style={{
              border: `0.666667px solid ${card.borderColor}`,
              ...(card.cardStyle || {})
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border flex items-center justify-center" style={card.iconStyle}>
                  <IconComponent className={`w-4 h-4 ${card.iconColor}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">{card.count}</div>
                  <div className={`text-sm font-semibold ${card.textColor || 'text-black'}`}>{card.label}</div>
                  <div className="text-xs text-black">{card.sublabel}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
