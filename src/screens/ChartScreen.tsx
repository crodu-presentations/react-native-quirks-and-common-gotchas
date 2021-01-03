import { RouteProp } from '@react-navigation/native';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CustomChart } from '../components/CustomChart';
import { RootStackParams } from '../navigation/RootStackParams';
import { Routes } from '../navigation/Routes';

const allData = _.range(0, 10, 0.001).map((x) => ({
  x: x,
  y: (Math.sin((Math.PI * x) / 2) * x) / 10,
}));

type CurrentRouteProp = RouteProp<RootStackParams, Routes.Chart>;

interface Props {
  route: CurrentRouteProp;
}

export const ChartScreen = ({ route }: Props) => {
  const maxPoints = route.params?.maxPoints;

  useEffect(() => {
    console.log('NAV TEST: ChartScreen did mount');
  }, []);

  return (
    <View style={styles.container}>
      <CustomChart data={allData} maxPoints={maxPoints} />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
