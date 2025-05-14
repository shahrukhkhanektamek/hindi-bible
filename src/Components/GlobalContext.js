import React, { createContext, useState, useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import { navigate } from './NavigationService';

import AlertMessage from './AlertMessage'; 
import Loader from './Loader'; 

import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();


import { postData, apiUrl } from './api';
import { View, ImageBackground, StyleSheet } from 'react-native';
const urls=apiUrl();
 

export const GlobalContext = createContext();  

export const GlobalProvider = ({ children }) => {
  
  const [appSetting, setappSetting] = useState([]);
  const [userDetail, setuserDetail] = useState([]);
  const [isLoading, setisLoading] = useState(true);


 
   
 
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [showSideBar, setSideBar] = useState(false);

  
  const alert = { showAlert, setShowAlert, alertMessage, setAlertMessage, alertType, setAlertType };
  const sidebar = { showSideBar, setSideBar };
  const loader = { showLoader, setShowLoader }; 
  
  const extraData = {alert, sidebar, loader, appSetting, userDetail};
 

 
  const fetchPickerData = async () => { 
    try {
      const response = await postData({}, urls.appSetting, "GET", null, extraData);
      setappSetting(JSON.parse(storage.getString('appSetting')));
       if(storage.getString('user')) setuserDetail(JSON.parse(storage.getString('user'))); 
      setisLoading(false)
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  useEffect(() => {
    fetchPickerData();
  }, []);
  
  if(isLoading)
  {
    return ( 
      <View flex={1}> 
        <ImageBackground
          source={require('../../android/app/src/main/res/drawable/launch_screen.png')}
          style={styles.background}
        >
          <View style={styles.content}>
            {/* Aapka content yahan aayega */}
          </View>
        </ImageBackground>
      </View>
    ); 
  }
  else{
    SplashScreen.hide();
  }
    
    

  return ( 
    <GlobalContext.Provider value={{extraData:extraData}}>
      {children}
      <Loader extraData={extraData} />
      <AlertMessage extraData={extraData} />
    </GlobalContext.Provider>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain'
  },
  content: {
    flex: 1,
    // other content styles
  },
});