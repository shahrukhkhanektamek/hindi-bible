import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import COLORS from '../../Constants/Colors.js';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import VideoPlayer from '../../Components/Video/VideoPlayer.js';

const LatestNewsScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.topSection}>
        <GradiantButton
          title="Log Out"
          height="27"
          width="25%"
          gradientType="red"
          borderRadius={5}
          fontWeight={500}
        />
        <GradiantButton
          title="Home"
          height="27"
          width="25%"
          gradientType="yellow"
          borderRadius={5}
          fontWeight={500}
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.videoContainer}>
        <Text style={styles.heading}>Latest News</Text>
        <View style={styles.videoPlayer}>
          <VideoPlayer
            videoSource={require('../../Assets/myvideo.mp4')}
            thumbnail={require('../../Assets/videoThumbnail.jpeg')}
            frameSource={require('../../Assets/videoFrame.jpeg')}
          />
        </View>
        <Text style={styles.description}>Following a hiker in a beautiful green forest with patches.</Text>
        <Text style={styles.description}>एक सुन्दर हरे भरे जंगल में एक यात्री का पीछा करते हुए।</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLORS.primary,
  },
  topBar: {
    marginTop: 25,
    marginBottom: 20,
  },
  topSection: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 16,
  },
  videoContainer: {
    backgroundColor: BACKGROUND_COLORS.deepBrown,
    marginHorizontal: 16,
    marginTop: 20,
    padding: 20,
    borderRadius: 5,
  },
  videoPlayer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  heading: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 500,
    fontSize: 18,
  },
  description: {
    color: COLORS.white,
    fontSize: 14,
    marginTop: 20,
  },
});

export default LatestNewsScreen;
