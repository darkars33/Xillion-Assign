import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () =>{
          const [fontsLoaded] = useFonts({
                    "Poppins-Black": require("../assests/fonts/Poppins-Black.ttf"),
                    "Poppins-Bold": require("../assests/fonts/Poppins-Bold.ttf"),
                    "Poppins-ExtraBold": require("../assests/fonts/Poppins-ExtraBold.ttf"),
                    "Poppins-ExtraLight": require("../assests/fonts/Poppins-ExtraLight.ttf"),
                    "Poppins-Light": require("../assests/fonts/Poppins-Light.ttf"),
                    "Poppins-Medium": require("../assests/fonts/Poppins-Medium.ttf"),
                    "Poppins-Regular": require("../assests/fonts/Poppins-Regular.ttf"),
                    "Poppins-SemiBold": require("../assests/fonts/Poppins-SemiBold.ttf"),
                    "Poppins-Thin": require("../assests/fonts/Poppins-Thin.ttf"),
                  });

                  useEffect(() => {
                    const prepare = async () => {
                      try {
                        if (!fontsLoaded) return;
                      } catch (e) {
                        console.warn(e);
                      } finally {
                        await SplashScreen.hideAsync();
                      }
                    };
                
                    prepare();
                  }, [fontsLoaded]);
                
                  if (!fontsLoaded) return null;
                
          return(
                    <Stack>
                              <Stack.Screen name="index" options={{headerShown:false}} />
                              <Stack.Screen name="home" options={{headerShown:false}} />
                              <Stack.Screen name="history" options={{headerShown:false}} />
                    </Stack>
          )
}

export default RootLayout;