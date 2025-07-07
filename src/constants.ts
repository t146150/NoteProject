// App Constants
export const APP_CONSTANTS = {
  // Character limits
  MAX_NOTE_CONTENT_LENGTH: 200,
  MAX_HOME_NOTE_PREVIEW_LENGTH: 20,
  
  // Display limits
  MAX_NOTES_PER_CATEGORY: 3,
  
  // Timeouts and intervals
  LOCATION_INACTIVITY_TIMEOUT: 10 * 60 * 1000, // 10 minutes in milliseconds
  
  // Storage keys
  STORAGE_KEYS: {
    NOTES: 'notes',
    SETTINGS: 'settings',
  },
  
  // UI Constants
  UI: {
    BORDER_RADIUS: 8,
    PADDING: 16,
    MARGIN: 8,
  },
} as const;

// Export individual constants for easier imports
export const MAX_NOTE_CONTENT_LENGTH = APP_CONSTANTS.MAX_NOTE_CONTENT_LENGTH;
export const MAX_HOME_NOTE_PREVIEW_LENGTH = APP_CONSTANTS.MAX_HOME_NOTE_PREVIEW_LENGTH;
export const MAX_NOTES_PER_CATEGORY = APP_CONSTANTS.MAX_NOTES_PER_CATEGORY; 