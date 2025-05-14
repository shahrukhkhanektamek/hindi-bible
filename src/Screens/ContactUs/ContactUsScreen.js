/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React from 'react';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../Constants/Colors.js';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';

const ContactUsScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.homeButton}>
        <GradiantButton
          title="Home"
          height="30"
          width="25%"
          gradientType="yellow"
          borderRadius={5}
          fontSize={16}
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.contactSection}>
        <View style={[styles.section, { marginTop: 10 }]}>
          <Text style={styles.text}>कृपया कॉल न करें</Text>
          <Text style={styles.text}>Please Do Not Call</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>केवल व्हाट्सएप या ईमेल करें</Text>
          <Text style={styles.text}>ONLY WHATSAPP OR EMAIL</Text>
        </View>

        <View style={[styles.section, { marginBottom: 40 }]}>
          <Text style={styles.text}>WHATSAPP : 7838989070</Text>
          <Text style={styles.text}>EMAIL : hindibiblestudy.com@gmail.com</Text>
        </View>
      </View>

      <View style={styles.feedbackButton}>
        <GradiantButton
          title="Feedback / Enquiry"
          height="40"
          width="45%"
          gradientType="orange"
          borderRadius={5}
          fontSize={14}
          onPress={() => navigation.navigate('Feedback')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLORS.primary,
  },
  topBar: {
    marginTop: 25,
    marginBottom: 30,
  },
  homeButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 60,
  },
  contactSection: {
    backgroundColor: BACKGROUND_COLORS.darkRed,
    marginTop: 30,
  },
  section: {
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.white,
  },
  feedbackButton: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContactUsScreen;
