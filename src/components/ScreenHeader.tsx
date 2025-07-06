import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GRADIENT_COLORS = [
  '#1B284F', // 14%
  '#351159', // 48%
  '#421C45', // 74%
  '#3B184E', // 100%
];

interface ScreenHeaderProps {
  customHeader: React.ReactNode;
  children: React.ReactNode;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ customHeader, children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1B284F' }}>
      <View style={styles.headerSolid}>{customHeader}</View>
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientContent}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSolid: {
    paddingTop: 36,
    paddingHorizontal: 20,
    paddingBottom: 8,
    backgroundColor: '#351159',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    zIndex: 2,
  },
  gradientContent: {
    flex: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingTop: 0,
    zIndex: 1,
  },
});

export default ScreenHeader; 