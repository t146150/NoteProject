import { Note } from "@/types/NoteTypes";
import { Linking } from "react-native";
import { HTML_STATIC_UTL } from "./consts";

export const openNoteInBrowser = (note: Note) => {
    const noteData = encodeURIComponent(JSON.stringify({
      id: note.id,
      category: note.category,
      content: note.content,
      createdAt: note.createdAt
    }));
    // HTML_STATIC_UTL
    const url = `${HTML_STATIC_UTL}?data=${noteData}`;

    Linking.openURL(url);
  };
