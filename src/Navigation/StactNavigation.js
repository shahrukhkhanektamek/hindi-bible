import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home/HomeScreen.js';
import ContactUsScreen from '../Screens/ContactUs/ContactUsScreen.js';
import LatestNewsScreen from '../Screens/LatestNews/LatestNewsScreen.js';
import RegisterScreen from '../Screens/Register/RegisterScreen.js';
import LoginScreen from '../Screens/Login/LoginScreen.js';
import LoginSuccessScreen from '../Screens/LoginSuccess/LoginSuccess.js';

import MainScreen from '../Screens/Main/MainScreen.js';
import BibleStudyScreen from '../Screens/BibleStudy/BibleStudyScreen.js';
import BibleBooksScreen from '../Screens/BibleBooks/BibleBooksScreen.js'; 
import OldTestamentScreen from '../Screens/OldTestament/OldTestamentScreen.js';
import GenesisScreen from '../Screens/Genesis/GenesisScreen.js';


import NewTestamentScreen from '../Screens/NewTestament/NewTestamentScreen.js';
import MattScreen from '../Screens/Matt/MattScreen.js';
import MemberLoginScreen from '../Screens/MemberLogin/MemberLoginScreen.js';
import YourContributionHomeScreen from '../Screens/YourContribution/YourContributionHomeScreen.js';
import YourContributionScreen from '../Screens/YourContribution/YourContributionScreen.js';
import PayDirectScreen from '../Screens/YourContribution/PayDirectScreen.js';
import MemberLoginHomeScreen from '../Screens/MemberLogin/MemberLoginHomeScreen.js';
import EditProfileScreen from '../Screens/MemberLogin/EditProfileScreen.js';
import LoginMemberScreen from '../Screens/MemberLogin/LoginMemberScreen.js';
import PayThruAppScreen from '../Screens/YourContribution/PayThruAppScreen.js';
import PayNow from '../Screens/YourContribution/PayNow.js';
import ConfirmPay from '../Screens/YourContribution/ConfirmPay.js';
import PaymentSuccessScreen from '../Screens/YourContribution/PaymentSuccess.js';
import NewSignupScreen from '../Screens/NewSignup/NewSignupScreen.js';
import InternationalScreen from '../Screens/NewSignup/InternationalScreen.js';
import PayScreen from '../Screens/NewSignup/PayScreen.js';
import PaymentGateway from '../Screens/NewSignup/PaymentGateway.js';
import IndiaScreen from '../Screens/NewSignup/IndiaScreen.js';
import BibleSubjectScreen from '../Screens/BibleSubject/BibleSubjectScreen.js';
import BibleReadingScreen from '../Screens/BibleReading/BibleReadingScreen.js';
import BibleReadingOldTestamentScreen from '../Screens/BibleReading/BibleReadingOldTestamentScreen.js';
import BibleReadingNewTestamentScreen from '../Screens/BibleReading/BibleReadingNewTestamentScreen.js';
import BibleReadingGenesisScreen from '../Screens/BibleReading/BibleReadingGenesisScreen.js';
import BibleReadingMattScreen from '../Screens/BibleReading/BibleReadingMattScreen.js';
import BibleDramaScreen from '../Screens/BibleDrama/BibleDramaScreen.js';
import VideosScreen from '../Screens/Videos/VideosScreen.js';
import HindiMessageScreen from '../Screens/Videos/HindiMessageScreen.js';
import SingleVideo from '../Components/Video/SingleVideo.js';
import TgcSongsScreen from '../Screens/Videos/TgcSongsScreen.js';
import ShortFilmPlayScreen from '../Screens/Videos/ShorFilmPlayScreen.js';
import InterviewScreen from '../Screens/Videos/InterviewScreen.js';
import YoutubeScreen from '../Screens/Videos/YoutubeScreen.js';
import TopicPlaylistScreen from '../Screens/Videos/TopicPlaylistScreen.js';
import AllVideosScreen from '../Screens/Videos/AllVideosScreen.js';
import AudioScreen from '../Screens/Audios/AudioScreen.js';
import CounsellingScreen from '../Screens/Audios/CounsellingScreen.js';
import BookScreen from '../Screens/Books/BookScreen.js';
import TgcBookScreen from '../Screens/Books/TgcBookScreen.js';
import OtherBookScreen from '../Screens/Books/OtherBookScreen.js';
import LiteratureScreen from '../Screens/Literature/LiteratureScreen.js';
import ArticleScreen from '../Screens/Literature/ArticleScreen.js';
import PdfDownloadScreen from '../Screens/Literature/PdfDownloadScreen.js';
import ZaruriSuchnaScreen from '../Screens/ZaruriSuchna/ZaruriSuchnaScreen.js';
import TgcPhotoScreen from '../Screens/TgcPhoto/TgcPhotoScreen.js';
import DevotionScreen from '../Screens/Devotion/DevotionScreen.js';
import ChildrenBibleScreen from '../Screens/ChildrenBibleSchool/ChildrenBibleSchoolScreen.js';
import TeenBibleSchoolScreen from '../Screens/TeenBibleSchool/TeenBibleSchoolScreen.js';
import FeedbackScreen from '../Screens/Feedback/FeedbackScreen.js';
import OneDayFreeTrialScreen from '../Screens/OneDayFreeTrial/OneDayFreeTrialScreen.js';
import OrderHistoryScreen from '../Screens/OrderHistory/OrderHistoryScreen.js';
import AlbumImage from '../Components/Image/AlbumImage.js';

