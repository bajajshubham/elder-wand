import { useEffect } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import type { SaveNotification as SaveNotificationType } from '@/types/meal-preferences'

interface SaveNotificationProps {
  notification: SaveNotificationType
  onClose: () => void
}

export function SaveNotification({ notification, onClose }: SaveNotificationProps) {
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        onClose()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [notification.show, onClose])

  if (!notification.show) return null

  return (
    <div className="fixed top-4 right-4 z-50 transition-all duration-300">
      <div className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg border ${
        notification.type === 'success' 
          ? 'bg-green-50 border-green-200 text-green-800' 
          : 'bg-red-50 border-red-200 text-red-800'
      }`}>
        {notification.type === 'success' ? (
          <CheckCircle className="w-5 h-5" />
        ) : (
          <XCircle className="w-5 h-5" />
        )}
        <span className="font-medium">{notification.message}</span>
      </div>
    </div>
  )
}
