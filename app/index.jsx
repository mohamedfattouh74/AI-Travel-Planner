import { Text, View } from "react-native";
import LandingPage from '../components/LandingPage';
import {auth} from '../configs/firebase.config'
import { Redirect } from "expo-router";

const user = auth.currentUser;
export default function Index() {
  return (
    <View
        style={{
          flex: 1,
        }}
    >
      {!user ? <Redirect href={'/mytrip'}/> : <LandingPage/> }
      
      </View>
  );
}
