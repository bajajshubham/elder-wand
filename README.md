#### **Note**
This app is under development, as of now it is pure frontend without data persistence - Current objective is to provide accesibility as per WCAG 2.2 guidelines, better user experience and uasy to use UI. It should focus on comprehension yet avoiding cognitive overload.

# Introduction
Yes! It's a Harry Potter reference - Except Wand here is German for wall. The Elder Wand application is designed to assist caregivers in managing meal preferences for elderly residents. It offers a comprehensive interface that tracks favourite foods, disliked foods, allergies, and special instructions. This application aims to streamline the meal planning process, ensuring that each resident's dietary needs and preferences are met with care and precision.
By providing an organised and user-friendly platform, the Elder Wand application helps caregivers deliver personalised meal plans, enhancing the overall dining experience for elderly residents. This not only improves the quality of care but also ensures that residents' dietary restrictions and preferences are respected and adhered to their concerns.

## Purpose
Imagine yourself working as a caretaker in an Old Age Home - How strenuous your work day would be? Managing the demands of every resident, remembering their preferences, documenting it manually - on paper? It's just one aspect out of many exhausting tasks they have to perform. But if we could make it one step simpler for them, then why not? This app is meant to do exactly the same - Make it easier for caregivers to record all the meal preferences of each resident.
I connected with caregivers from two different old age homes in my hometown and I was able to empathize with them. They told me how they had to remember of keep everything in files. I was difficult to maintain a file for each resident and each time the likes and dislikes of residents changed. I understood that working as a caretaker in an Old Age Home can be incredibly demanding and emotionally taxing. Hence, a step towards making someone's daily work a bit easier - A small magic with Elder Wand.

## Target Audience
Caretakers or relatives of elderly people.

# Key Features
- **Meal Preferences Management**: Caregivers can manage meal preferences for elderly residents, including tracking favourite foods, disliked foods, allergies, and special instructions.
- **Favourite Foods Management**: Foods can be categorised by meal type (breakfast, lunch, dinner, and snacks). Users can add, edit, and remove favourite foods, and use quick-add options for common items.
- **Disliked Foods Tracking**: The app tracks foods that should be avoided, including the name of the food, severity level (mild, moderate, severe), and reason for avoidance. Users can add, edit, and remove disliked foods.
- **Allergy Management**: Allergies are tracked with the name of the allergen, severity level, and potential reaction. Each allergy can be added, edited, or removed as needed.
- **Special Instructions**: A dedicated section for any additional dietary instructions or notes, which can be updated as needed.
- **User Interface Features**: The app has a mobile-responsive design with specialised layouts for smaller screens, interactive forms with validation, quick-add functionality for common items, save draft capability for work in progress, a notification system to confirm changes, and grouped organisation of foods by meal type.

# User Interface Features
- **Mobile-Responsive Design**: The application is designed to be fully responsive, ensuring that it works seamlessly on both desktop and mobile devices. This includes specialised layouts for smaller screens, making it easy for caregivers to access and manage meal preferences on the go.
- **Interactive Forms**: The application features interactive forms to ensure that all necessary information is entered. This helps ensures that the data is accurate and complete.
- **Quick-Add Functionality for Common Items**: To streamline the process of adding meal preferences, the application includes quick-add options for common items. This allows caregivers to quickly add frequently used foods, such as oatmeal or scrambled eggs, without having to enter all the details manually
- **Save Draft Capability**: The application allows caregivers to save their work in progress as drafts. This means that they can start entering information and come back to it later without losing any data. This feature is particularly useful for busy caregivers who may need to attend to other tasks.
- **Notification System**: A notification system is in place to confirm when changes have been made and saved. This provides caregivers with immediate feedback, ensuring that they know their updates have been successfully recorded.
- **Grouped Organisation**: The application organises foods by meal type (breakfast, lunch, dinner, and snacks) to make it easier for caregivers to manage and plan meals. This grouped organisation helps caregivers quickly find and update the relevant information.
- **Color Palette**: The application features a warm color scheme designed to reduce eye strain, allowing caregivers to use it comfortably even when fatigued. This helps ease visual stress for users who are often already exhausted.

# Benefits
- Improved Care Quality 
- Efficiency
- Resident Satisfaction

