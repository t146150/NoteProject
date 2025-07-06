import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootTabParamList} from '../../types/RootTabParamsLists';
// import Icon from '@react-native-vector-icons/material-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TabBarIconProps {
  route: RouteProp<RootTabParamList, keyof RootTabParamList>;
  color: string;
  size: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({route, color, size}) => {
  let iconName: string;

  if (route.name === 'Home') {
    iconName = 'home';
  } else if (route.name === 'Summary') {
    iconName = 'list';
  } else {
    iconName = 'help';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
