export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snacks';

export type SeverityLevel = 'mild' | 'moderate' | 'severe';

export interface FavoriteFood {
  id: string;
  name: string;
  mealType: MealType;
}

export interface DislikedFood {
  id: string;
  name: string;
  severity: SeverityLevel;
  reason?: string;
}

export interface Allergy {
  id: string;
  name: string;
  severity: SeverityLevel;
  reaction?: string;
}

export interface MealPreferencesType {
  favoritesFoods: FavoriteFood[];
  dislikedFoods: DislikedFood[];
  allergies: Allergy[];
  specialInstructions: string;
}

export interface SaveNotification {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}
