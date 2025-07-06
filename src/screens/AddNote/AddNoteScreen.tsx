import React, { useState, useRef } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, Button, Menu, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScreenHeader from '../../components/ScreenHeader';
import { CATEGORIES, Category } from '../../types/NoteTypes';
import { useNavigation } from '@react-navigation/native';

const AddNoteScreen: React.FC = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [content, setContent] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnchor = useRef<View>(null);

  return (
    <PaperProvider>
      <ScreenHeader
        customHeader={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-ios" size={22} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>New note</Text>
          </View>
        }
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 32 : 0}
        >
          <View style={styles.formContainer}>
            {/* Dropdown chọn category */}
            <View ref={menuAnchor}>
              <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchor={
                  <TouchableOpacity
                    style={styles.dropdown}
                    onPress={() => setMenuVisible(true)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.dropdownText}>
                      {category ? category : 'Choose a category'}
                    </Text>
                    <Icon name="keyboard-arrow-down" size={24} color="#b388ff" />
                  </TouchableOpacity>
                }
                contentStyle={styles.menuContent}
              >
                {CATEGORIES.map((cat) => (
                  <Menu.Item
                    key={cat}
                    onPress={() => {
                      setCategory(cat);
                      setMenuVisible(false);
                    }}
                    title={cat}
                    titleStyle={styles.menuItemText}
                  />
                ))}
              </Menu>
            </View>
            {/* Textarea nhập nội dung */}
            <TextInput
              style={styles.textarea}
              placeholder="Please input note content"
              placeholderTextColor="#b388ff"
              value={content}
              onChangeText={setContent}
              multiline
              maxLength={200}
            />
          </View>
          {/* Nút Save stick dưới cùng */}
          <View style={styles.saveBtnContainer}>
            <Button
              mode="contained"
              style={styles.saveBtn}
              labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
              onPress={() => {
                // TODO: Save note
              }}
              contentStyle={{ height: 48 }}
            >
              Save
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ScreenHeader>
    </PaperProvider>
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
  formContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  dropdown: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  dropdownText: {
    color: '#fff',
    fontSize: 16,
  },
  menuContent: {
    backgroundColor: 'rgba(40,20,60,0.98)',
    borderRadius: 12,
    marginTop: 4,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 16,
  },
  textarea: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 14,
    color: '#fff',
    fontSize: 16,
    minHeight: 180,
    padding: 20,
    textAlignVertical: 'top',
    marginBottom: 24,
  },
  saveBtnContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: 'transparent',
  },
  saveBtn: {
    backgroundColor: '#ff4fa2',
    borderRadius: 24,
    width: '100%',
    elevation: 0,
  },
});

export default AddNoteScreen;
