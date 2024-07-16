import { theme } from '~/theme';
export default defineAppConfig({
    theme,
    ui: {
      button: {
        default: {
          color: 'blue'
        }
      },
      notifications: {
        // Show toasts at the top right of the screen
        position: 'top-0 bottom-auto'
      },
      primary: 'blue',
      
    }
  })
  