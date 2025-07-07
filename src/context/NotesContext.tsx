import React, {createContext, useContext, useState, useEffect, useCallback, useMemo} from 'react';
import {MMKV} from 'react-native-mmkv';
import {Note, Category, CATEGORIES} from '../types/NoteTypes';
import {dummyNotes} from '../data/dummyNotes';
import { MAX_NOTE_CONTENT_LENGTH, MAX_NOTES_PER_CATEGORY } from '../constants';

const NOTES_STORAGE = new MMKV({id: 'app-notes-storage'});
const NOTES_KEY = 'userNotes';

interface NotesContextProps {
  notes: Note[];
  addNote: (category: Category, content: string) => void;
  deleteAllNotes: () => void;
  resetToDefault: () => void;
  getSummaryByCategory: (category: Category) => number;
  getTopNotesByCategory: (category: Category) => Note[];
}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

export const NotesProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    try {
      const stored = NOTES_STORAGE.getString(NOTES_KEY);
      if (stored) {
        console.log('Ifffff');
        setNotes(JSON.parse(stored));
      } else {
        console.log('Lần đầu khởi động app, sử dụng dummy data');
        // Lần đầu khởi động app, sử dụng dummy data
        setNotes(dummyNotes);
        NOTES_STORAGE.set(NOTES_KEY, JSON.stringify(dummyNotes));
      }
    } catch (e) {
      console.error('Failed to load notes:', e);
      // Nếu có lỗi, vẫn sử dụng dummy data
      setNotes(dummyNotes);
    }
  }, []);

  useEffect(() => {
    try {
      NOTES_STORAGE.set(NOTES_KEY, JSON.stringify(notes));
    } catch (e) {
      console.error('Failed to persist notes:', e);
    }
  }, [notes]);

  const addNote = useCallback((category: Category, content: string) => {
    const newNote: Note = {
      id: `${Date.now()}`,
      category,
      content: content.trim().slice(0, MAX_NOTE_CONTENT_LENGTH),
      createdAt: Date.now(),
    };
    setNotes(prev => [newNote, ...prev]);
  }, []);

  const deleteAllNotes = useCallback(() => {
    setNotes([]);
    try {
      NOTES_STORAGE.set(NOTES_KEY, JSON.stringify([]));
    } catch (e) {
      console.error('Failed to clear notes from storage:', e);
    }
  }, []);

  const resetToDefault = useCallback(() => {
    setNotes(dummyNotes);
    try {
      NOTES_STORAGE.set(NOTES_KEY, JSON.stringify(dummyNotes));
    } catch (e) {
      console.error('Failed to reset notes to default:', e);
    }
  }, []);

  // Cache được build một lần khi notes thay đổi
  const categoryData = useMemo(() => {
    const data: Record<Category, { topNotes: Note[]; count: number }> = {} as Record<Category, { topNotes: Note[]; count: number }>;
    CATEGORIES.forEach(cat => {
      const categoryNotes = notes.filter(note => note.category === cat);
      data[cat] = {
        topNotes: categoryNotes.sort((a, b) => b.createdAt - a.createdAt).slice(0, MAX_NOTES_PER_CATEGORY),
        count: categoryNotes.length
      };
    });
    return data;
  }, [notes]);

  const getSummaryByCategory = useCallback(
    (category: Category) => categoryData[category]?.count || 0,
    [categoryData],
  );

  const getTopNotesByCategory = useCallback(
    (category: Category) => {
      console.log(`getTopNotesByCategory(${category})`);
      return categoryData[category]?.topNotes || [];
    },
    [categoryData],
  );

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteAllNotes,
        resetToDefault,
        getSummaryByCategory,
        getTopNotesByCategory,
      }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}; 