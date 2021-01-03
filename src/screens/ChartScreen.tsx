import { RouteProp } from '@react-navigation/native';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CustomChart } from '../components/CustomChart';
import { HomeStackParams } from '../navigation/navigatorParams';
import { Routes } from '../navigation/Routes';

const allData = _.range(0, 10, 0.001).map((x) => ({
  x: x,
  y: (Math.sin((Math.PI * x) / 2) * x) / 10,
}));

type CurrentRouteProp = RouteProp<HomeStackParams, Routes.Chart>;

interface Props {
  route: CurrentRouteProp;
}

export const ChartScreen = ({ route }: Props) => {
  const maxPoints = route.params?.maxPoints;

  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    console.log('NAV TEST: ChartScreen did mount');
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log('NAV TEST: ChartScreen did update', isMounted);
  }, [isMounted]);

  return (
    <View style={styles.container}>
      {isMounted ? (
        <CustomChart data={allData} maxPoints={maxPoints} />
      ) : (
        <View>
          <Text>Please wait, your chart is almost ready...</Text>
          <ActivityIndicator color="blue" size="large" />
        </View>
      )}
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
