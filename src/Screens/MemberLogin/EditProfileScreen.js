/* eslint-disable no-extra-semi */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import TopBarPrimary from '../../Components/TopBar/TopBarPrimary.js';
import GradiantButton from '../../Components/Button/GradientButton.js';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import BACKGROUND_COLORS from '../../Constants/BackGroundColors.js';
import COLORS from '../../Constants/Colors.js';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('+91');
  const [countryName, setCountryName] = useState('India');
  const [mobile, setMobile] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 1000,
      maxHeight: 1000,
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User canceled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      };
    });
  };

  const dialingCodes = [
    { label: "+1", value: "+1" },
    { label: "+7", value: "+7" },
    { label: "+20", value: "+20" },
    { label: "+27", value: "+27" },
    { label: "+30", value: "+30" },
    { label: "+31", value: "+31" },
    { label: "+32", value: "+32" },
    { label: "+33", value: "+33" },
    { label: "+34", value: "+34" },
    { label: "+36", value: "+36" },
    { label: "+39", value: "+39" },
    { label: "+40", value: "+40" },
    { label: "+41", value: "+41" },
    { label: "+43", value: "+43" },
    { label: "+44", value: "+44" },
    { label: "+45", value: "+45" },
    { label: "+46", value: "+46" },
    { label: "+47", value: "+47" },
    { label: "+48", value: "+48" },
    { label: "+49", value: "+49" },
    { label: "+51", value: "+51" },
    { label: "+52", value: "+52" },
    { label: "+53", value: "+53" },
    { label: "+54", value: "+54" },
    { label: "+55", value: "+55" },
    { label: "+56", value: "+56" },
    { label: "+57", value: "+57" },
    { label: "+58", value: "+58" },
    { label: "+60", value: "+60" },
    { label: "+61", value: "+61" },
    { label: "+62", value: "+62" },
    { label: "+63", value: "+63" },
    { label: "+64", value: "+64" },
    { label: "+65", value: "+65" },
    { label: "+66", value: "+66" },
    { label: "+81", value: "+81" },
    { label: "+82", value: "+82" },
    { label: "+84", value: "+84" },
    { label: "+86", value: "+86" },
    { label: "+90", value: "+90" },
    { label: "+91", value: "+91" },
    { label: "+92", value: "+92" },
    { label: "+93", value: "+93" },
    { label: "+94", value: "+94" },
    { label: "+95", value: "+95" },
    { label: "+98", value: "+98" },
    { label: "+211", value: "+211" },
    { label: "+212", value: "+212" },
    { label: "+213", value: "+213" },
    { label: "+216", value: "+216" },
    { label: "+218", value: "+218" },
    { label: "+220", value: "+220" },
    { label: "+221", value: "+221" },
    { label: "+222", value: "+222" },
    { label: "+223", value: "+223" },
    { label: "+224", value: "+224" },
    { label: "+225", value: "+225" },
    { label: "+226", value: "+226" },
    { label: "+227", value: "+227" },
    { label: "+228", value: "+228" },
    { label: "+229", value: "+229" },
    { label: "+230", value: "+230" },
    { label: "+231", value: "+231" },
    { label: "+232", value: "+232" },
    { label: "+233", value: "+233" },
    { label: "+234", value: "+234" },
    { label: "+235", value: "+235" },
    { label: "+236", value: "+236" },
    { label: "+237", value: "+237" },
    { label: "+238", value: "+238" },
    { label: "+239", value: "+239" },
    { label: "+240", value: "+240" },
    { label: "+241", value: "+241" },
    { label: "+242", value: "+242" },
    { label: "+243", value: "+243" },
    { label: "+244", value: "+244" },
    { label: "+245", value: "+245" },
    { label: "+246", value: "+246" },
    { label: "+248", value: "+248" },
    { label: "+249", value: "+249" },
    { label: "+250", value: "+250" },
    { label: "+251", value: "+251" },
    { label: "+252", value: "+252" },
    { label: "+253", value: "+253" },
    { label: "+254", value: "+254" },
    { label: "+255", value: "+255" },
    { label: "+256", value: "+256" },
    { label: "+257", value: "+257" },
    { label: "+258", value: "+258" },
    { label: "+260", value: "+260" },
    { label: "+261", value: "+261" },
    { label: "+262", value: "+262" },
    { label: "+263", value: "+263" },
    { label: "+264", value: "+264" },
    { label: "+265", value: "+265" },
    { label: "+266", value: "+266" },
    { label: "+267", value: "+267" },
    { label: "+268", value: "+268" },
    { label: "+269", value: "+269" },
    { label: "+290", value: "+290" },
    { label: "+291", value: "+291" },
    { label: "+297", value: "+297" },
    { label: "+298", value: "+298" },
    { label: "+299", value: "+299" },
    { label: "+350", value: "+350" },
    { label: "+351", value: "+351" },
    { label: "+352", value: "+352" },
    { label: "+353", value: "+353" },
    { label: "+354", value: "+354" },
    { label: "+355", value: "+355" },
    { label: "+356", value: "+356" },
    { label: "+357", value: "+357" },
    { label: "+358", value: "+358" },
    { label: "+359", value: "+359" },
    { label: "+370", value: "+370" },
    { label: "+371", value: "+371" },
    { label: "+372", value: "+372" },
    { label: "+373", value: "+373" },
    { label: "+374", value: "+374" },
    { label: "+375", value: "+375" },
    { label: "+376", value: "+376" },
    { label: "+377", value: "+377" },
    { label: "+378", value: "+378" },
    { label: "+379", value: "+379" },
    { label: "+380", value: "+380" },
    { label: "+381", value: "+381" },
    { label: "+382", value: "+382" },
    { label: "+383", value: "+383" },
    { label: "+385", value: "+385" },
    { label: "+386", value: "+386" },
    { label: "+387", value: "+387" },
    { label: "+389", value: "+389" },
    { label: "+420", value: "+420" },
    { label: "+421", value: "+421" },
    { label: "+423", value: "+423" },
    { label: "+500", value: "+500" },
    { label: "+501", value: "+501" },
    { label: "+502", value: "+502" },
    { label: "+503", value: "+503" },
    { label: "+504", value: "+504" },
    { label: "+505", value: "+505" },
    { label: "+506", value: "+506" },
    { label: "+507", value: "+507" },
    { label: "+508", value: "+508" },
    { label: "+509", value: "+509" },
    { label: "+590", value: "+590" },
    { label: "+591", value: "+591" },
    { label: "+592", value: "+592" },
    { label: "+593", value: "+593" },
    { label: "+594", value: "+594" },
    { label: "+595", value: "+595" },
    { label: "+596", value: "+596" },
    { label: "+597", value: "+597" },
    { label: "+598", value: "+598" },
    { label: "+599", value: "+599" },
    { label: "+670", value: "+670" },
    { label: "+672", value: "+672" },
    { label: "+673", value: "+673" },
    { label: "+674", value: "+674" },
    { label: "+675", value: "+675" },
    { label: "+676", value: "+676" },
    { label: "+677", value: "+677" },
    { label: "+678", value: "+678" },
    { label: "+679", value: "+679" },
    { label: "+680", value: "+680" },
    { label: "+681", value: "+681" },
    { label: "+682", value: "+682" },
    { label: "+683", value: "+683" },
    { label: "+685", value: "+685" },
    { label: "+686", value: "+686" },
    { label: "+687", value: "+687" },
    { label: "+688", value: "+688" },
    { label: "+689", value: "+689" },
    { label: "+690", value: "+690" },
    { label: "+691", value: "+691" },
    { label: "+692", value: "+692" },
    { label: "+850", value: "+850" },
    { label: "+852", value: "+852" },
    { label: "+853", value: "+853" },
    { label: "+855", value: "+855" },
    { label: "+856", value: "+856" },
    { label: "+870", value: "+870" },
    { label: "+871", value: "+871" },
    { label: "+872", value: "+872" },
    { label: "+873", value: "+873" },
    { label: "+874", value: "+874" },
    { label: "+878", value: "+878" },
    { label: "+880", value: "+880" },
    { label: "+881", value: "+881" },
    { label: "+882", value: "+882" },
    { label: "+883", value: "+883" },
    { label: "+886", value: "+886" },
    { label: "+888", value: "+888" },
    { label: "+960", value: "+960" },
    { label: "+961", value: "+961" },
    { label: "+962", value: "+962" },
    { label: "+963", value: "+963" },
    { label: "+964", value: "+964" },
    { label: "+965", value: "+965" },
    { label: "+966", value: "+966" },
    { label: "+967", value: "+967" },
    { label: "+968", value: "+968" },
    { label: "+970", value: "+970" },
    { label: "+971", value: "+971" },
    { label: "+972", value: "+972" },
    { label: "+973", value: "+973" },
    { label: "+974", value: "+974" },
    { label: "+975", value: "+975" },
    { label: "+976", value: "+976" },
    { label: "+977", value: "+977" },
    { label: "+979", value: "+979" },
    { label: "+992", value: "+992" },
    { label: "+993", value: "+993" },
    { label: "+994", value: "+994" },
    { label: "+995", value: "+995" },
    { label: "+996", value: "+996" },
    { label: "+998", value: "+998" },
  ];

  const countries = [
    { label: "Afghanistan", value: "Afghanistan" },
    { label: "Albania", value: "Albania" },
    { label: "Algeria", value: "Algeria" },
    { label: "Andorra", value: "Andorra" },
    { label: "Angola", value: "Angola" },
    { label: "Antigua and Barbuda", value: "Antigua and Barbuda" },
    { label: "Argentina", value: "Argentina" },
    { label: "Armenia", value: "Armenia" },
    { label: "Australia", value: "Australia" },
    { label: "Austria", value: "Austria" },
    { label: "Azerbaijan", value: "Azerbaijan" },
    { label: "Bahamas", value: "Bahamas" },
    { label: "Bahrain", value: "Bahrain" },
    { label: "Bangladesh", value: "Bangladesh" },
    { label: "Barbados", value: "Barbados" },
    { label: "Belarus", value: "Belarus" },
    { label: "Belgium", value: "Belgium" },
    { label: "Belize", value: "Belize" },
    { label: "Benin", value: "Benin" },
    { label: "Bhutan", value: "Bhutan" },
    { label: "Bolivia", value: "Bolivia" },
    { label: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
    { label: "Botswana", value: "Botswana" },
    { label: "Brazil", value: "Brazil" },
    { label: "Brunei", value: "Brunei" },
    { label: "Bulgaria", value: "Bulgaria" },
    { label: "Burkina Faso", value: "Burkina Faso" },
    { label: "Burundi", value: "Burundi" },
    { label: "Cabo Verde", value: "Cabo Verde" },
    { label: "Cambodia", value: "Cambodia" },
    { label: "Cameroon", value: "Cameroon" },
    { label: "Canada", value: "Canada" },
    { label: "Central African Republic", value: "Central African Republic" },
    { label: "Chad", value: "Chad" },
    { label: "Chile", value: "Chile" },
    { label: "China", value: "China" },
    { label: "Colombia", value: "Colombia" },
    { label: "Comoros", value: "Comoros" },
    { label: "Congo (Brazzaville)", value: "Congo (Brazzaville)" },
    { label: "Congo (Kinshasa)", value: "Congo (Kinshasa)" },
    { label: "Costa Rica", value: "Costa Rica" },
    { label: "Côte d'Ivoire", value: "Côte d'Ivoire" },
    { label: "Croatia", value: "Croatia" },
    { label: "Cuba", value: "Cuba" },
    { label: "Cyprus", value: "Cyprus" },
    { label: "Czechia", value: "Czechia" },
    { label: "Denmark", value: "Denmark" },
    { label: "Djibouti", value: "Djibouti" },
    { label: "Dominica", value: "Dominica" },
    { label: "Dominican Republic", value: "Dominican Republic" },
    { label: "Ecuador", value: "Ecuador" },
    { label: "Egypt", value: "Egypt" },
    { label: "El Salvador", value: "El Salvador" },
    { label: "Equatorial Guinea", value: "Equatorial Guinea" },
    { label: "Eritrea", value: "Eritrea" },
    { label: "Estonia", value: "Estonia" },
    { label: "Eswatini", value: "Eswatini" },
    { label: "Ethiopia", value: "Ethiopia" },
    { label: "Fiji", value: "Fiji" },
    { label: "Finland", value: "Finland" },
    { label: "France", value: "France" },
    { label: "Gabon", value: "Gabon" },
    { label: "Gambia", value: "Gambia" },
    { label: "Georgia", value: "Georgia" },
    { label: "Germany", value: "Germany" },
    { label: "Ghana", value: "Ghana" },
    { label: "Greece", value: "Greece" },
    { label: "Grenada", value: "Grenada" },
    { label: "Guatemala", value: "Guatemala" },
    { label: "Guinea", value: "Guinea" },
    { label: "Guinea-Bissau", value: "Guinea-Bissau" },
    { label: "Guyana", value: "Guyana" },
    { label: "Haiti", value: "Haiti" },
    { label: "Honduras", value: "Honduras" },
    { label: "Hungary", value: "Hungary" },
    { label: "Iceland", value: "Iceland" },
    { label: "India", value: "India" },
    { label: "Indonesia", value: "Indonesia" },
    { label: "Iran", value: "Iran" },
    { label: "Iraq", value: "Iraq" },
    { label: "Ireland", value: "Ireland" },
    { label: "Israel", value: "Israel" },
    { label: "Italy", value: "Italy" },
    { label: "Jamaica", value: "Jamaica" },
    { label: "Japan", value: "Japan" },
    { label: "Jordan", value: "Jordan" },
    { label: "Kazakhstan", value: "Kazakhstan" },
    { label: "Kenya", value: "Kenya" },
    { label: "Kiribati", value: "Kiribati" },
    { label: "Kuwait", value: "Kuwait" },
    { label: "Kyrgyzstan", value: "Kyrgyzstan" },
    { label: "Laos", value: "Laos" },
    { label: "Latvia", value: "Latvia" },
    { label: "Lebanon", value: "Lebanon" },
    { label: "Lesotho", value: "Lesotho" },
    { label: "Liberia", value: "Liberia" },
    { label: "Libya", value: "Libya" },
    { label: "Liechtenstein", value: "Liechtenstein" },
    { label: "Lithuania", value: "Lithuania" },
    { label: "Luxembourg", value: "Luxembourg" },
    { label: "Madagascar", value: "Madagascar" },
    { label: "Malawi", value: "Malawi" },
    { label: "Malaysia", value: "Malaysia" },
    { label: "Maldives", value: "Maldives" },
    { label: "Mali", value: "Mali" },
    { label: "Malta", value: "Malta" },
    { label: "Marshall Islands", value: "Marshall Islands" },
    { label: "Mauritania", value: "Mauritania" },
    { label: "Mauritius", value: "Mauritius" },
    { label: "Mexico", value: "Mexico" },
    { label: "Micronesia", value: "Micronesia" },
    { label: "Moldova", value: "Moldova" },
    { label: "Monaco", value: "Monaco" },
    { label: "Mongolia", value: "Mongolia" },
    { label: "Montenegro", value: "Montenegro" },
    { label: "Morocco", value: "Morocco" },
    { label: "Mozambique", value: "Mozambique" },
    { label: "Myanmar", value: "Myanmar" },
    { label: "Namibia", value: "Namibia" },
    { label: "Nauru", value: "Nauru" },
    { label: "Nepal", value: "Nepal" },
    { label: "Netherlands", value: "Netherlands" },
    { label: "New Zealand", value: "New Zealand" },
    { label: "Nicaragua", value: "Nicaragua" },
    { label: "Niger", value: "Niger" },
    { label: "Nigeria", value: "Nigeria" },
    { label: "North Korea", value: "North Korea" },
    { label: "North Macedonia", value: "North Macedonia" },
    { label: "Norway", value: "Norway" },
    { label: "Oman", value: "Oman" },
    { label: "Pakistan", value: "Pakistan" },
    { label: "Palau", value: "Palau" },
    { label: "Palestine", value: "Palestine" },
    { label: "Panama", value: "Panama" },
    { label: "Papua New Guinea", value: "Papua New Guinea" },
    { label: "Paraguay", value: "Paraguay" },
    { label: "Peru", value: "Peru" },
    { label: "Philippines", value: "Philippines" },
    { label: "Poland", value: "Poland" },
    { label: "Portugal", value: "Portugal" },
    { label: "Qatar", value: "Qatar" },
    { label: "Romania", value: "Romania" },
    { label: "Russia", value: "Russia" },
    { label: "Rwanda", value: "Rwanda" },
    { label: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
    { label: "Saint Lucia", value: "Saint Lucia" },
    { label: "Saint Vincent and the Grenadines", value: "Saint Vincent and the Grenadines" },
    { label: "Samoa", value: "Samoa" },
    { label: "San Marino", value: "San Marino" },
    { label: "Sao Tome and Principe", value: "Sao Tome and Principe" },
    { label: "Saudi Arabia", value: "Saudi Arabia" },
    { label: "Senegal", value: "Senegal" },
    { label: "Serbia", value: "Serbia" },
    { label: "Seychelles", value: "Seychelles" },
    { label: "Sierra Leone", value: "Sierra Leone" },
    { label: "Singapore", value: "Singapore" },
    { label: "Slovakia", value: "Slovakia" },
    { label: "Slovenia", value: "Slovenia" },
    { label: "Solomon Islands", value: "Solomon Islands" },
    { label: "Somalia", value: "Somalia" },
    { label: "South Africa", value: "South Africa" },
    { label: "South Korea", value: "South Korea" },
    { label: "South Sudan", value: "South Sudan" },
    { label: "Spain", value: "Spain" },
    { label: "Sri Lanka", value: "Sri Lanka" },
    { label: "Sudan", value: "Sudan" },
    { label: "Suriname", value: "Suriname" },
    { label: "Sweden", value: "Sweden" },
    { label: "Switzerland", value: "Switzerland" },
    { label: "Syria", value: "Syria" },
    { label: "Taiwan", value: "Taiwan" },
    { label: "Tajikistan", value: "Tajikistan" },
    { label: "Tanzania", value: "Tanzania" },
    { label: "Thailand", value: "Thailand" },
    { label: "Timor-Leste", value: "Timor-Leste" },
    { label: "Togo", value: "Togo" },
    { label: "Tonga", value: "Tonga" },
    { label: "Trinidad and Tobago", value: "Trinidad and Tobago" },
    { label: "Tunisia", value: "Tunisia" },
    { label: "Turkey", value: "Turkey" },
    { label: "Turkmenistan", value: "Turkmenistan" },
    { label: "Tuvalu", value: "Tuvalu" },
    { label: "Uganda", value: "Uganda" },
    { label: "Ukraine", value: "Ukraine" },
    { label: "United Arab Emirates", value: "United Arab Emirates" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "United States", value: "United States" },
    { label: "Uruguay", value: "Uruguay" },
    { label: "Uzbekistan", value: "Uzbekistan" },
    { label: "Vanuatu", value: "Vanuatu" },
    { label: "Vatican City", value: "Vatican City" },
    { label: "Venezuela", value: "Venezuela" },
    { label: "Vietnam", value: "Vietnam" },
    { label: "Yemen", value: "Yemen" },
    { label: "Zambia", value: "Zambia" },
    { label: "Zimbabwe", value: "Zimbabwe" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TopBarPrimary />
      </View>

      <View style={styles.button}>
        <GradiantButton
          title="Home"
          height="35"
          width="30%"
          fontSize={16}
          gradientType="yellow"
          borderRadius={5}
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your Name (आपका नाम)</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Rahne Ka Desh - Residing Country</Text>
          <View style={styles.mobileInputContainer}>
            <View style={styles.pickerWrapperFullWidth}>
              <Picker
                selectedValue={countryName}
                onValueChange={(itemValue) => setCountryName(itemValue)}
                style={styles.pickerFullWidth}
              >
                {countries.map((code) => (
                  <Picker.Item key={code.value} label={code.label} value={code.value} />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mobile (मोबाइल)</Text>
          <View style={styles.mobileInputContainer}>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={countryCode}
                onValueChange={(itemValue) => setCountryCode(itemValue)}
                style={styles.picker}
              >
                {dialingCodes.map((code) => (
                  <Picker.Item key={code.value} label={code.label} value={code.value} />
                ))}
              </Picker>
            </View>
            <TextInput
              style={styles.mobileInput}
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={(text) => setMobile(text)}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email (ईमेल)</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
        </View>

        <View style={[styles.inputGroup, { marginBottom: 0 }]}>
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.imageUploadContent}>
              <Image
                source={require('../../Assets/profile-icon.png')}
                style={styles.profileIcon}
              />
              <Text style={styles.buttonText}>Set Profile Photo (Optional)</Text>
            </View>
          </TouchableOpacity>
          {imageUri && (
            <View style={styles.image}>
              <Image source={{ uri: imageUri }} style={styles.selectedImage} />
            </View>
          )}
        </View>
      </View>

      <View style={[styles.button, { marginBottom: 30 }]}>
        <GradiantButton
          title="NEXT"
          height="35"
          width="30%"
          fontSize={16}
          gradientType="orange"
          borderRadius={5}
          onPress={() => navigation.navigate('LoginMember')}
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
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: BACKGROUND_COLORS.skyBlue,
    borderWidth: 1,
    borderColor: COLORS.black,
    padding: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    backgroundColor: BACKGROUND_COLORS.white,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: COLORS.black,
    height: 50,
  },
  mobileInputContainer: {
    flexDirection: 'row',
    backgroundColor: BACKGROUND_COLORS.white,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerWrapper: {
    width: 100,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  pickerWrapperFullWidth: {
    flex: 1,
    paddingLeft: 5,
  },
  picker: {
    height: 50,
    width: '101%',
    marginLeft: 0,
  },
  pickerFullWidth: {
    height: 50,
    width: '100%',
  },
  mobileInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: COLORS.black,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 30,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  imageUploadContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 16,
    marginRight: 10,
  },
});

export default EditProfileScreen;