const Stack = createNativeStackNavigator();

const isLogedIn = 0;


const StackNavigation = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      animation: 'fade',
    }}
  >
    

    {/* {
      (isLogedIn==1) ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      )
      : 
      (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        </>
      )
    } */}
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="LoginSuccess" component={LoginSuccessScreen} />
    

    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ContactUs" component={ContactUsScreen} />
    <Stack.Screen name="LatestNews" component={LatestNewsScreen} />


    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Category" component={BibleStudyScreen} />
    <Stack.Screen name="SubCategory" component={BibleBooksScreen} />
    <Stack.Screen name="SubSubCategory" component={OldTestamentScreen} />
    <Stack.Screen name="Post" component={GenesisScreen} />



    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    

    <Stack.Screen name="NewTestament" component={NewTestamentScreen} />
    <Stack.Screen name="Matt" component={MattScreen} />
    <Stack.Screen name="MemberLoginHome" component={MemberLoginHomeScreen} />
    <Stack.Screen name="MemberLogin" component={MemberLoginScreen} />
    <Stack.Screen name="LoginMember" component={LoginMemberScreen} />
    <Stack.Screen name="YourContributionHome" component={YourContributionHomeScreen} />
    <Stack.Screen name="YourContribution" component={YourContributionScreen} />
    <Stack.Screen name="PayDirect" component={PayDirectScreen} />
    <Stack.Screen name="PayThruApp" component={PayThruAppScreen} />
    <Stack.Screen name="PayNow" component={PayNow} />
    <Stack.Screen name="ConfirmPay" component={ConfirmPay} />
    <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
    <Stack.Screen name="NewSignup" component={NewSignupScreen} />
    <Stack.Screen name="International" component={InternationalScreen} />
    <Stack.Screen name="India" component={IndiaScreen} />
    <Stack.Screen name="Pay" component={PayScreen} />
    <Stack.Screen name="PaymentGateway" component={PaymentGateway} />
    <Stack.Screen name="BibleSubjects" component={BibleSubjectScreen} />
    <Stack.Screen name="BibleReading" component={BibleReadingScreen} />
    <Stack.Screen name="BibleReadingOldTestament" component={BibleReadingOldTestamentScreen} />
    <Stack.Screen name="BibleReadingGenesis" component={BibleReadingGenesisScreen} />
    <Stack.Screen name="BibleReadingNewTestament" component={BibleReadingNewTestamentScreen} />
    <Stack.Screen name="BibleReadingMatt" component={BibleReadingMattScreen} />
    <Stack.Screen name="BibleDrama" component={BibleDramaScreen} />
    <Stack.Screen name="Videos" component={VideosScreen} />
    <Stack.Screen name="HindiMessage" component={HindiMessageScreen} />
    <Stack.Screen name="SingleVideo" component={SingleVideo} />
    <Stack.Screen name="TgcSongs" component={TgcSongsScreen} />
    <Stack.Screen name="ShortFilmPlay" component={ShortFilmPlayScreen} />
    <Stack.Screen name="Interview" component={InterviewScreen} />
    <Stack.Screen name="Youtube" component={YoutubeScreen} />
    <Stack.Screen name="TopicPlaylist" component={TopicPlaylistScreen} />
    <Stack.Screen name="AllVideos" component={AllVideosScreen} />
    <Stack.Screen name="Audio" component={AudioScreen} />
    <Stack.Screen name="Counselling" component={CounsellingScreen} />
    <Stack.Screen name="Book" component={BookScreen} />
    <Stack.Screen name="TgcBook" component={TgcBookScreen} />
    <Stack.Screen name="OtherBook" component={OtherBookScreen} />
    <Stack.Screen name="Literature" component={LiteratureScreen} />
    <Stack.Screen name="Article" component={ArticleScreen} />
    <Stack.Screen name="PdfDownload" component={PdfDownloadScreen} />
    <Stack.Screen name="ZaruriSuchna" component={ZaruriSuchnaScreen} />
    <Stack.Screen name="TgcPhoto" component={TgcPhotoScreen} />
    <Stack.Screen name="AlbumImage" component={AlbumImage} />
    <Stack.Screen name="Devotion" component={DevotionScreen} />
    <Stack.Screen name="ChildrenBibleSchool" component={ChildrenBibleScreen} />
    <Stack.Screen name="TeenBibleSchool" component={TeenBibleSchoolScreen} />
    <Stack.Screen name="Feedback" component={FeedbackScreen} />
    <Stack.Screen name="OneDayFreeTrial" component={OneDayFreeTrialScreen} />
    <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
  </Stack.Navigator>
);

export default StackNavigation;
