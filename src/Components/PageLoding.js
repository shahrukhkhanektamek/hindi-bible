import React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const { width } = Dimensions.get('window');


const PageLoding = ({ extraData }) => {


  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <SkeletonPlaceholder borderRadius={4}>
        {/* Top large block */}
        <View style={{ width: '100%', height: 80, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            <View style={{ width: 40, height: 40, borderRadius: 20 }} />
            <View style={{ marginLeft: 10 }}>
              <View style={{ width: 180, height: 10, marginBottom: 6 }} />
              <View style={{ width: 120, height: 10 }} />
            </View>
          </View>
        </View>

        {/* 3 small cards in a row */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {[1, 2, 3].map((item, index) => (
            <View key={index} style={{ width: (width - 48) / 3, height: 100, padding: 10 }}>
              <View style={{ width: 30, height: 30, borderRadius: 15, marginBottom: 8 }} />
              <View style={{ width: '100%', height: 10, marginBottom: 6 }} />
              <View style={{ width: '60%', height: 10 }} />
            </View>
          ))}
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};


export default PageLoding;
