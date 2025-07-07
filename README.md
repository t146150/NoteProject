# React Native Notes App

This is a React Native application designed for creating, managing, and organizing notes across different categories. It features persistent storage, configurable settings, and modern UI design.

## Features

**Persistent Note Storage**: Store and retrieve notes using react-native-mmkv for high-performance local storage.

**Note Management**:
- Create notes with content validation (max 200 characters)
- Three categories: "Work and Study", "Life", and "Health and Well-being"
- Delete individual notes and bulk delete all notes
- Reset to default dummy data

**Home Page**: Display notes by categories, showing latest 3 items per category (sorted by creation time, displaying first 20 characters of content).

**Add Note Page**: Category selection with 200-character content limit and form validation.

**Summary Page**: Show the number of notes for each category with real-time updates.

**Settings Page**: Delete All Notes functionality and Reset to Default option.

**Modern UI**: Built with react-native-paper for Material Design, react-native-linear-gradient for beautiful backgrounds, and react-native-vector-icons for scalable icons.

**Navigation**: Bottom tab navigation with custom icons and stack navigation for modal screens.

**Performance Optimizations**: Memoization, efficient sorting, and Context API for shared state management.

**Cross-Platform**: iOS and Android support with safe area handling for Dynamic Island and notches.

## Runtime Environment & SDK Versions

### Core Framework
- **React Native**: 0.70.6
- **React**: 18.1.0
- **TypeScript**: 5.8.3
- **Node.js**: v18.20.8

### iOS Development
- **iOS Deployment Target**: 12.4
- **Xcode**: 14.3.1 (Build version 14E300c)
- **CocoaPods**: Latest version
- **iOS Simulator**: iPhone 14 Pro Max recommended for testing

### Android Development
- **Android Build Tools**: 31.0.0
- **Android SDK**: 
  - Minimum SDK: 21 (Android 5.0)
  - Target SDK: 31 (Android 12)
  - Compile SDK: 31
- **Gradle**: 7.2.1
- **Android Studio**: Latest version recommended

### Key Dependencies
- **@react-navigation/bottom-tabs**: ^6.6.1
- **@react-navigation/native**: ^6.1.18
- **@react-navigation/native-stack**: ^6.11.0
- **react-native-paper**: ^5.14.5
- **react-native-mmkv**: 2.5.1
- **react-native-linear-gradient**: ^2.8.3
- **react-native-safe-area-context**: ^5.5.1
- **react-native-vector-icons**: 9.2.0
- **react-native-screens**: 3.18.0

### Development Tools
- **Babel**: ^7.12.9
- **ESLint**: ^7.32.0
- **Jest**: ^26.6.3
- **Metro**: 0.72.3

## Setup and Installation

### Prerequisites
- Node.js (LTS version recommended)
- npm or Yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Pods (iOS only)
```bash
cd ios && pod install && cd ..
```

### 3. Run the app
```bash
# For iOS
npm run ios

# For Android
npm run android
```

## Project Structure

```
src/
├── App.tsx                 # Main app component with navigation setup
├── constants.ts            # App constants and configuration
├── components/             # Reusable UI components
├── screens/                # App screens (Home, AddNote, Summary, Settings)
├── context/                # React Context for state management
├── types/                  # TypeScript type definitions
├── data/                   # Static data and utilities
└── style.ts                # Global styles and constants
```

## Key Technologies

- **React Native 0.70.6**: Cross-platform mobile development
- **TypeScript**: Type-safe development
- **React Navigation**: Navigation between screens
- **React Native Paper**: Material Design components
- **React Native MMKV**: High-performance storage
- **React Native Linear Gradient**: Beautiful gradient effects
- **React Native Vector Icons**: Scalable icons
- **React Native Safe Area Context**: Safe area handling

This implementation successfully meets all the requirements specified in the Software Engineer (APP) test assignment while providing additional features and optimizations for a production-ready application. 