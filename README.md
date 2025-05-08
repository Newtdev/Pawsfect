# 🐾 Pawsfect - Your Pet's Perfect Companion

Pawsfect is a comprehensive mobile application designed to simplify pet ownership. Manage your pets' health, schedule vet appointments, track activities, shop for supplies, and connect with AI or real veterinarians—all in one place. Built with React Native for cross-platform compatibility and following Clean Architecture principles.

## ✨ Features

### 🧑🤝🧑 User & Pet Management
- **User Registration**: Secure sign-up with email/password.
- **Multi-Pet Profiles**: Register multiple pets with details (breed, type, size, weight, birthdate, adoption date, caregiver).

### 🔒 Security
- **Biometric/Face ID Login**: Quick and secure authentication.

### 🛒 Shopping & Health
- **Cart System**: Shop for pet food, toys, and essentials.
- **Medical Records**: Track vaccinations, treatments, and vet visits.
- **Health Reminders**: Set reminders for medications, vet appointments, and grooming.

### 🗺️ Location & Communication
- **Vet Locator**: Find nearby vets via interactive maps, view contact info, and get directions.
- **Pet Activity Tracking**: Log walks/training sessions with real-time GPS tracking, distance, and time metrics (Live Activities on iOS/Android).
- **Chat**: 
  - **AI Chatbot**: Get instant pet care advice.
  - **Veterinarian Chat**: Direct messaging with licensed vets.

### 📅 Organization
- **Calendar**: Centralized schedule for all pet-related events.
- **Custom Reminders**: Never miss a feeding or medication dose.

## 🏗️ Architecture
- **Clean Architecture**: Separation of concerns into layers:
  - **Presentation**: UI components and screens.
  - **Domain**: Business logic and use cases.
  - **Data**: APIs, databases, and services.
- **Modular Structure**: Features are isolated for scalability.

## 📂 Folder Structure

```
├── features/ # Feature-based modules
│ ├── authentication/ # Auth feature
│ │ ├── api/ # Authentication API calls
│ │ ├── components/ # Auth-specific UI components
│ │ ├── hooks/ # Custom auth hooks
│ │ └── screens/ # Login/Registration screens
│ │
│ ├── pets/ # Pet management feature
│ │ ├── api/ # Pet-related API endpoints
│ │ ├── components/ # Pet profile components
│ │ ├── services/ # Business logic (e.g., weight calculations)
│ │ └── screens/ # Pet registration/display screens
│ │
│ ├── cart/ # Shopping feature
│ │ ├── api/ # Cart API integration
│ │ ├── components/ # Cart UI components
│ │ └── screens/ # Checkout/Product screens
│ │
│ └── chat/ # Chat feature
│ ├── api/ # Chat API integration
│ ├── components/ # Message components
│ └── screens/ # Chat interface screens
│
└── shared/ # Cross-feature resources
├── components/ # Global UI components
│ ├── buttons/ # Reusable buttons
│ ├── modals/ # Common modals
│ └── icons/ # Icon library
│
├── hooks/ # Shared hooks
│ ├── useLocation.ts # Location tracking hook
│ └── useTimer.ts # Activity timer hook
│
└── utils/ # Utility functions
├── formatters/ # Date/currency formatting
└── validators/ # Form validation helpers
```


## 🛠️ Tech Stack
- **Multilingual**: `i18next` for localization.
- **State Management**: 
  - Client: `Redux` or `Zustand`.
  - Server: `Redux Toolkit Query` or `React Query`.
- **Workflow**: 
  - `Husky` + `ESLint` for pre-commit linting/testing.
  - Automated `console.log` removal in development builds.
- **Maps**: Mapbox integration.

## � Development Workflow

### 🌿 Branch Strategy
```
# Create feature branches
git checkout -b feature/add-pet-profile

# Create maintenance branches
git checkout -b chore/update-dependencies

type(scope): description

[Optional body]

[Optional footer]

git commit -m "feat(pets): add weight tracking chart"
git commit -m "fix(login): resolve biometric auth crash on iOS"

## 🚀 Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/newtdev/pawsfect.git
