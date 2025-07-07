import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MAX_HOME_NOTE_PREVIEW_LENGTH } from '../constants';

interface NoteCardProps {
  content: string;
  onPress?: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ content, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardText} ellipsizeMode="tail" numberOfLines={1} maxLength={MAX_HOME_NOTE_PREVIEW_LENGTH}>{content}</Text>
    <Icon name="chevron-right" size={24} color="#e040fb" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
});

export default NoteCard; 