import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenHeader from '../../components/ScreenHeader';
import { useNavigation } from '@react-navigation/native';
import { useNotes } from '../../context/NotesContext';

const settingsItems = [
  {
    icon: 'headset-mic',
    label: 'Online Customer',
    onPress: () => {},
  },
  {
    icon: 'description',
    label: 'User Agreement',
    onPress: () => {},
  },
  {
    icon: 'menu-book',
    label: 'Privacy Policy',
    onPress: () => {},
  },
  {
    icon: 'info',
    label: 'About Us',
    onPress: () => {},
  },
];

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();
  const { deleteAllNotes, resetToDefault } = useNotes();
  return (
    <ScreenHeader
      customHeader={
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-ios" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
      }
    >
      <View style={styles.listContainer}>
        {settingsItems.map((item, idx) => (
          <TouchableOpacity
            key={item.label}
            style={styles.item}
            onPress={item.onPress}
            activeOpacity={0.7}
          >
            <View style={styles.itemLeft}>
              <View style={{ marginRight: 16 }}>
                <Icon name={item.icon} size={26} color="#b388ff" />
              </View>
              <Text style={styles.itemLabel}>{item.label}</Text>
            </View>
            <Icon name="chevron-right" size={28} color="#e040fb" />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.resetBtn}
          labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
          onPress={() => {
            resetToDefault();
          }}
          contentStyle={{ height: 48 }}
        >
          Reset to Default
        </Button>
        <Button
          mode="contained"
          style={styles.deleteBtn}
          labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
          onPress={() => {
            deleteAllNotes();
          }}
          contentStyle={{ height: 48 }}
        >
          Delete All Notes
        </Button>
      </View>
    </ScreenHeader>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  backBtn: {
    marginRight: 8,
    padding: 4,
    borderRadius: 16,
  },
  listContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLabel: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    marginTop: 'auto',
    gap: 12,
  },
  resetBtn: {
    backgroundColor: '#b388ff',
    borderRadius: 24,
    width: '100%',
    elevation: 0,
    marginBottom: 20,
  },
  deleteBtn: {
    backgroundColor: '#ff4fa2',
    borderRadius: 24,
    width: '100%',
    elevation: 0,
  },
});

export default SettingsScreen; 