# Conclusion
## Summary
### Live Demo
Please check out the current version of this app deloyed here: [Elder Wand](https://elder-wand.vercel.app/)
### Summary table

| Component                  | Purpose                                                        | Key Features                                              |
|----------------------------|----------------------------------------------------------------|-----------------------------------------------------------|
| MealPreferences            | Central logic & UI for all preferences                         | Manages state, actions, notifications, renders sections   |
| FavoriteFoodsSection       | Manage favorite foods by meal type                             | Add/edit/remove, quick add, categorized display           |
| DislikedFoodsSection       | Manage foods to avoid with severity/reason                     | Add/edit/remove, severity selection                       |
| AllergiesSection           | Record allergies with severity/reaction                        | Add/edit/remove, health safety focus                      |
| SpecialInstructionsSection | Enter extra dietary instructions                              | Simple text field, updates overall preferences            |
| OverviewCards              | Visual summary of resident preferences                         | Quick caregiver reference                                 |
| SaveNotification           | Toast for save actions                                         | User feedback on save status                              |
| UI Elements                | Reusable building blocks                                      | Consistent design and interaction                         |
| Types/Data Structures      | Define meal preference schema                                  | Type safety, structure for app logic                      |

## Call to Action
We encourage caregivers to fully utilise the Elder Wand application to enhance their caregiving experience. By leveraging the application's comprehensive features, caregivers can ensure that each resident's dietary needs and preferences are meticulously managed. This not only improves the quality of care but also fosters a more personalised and satisfying dining experience for the residents.

By integrating the Elder Wand application into your daily routine, you can streamline meal planning, reduce the risk of dietary errors, and ensure that all special instructions and allergies are carefully adhered to. This will ultimately lead to a more efficient and effective caregiving process, allowing you to focus on providing compassionate and attentive care.

We invite you to explore all the features of the Elder Wand application and see how it can make a positive impact on your work and the lives of those you care for. Your dedication and commitment to providing excellent care are invaluable, and the Elder Wand application is here to support you every step of the way. 😊 All feedbacks are welcomed to improve the app based on your needs.

## Currently working on
- Data Validation and input sanitization; redundant entries for preferences not to be allowed
- Light-Dark theme toggle button is just placeholder for now; working on it to fullfill its purpose
- Backend and Database to handle and persist data
- Dashboard for the care givers to manage all residents

## Future Scope & Feature Ideas
1. **User Authentication & Roles**
- Add secure sign-up, login, and password management.
- Different roles: caregivers, residents, admins.
- Permissions and access control based on user roles.
2. **Resident Profiles & History**
- Multiple resident profiles with personal info, medical history, and preferences.
- Track changes to preferences and dietary history over time.
3. **Meal Planning & Scheduling**
Generate personalized weekly/monthly meal plans based on preferences and restrictions.
- Allow caregivers to schedule and record actual meals served.
- Integration with kitchen inventory for real-time planning.
4. **Reporting & Analytics**
- Generate reports on nutrition, calories, and allergy exposure.
- Visual dashboards for tracking adherence to meal plans or monitoring problematic trends (e.g., repeated dislikes).
5. **Communication & Collaboration**
- Messaging or notifications between caregivers, nutritionists, and family members.
- Alert system for allergies or missed dietary needs.
6. **Integration with Health Devices & Apps**
- Sync with wearable health trackers or medical records (e.g., glucose monitors, smartwatches).
- Automatic updates for changing dietary needs based on health data.
7. **Menu Suggestions & Recipes**
- Suggest recipes or meals based on resident preferences and restrictions.
- AI-powered recommendations for variety and nutrition.
8. **Accessibility and Localization**
- Enhanced accessibility (voice commands, screen reader support, large text).
- Support for multiple languages and regional meal types.
9. **Mobile Application**
- Native mobile apps for caregivers and residents.
- Push notifications for meal reminders and updates.
10. **Data Export & Compliance**
- Export data for medical or regulatory compliance (e.g., CSV, PDF).
- Ensure compliance with privacy laws (HIPAA/GDPR).
11. **Integration with External Services**
- Integration with food delivery services or grocery ordering.
- API for third-party health or elder care platforms.

## TLDR: Future Scope table
| Area                        | Future Scope/Feature Ideas                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|
| User Management             | Authentication, roles, permissions                                                                                  |
| Resident Profiles           | Multi-resident support, history tracking, personal/medical information                                              |
| Meal Planning               | Automated meal plans, scheduling, inventory integration                                                             |
| Reporting & Analytics       | Nutrition reports, dashboards, trend analysis                                                                       |
| Communication               | Messaging, notifications, alerts                                                                                    |
| Health Device Integration   | Sync with wearables, automatic updates                                                                              |
| Menu & Recipes              | AI-based suggestions, recipe management                                                                             |
| Accessibility & Localization| Voice commands, screen readers, multi-language support                                                             |
| Mobile Experience           | Native apps, push notifications                                                                                     |
| Data Export & Compliance    | CSV/PDF export, privacy law compliance                                                                              |
| External Integrations       | Food delivery, grocery, third-party APIs                                                                            |


_Contributors are welcomed! Please fork this repository to make changes! Danke!_             

_All rights reserved_
