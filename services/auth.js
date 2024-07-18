
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase.config";
import { ToastAndroid } from "react-native";

export function createAccount(credentials,onSuccess){
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then((userCredential) => {
    onSuccess();
    ToastAndroid.show('Account was created successfully!', ToastAndroid.LONG);
  })
  .catch((error) => {
    ToastAndroid.show('Account creation failed!', ToastAndroid.LONG);
  });

}

export function login(credentials,onSuccess){
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredential) => {
        onSuccess();
    })
    .catch((error) => {
        ToastAndroid.show('Unable to sign in, Please check email and password', ToastAndroid.LONG);

    });
}