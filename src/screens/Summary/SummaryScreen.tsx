import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import ScreenHeader from '../../components/ScreenHeader';
import { CATEGORIES, Category } from '../../types/NoteTypes';
import { useNotes } from '../../context/NotesContext';

const categoryAvatars: Record<Category, any> = {
  'Work and Study': require('../../assets/images/avatar_work.png'),
  'Life': require('../../assets/images/avatar_life.png'),
  'Health and Well-being': require('../../assets/images/avatar_health.png'),
};

const categoryDisplay: Record<Category, string> = {
  'Work and Study': 'Work and study',
  'Life': 'Home life',
  'Health and Well-being': 'Health and wellness',
};



const SummaryScreen: React.FC = () => {
  console.log('SummaryScreen');
  const { getSummaryByCategory } = useNotes();
  return (
    <ScreenHeader
      customHeader={
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Summary</Text>
          <Image source={require('../../assets/images/ic_robot.png')} style={styles.robotImg} resizeMode="contain" />
        </View>
      }
    >
      <View style={styles.summaryBox}>
        <View style={styles.summaryList}>
          {CATEGORIES.map((cat) => (
            <View key={cat} style={styles.categoryRow}>
              <View style={styles.avatarNameRow}>
                <Image source={categoryAvatars[cat]} style={styles.avatar} />
                <Text style={styles.catName}>{categoryDisplay[cat]}</Text>
                <Button
                  mode="contained"
                  style={styles.detailBtn}
                  labelStyle={styles.detailBtnLabel}
                  onPress={() => { }}
                  contentStyle={{ height: 36 }}
                >
                  Detail
                </Button>
              </View>
              <View style={styles.recordBox}>
                <Text style={styles.recordText}>
                  This topic has a total of {getSummaryByCategory(cat)} records.
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScreenHeader>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

  },
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  robotImg: {
    width: 78,
    height: 80,
    // marginTop: 16,
    marginRight: -8,
  },
  summaryBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
   
    flex: 1,
    // minHeight: '100%',
    // justifyContent: 'space-evenly',
  },
  summaryList : {
    padding: 16,
    flex: 0.7,
    justifyContent: 'space-evenly',
  },
  categoryRow: {
    marginBottom: 28,
  },
  avatarNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  catName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  detailBtn: {
    backgroundColor: '#ff4fa2',
    borderRadius: 18,
    minWidth: 80,
    elevation: 0,
    marginLeft: 8,
  },
  detailBtnLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  recordBox: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 16,
  },
  recordText: {
    color: '#bdb7d6',
    fontSize: 15,
  },
});

export default SummaryScreen;
