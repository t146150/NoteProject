import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, MD3LightTheme, Text } from 'react-native-paper';
import { RootTabParamList } from './types/RootTabParamsLists';
import HomeScreen from './screens/Home/HomeScreen';
import SummaryScreen from './screens/Summary/SummaryScreen';
import AddNoteScreen from './screens/AddNote/AddNoteScreen';
import EmptyScreen from './screens/EmptyScreen';
import { View, StatusBar, Image, TouchableOpacity } from 'react-native';
import TabBarIcon from './components/TabBarIcon/TabBarIcon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { buttonStyle } from './style'; // nếu dùng đường dẫn tương đối
import { useNavigation } from '@react-navigation/native';
import SettingsScreen from './screens/Settings/SettingsScreen';
import { NotesProvider } from './context/NotesContext';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator();

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200EE',
    accent: '#03DAC6',
  },
};

function TabNavigator() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1D0837',
          height: 75 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 8, // Thêm padding top để căn giữa tốt hơn

          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarItemStyle: {
          // Căn giữa từng tab item
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 0, // Loại bỏ padding mặc định
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%' // Đảm bảo icon chiếm toàn bộ chiều cao
            }}>
              <Image
                source={focused ? require('./assets/images/ic_menu_home_selected.png') : require('./assets/images/ic_menu_home_unselect.png')}
                style={{ width: 50, height: 47 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="AddNote"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{

                justifyContent: 'center',
                alignItems: 'center',

                width: '100%',
                height: '100%',
                borderRadius: 30,
              }}
              onPress={() => navigation.navigate('AddNote')}
            >
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%' // Đảm bảo icon chiếm toàn bộ chiều cao
              }}>
                <Image
                  source={require('./assets/images/ic_menu_add_note.png')}
                  style={{ width: 35, height: 35 }}
                  resizeMode="contain"
                />
              </View>

            </TouchableOpacity>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('AddNote');
          },
        })}
      />

      <Tab.Screen
        name="Summary"
        component={SummaryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%' // Đảm bảo icon chiếm toàn bộ chiều cao
            }}>
              <Image
                source={focused ? require('./assets/images/ic_menu_summary_selected.png') : require('./assets/images/ic_menu_summary_unselect.png')}
                style={{ width: 50, height: 47 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>

  );
}

const Content = () => {
  return (
    <NotesProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#351159" barStyle="light-content" />

        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddNote"
            component={AddNoteScreen}
            options={{ presentation: 'fullScreenModal', headerShown: false, }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>

  );
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Content />
    </PaperProvider>
  );
}
