import React, {useState, useEffect, createContext} from 'react';
import firebase from 'react-native-firebase';
import SignInStack from './SignInStack';
import HomeStack from './HomeStack';

export const AuthContext = createContext(null);

export default function AuthNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const authSubscriber =  firebase.auth().onAuthStateChanged(onAuthStateChanged);
    // unsubscribe on unmount
    return authSubscriber;
  }, []);
  if (initializing) {
    return null;
  }
  return user ? (
    <AuthContext.Provider value={user}>
      <HomeStack />
    </AuthContext.Provider>
  ) : (
    <SignInStack />
  );
}
