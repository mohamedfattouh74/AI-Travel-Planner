import { Text, View } from "react-native";
import LandingPage from '../components/LandingPage';
import {auth} from '../configs/firebase.config'
import { Redirect } from "expo-router";
import TripProvider from '../contexts/TripContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const user = auth.currentUser;
export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TripProvider>
        <View
            style={{
              flex: 1,
            }}
            >
          {user ? <Redirect href={'/mytrip'}/> : <LandingPage/> }
          
          </View>
        </TripProvider>
    </GestureHandlerRootView>
  );
}
