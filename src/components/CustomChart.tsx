import _ from 'lodash';
import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DomainTuple } from 'victory-core';
import { VictoryChart, VictoryScatter } from 'victory-native';

type Domain = { x: DomainTuple; y: DomainTuple };

interface Props {
  data: { x: number; y: number }[];
  maxPoints?: number;
}

export class CustomChart extends React.Component<Props> {
  private entireDomain: Domain;

  constructor(props: Props) {
    super(props);
    console.log(
      'NAV TEST: CustomChart constructor, maxPoints:',
      props.maxPoints,
    );
    this.entireDomain = this.getEntireDomain(props);
  }

  getData() {
    const domain = this.entireDomain.x;
    const { data, maxPoints = data.length } = this.props;
    const filtered = data.filter((d) => d.x >= domain[0] && d.x <= domain[1]);

    if (filtered.length > maxPoints) {
      const k = Math.ceil(filtered.length / maxPoints);
      return filtered.filter((d, i) => i % k === 0);
    }
    return filtered;
  }

  getEntireDomain(props: Props) {
    const { data } = props;
    return {
      y: [_.minBy(data, (d) => d.y)?.y, _.maxBy(data, (d) => d.y)?.y],
      x: [data[0].x, _.last(data)?.x],
    } as Domain;
  }

  render() {
    const renderedData = this.getData();
    return (
      <View>
        <VictoryChart domain={this.entireDomain}>
          <VictoryScatter data={renderedData} />
        </VictoryChart>
        <Text style={styles.text}>rendering {renderedData.length} points</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
