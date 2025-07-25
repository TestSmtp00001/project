# Meeting Intelligence Mobile App

A React Native mobile application for meeting intelligence, analytics, and sales insights.

## Features

- **Dashboard**: View key metrics, deals won, win rates, and meeting statistics
- **Meeting Intelligence**: Access transcripts, summaries, analytics, and AI-powered insights
- **Mobile-First Design**: Optimized for iOS and Android devices
- **Offline Support**: Core functionality available without internet connection
- **Audio Recording**: Record and analyze meeting audio
- **AI Assistant (SAM)**: Get intelligent insights and recommendations

## Tech Stack

- React Native 0.73
- TypeScript
- React Navigation 6
- React Native Vector Icons
- React Native Chart Kit
- React Native Audio Recorder Player

## Getting Started

### Prerequisites

- Node.js (>= 16)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Install iOS dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### iOS
```bash
npm run ios
```

#### Android
```bash
npm run android
```

### Building for Production

#### iOS
```bash
npm run build:ios
```

#### Android
```bash
npm run build:android
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── common/         # Common components (Button, Card, etc.)
├── screens/            # Screen components
├── constants/          # App constants (Colors, Dimensions, etc.)
├── navigation/         # Navigation configuration
├── services/          # API services and data management
├── utils/             # Utility functions
└── types/             # TypeScript type definitions
```

## Key Components

### Dashboard Screen
- Metrics overview with cards showing key performance indicators
- Time range selector for filtering data
- Recent meetings list with quick access

### Meeting Intelligence Screen
- Tabbed interface for different meeting analysis views
- Audio player with playback controls
- Transcript view with search functionality
- AI assistant chat interface

### Common Components
- **Card**: Reusable card component with shadow and styling
- **Button**: Customizable button with multiple variants and sizes
- **Colors & Dimensions**: Centralized design system constants

## Mobile-Specific Features

- **Touch-Optimized UI**: All interactions designed for mobile touch interfaces
- **Responsive Design**: Adapts to different screen sizes and orientations
- **Native Navigation**: Uses React Navigation for smooth transitions
- **Platform-Specific Styling**: Optimized for both iOS and Android design guidelines
- **Gesture Support**: Swipe, pinch, and other mobile gestures
- **Offline Capabilities**: Core features work without internet connection

## Development Guidelines

1. **Component Structure**: Keep components small and focused
2. **Styling**: Use StyleSheet.create() for performance
3. **Navigation**: Use React Navigation for all screen transitions
4. **State Management**: Use React hooks for local state
5. **Performance**: Optimize FlatList usage for large datasets
6. **Accessibility**: Include accessibility labels and hints

## Contributing

1. Follow the existing code style and structure
2. Add TypeScript types for all new components
3. Test on both iOS and Android devices
4. Update documentation for new features

## License

This project is licensed under the MIT License.