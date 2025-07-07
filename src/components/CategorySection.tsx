import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NoteCard from './NoteCard';
import { Note, Category } from '../types/NoteTypes';
import { MAX_NOTE_CONTENT_LENGTH } from '../constants';

const categoryIcons: Record<Category, string> = {
  'Work and Study': 'edit',
  'Life': 'room-service',
  'Health and Well-being': 'spa',
};

interface CategorySectionProps {
  category: Category;
  notes: Note[];
  onNotePress?: (note: Note) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, notes, onNotePress }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <View style={{ marginRight: 8 }}>
        <Icon name={categoryIcons[category]} size={22} color="#b388ff" />
      </View>
      <Text style={styles.sectionTitle}>{category.replace('Well-being', 'wellness')}</Text>
    </View>
    {notes.map((note) => (
      <NoteCard
        key={note.id}
        content={note.content.slice(0, MAX_NOTE_CONTENT_LENGTH)}
        onPress={() => onNotePress?.(note)}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});

export default CategorySection; 