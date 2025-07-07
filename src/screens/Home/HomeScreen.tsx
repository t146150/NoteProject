import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { CATEGORIES, Note } from '../../types/NoteTypes';
import CategorySection from '../../components/CategorySection';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenHeader from '../../components/ScreenHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNotes } from '../../context/NotesContext';
import { RootStackParamList } from '../../types/RootStackParamsLists';
import { openNoteInBrowser } from './utils';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { getTopNotesByCategory } = useNotes();

  return (
    <ScreenHeader
      customHeader={
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity style={styles.headerIconBtn} onPress={() => navigation.navigate('Settings')}>
            <Icon name="settings" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.recentRow}>
        <View style={{ marginRight: 6 }}>
          <Icon name="access-time" size={18} color="#b388ff" />
        </View>
        <Text style={styles.recentText}>Recently created notes</Text>
      </View>
      <ScrollView style={styles.container}>
        {CATEGORIES.map((cat) => {
          const catNotes = getTopNotesByCategory(cat);
          if (catNotes.length === 0) return null;
          return (
            <CategorySection
              key={cat}
              category={cat}
              notes={catNotes}
              onNotePress={openNoteInBrowser}
            />
          );
        })}
      </ScrollView>
    </ScreenHeader>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headerIconBtn: {
    padding: 6,
    borderRadius: 20,
  },
  recentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 8,
    marginTop: 18,
  },
  recentText: {
    color: '#b388ff',
    fontSize: 15,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
