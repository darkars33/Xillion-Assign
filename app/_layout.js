import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () =>{
          const [fontsLoaded] = useFonts({
                    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
                    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
                    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
                    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
                    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
                    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
                    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
                    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
                    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
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