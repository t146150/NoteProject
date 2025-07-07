import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: '#1B284F' }}>
      <View style={[styles.headerSolid, { paddingTop: insets.top }]}>{customHeader}</View>
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
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 18,
    backgroundColor: '#280841',

    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
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