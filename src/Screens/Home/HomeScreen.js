/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Linking, ScrollView, Animated, Dimensions  } from 'react-native';
import React, { useEffect, useRef, useState, useContext  } from 'react';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../../Components/Button/GradientButton.js';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import COLORS from '../../Constants/Colors.js';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import VideoPlayer from '../../Components/Video/VideoPlayer.js';
import Button from '../../Components/Button/Button.js'; 
import BeforeRegistrationModal from '../../Components/Modal/MemberLogin/BeforeRegistrationModal.js';
import AfterRegistrationModal from '../../Components/Modal/MemberLogin/AfterRegistrationModal.js';

import { GlobalContext } from '../../Components/GlobalContext';
import WebView from 'react-native-webview';

const HomeScreen = () => {
  
  const { extraData } = useContext(GlobalContext);
  const appSetting = extraData.appSetting;
  const userDetail = extraData.userDetail;


  
  const navigation = useNavigation();
  const opacity = useRef(new Animated.Value(1)).current;  

  const [isBeforeRegisterModalVisible, setIsBeforeRegisterModalVisible] = useState(false);
  const [isAfterRegisterModalVisible, setIsAfterRegisterModalVisible] = useState(false);

  

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, { 
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <Text style={[styles.heading, { fontFamily: 'Cambria', lineHeight: 25 }]}><Text style={{ color: COLORS.peru }}>TGC</Text> HINDI BIBLE STUDY</Text>

      <View style={styles.starContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Animated.Text style={{ opacity, fontSize: 16, color: 'red' }}>★</Animated.Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <GradientButton
          title="Subscribers"
          height="30"
          width="26%"
          gradientType="yellow"
          borderRadius={5}
        />
        <View style={styles.subscriber}>
          <Text style={styles.subscriberText}>123456</Text>
        </View>
        <GradientButton
          title="Latest News"
          height="30"
          width="28%"
          gradientType="blue"
          borderRadius={5}
          onPress={() => navigation.navigate('LatestNews')}
        />
        <GradientButton
          title="Contact Us"
          height="30"
          width="25%"
          gradientType="green"
          borderRadius={5}
          onPress={() => navigation.navigate('ContactUs')}
        />
      </View>

      <View style={styles.emojiContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 37 }}>
          <View style={styles.emojiBackground}>
            <Text style={styles.emoji}>❤️ 20</Text>
          </View>
          <View style={styles.emojiBackground}>
            <Text style={styles.emoji}>👍 20</Text>
          </View>
          <Text style={[styles.text, { marginTop: 0 }]}>26/03/2025</Text>
        </View>
      </View>

      <View style={styles.priceButton}>
        <Button
          title={appSetting.detail.fees_string}
          height="40"
          width="50%"
          backgroundColor={BACKGROUND_COLORS.darkRed}
          color="#ffff00"
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          borderColor="#ffff00"
          borderWidth={4}
        />
      </View>

      <View style={styles.videoPlayer}>
        
      <WebView
        style={styles.webviewVideo}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: `https://www.youtube.com/embed/${appSetting.intro_video.video}` }}
      />
      


      
          {/* <VideoPlayer 
            videoSource={{uri: appSetting.intro_video}}
            thumbnail={require('../../Assets/videoThumbnail.jpeg')}
            frameSource={require('../../Assets/videoFrame.jpeg')}
          /> */}


      </View>

      <View style={styles.button}>
        <GradientButton
          title="1 Day Free Trial"
          title2="Ek Din Ka Free Trial"
          height="50"
          width="50%"
          gradientType="orange"
          color={COLORS.white}
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          onPress={() => navigation.navigate('OneDayFreeTrial')}
        />
      </View>

      <View style={styles.button}>
        <GradientButton
          title="Your Contribution"
          title2="Aapka Arthik Yogdan"
          height="50"
          width="50%"
          gradientType="orange"
          color={COLORS.white}
          borderRadius={5}
          fontSize={15}
          fontWeight="500"
          onPress={() => navigation.navigate('YourContributionHome')}
        />
      </View>

      

      {
        (userDetail)? 
          <View style={styles.button}>
            <GradientButton
              title="Menu"
              height="50"
              width="50%"
              gradientType="orange"
              color={COLORS.white}
              borderRadius={5}
              fontSize={15}
              fontWeight="500"
              onPress={() => navigation.navigate('Category')}
              // onPress={() => setIsBeforeRegisterModalVisible(true)}
            />
          </View>
        :
        <>
          <View style={styles.button}>
          <GradientButton
            title="New Sign Up"
            height="50"
            width="50%"
            gradientType="orange"
            color={COLORS.white}
            borderRadius={5}
            fontSize={15}
            fontWeight="500"
            onPress={() => setIsAfterRegisterModalVisible(true)}
          />
        </View>
          <View style={styles.button}>
            <GradientButton
              title="Member Log In"
              height="50"
              width="50%"
              gradientType="orange"
              color={COLORS.white}
              borderRadius={5}
              fontSize={15}
              fontWeight="500"
              onPress={() => navigation.navigate('Login')}
              // onPress={() => setIsBeforeRegisterModalVisible(true)}
            />
          </View>
          </>
          
      }
      
        



      <View style={[styles.button, { marginBottom: 10 }]}>
        <GradientButton
          title="hindibiblestudy.com"
          height="35"
          width="60%"
          gradientType="blue"
          color={COLORS.white}
          borderRadius={5}
          fontSize={16}
          fontWeight="500"
          onPress={() => Linking.openURL('https://hindibiblestudy.com')}
        />
      </View>

      <BeforeRegistrationModal
        visible={isBeforeRegisterModalVisible}
        onClose={() => setIsBeforeRegisterModalVisible(false)}
      />

      <AfterRegistrationModal
        visible={isAfterRegisterModalVisible}
        onClose={() => setIsAfterRegisterModalVisible(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLORS.primary,
  },
  topBar: {
    marginBottom: 5,
    marginTop: 10,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.deepMossGreen,
    textShadowRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
    marginHorizontal: 10,
  },
  subscriber: {
    backgroundColor: BACKGROUND_COLORS.white,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5,
    marginLeft: -15,
  },
  subscriberText: {
    color: '#333',
    fontSize: 14,
  },
  button: {
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoPlayer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  emojiContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  emojiBackground: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 12,
  },
  text: {
    fontSize: 14,
  },
  starContainer: {
    flexDirection: 'row',
    marginLeft: 235,
  },
  priceButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  webviewVideo: {
    // height: (Dimensions.get('window').width * 9) / 16,
    height:180,
    width: '100%',
    width:'80%',
    margin:'auto'
  },
});

export default HomeScreen;
