import { StyleSheet } from 'react-native';

// Define the style types for better TypeScript support
interface Styles {
  title: any;
  container: any;
  button: any;
  text: any;
  header: any;
  card: any;
}

// Single StyleSheet.create with all styles
export const styles: Styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
});


export const buttonStyle = styles.button;
export const titleStyle = styles.title;
export const containerStyle = styles.container;
export const textStyle = styles.text;
export const headerStyle = styles.header;
export const cardStyle = styles.card;


// export type { Styles };

