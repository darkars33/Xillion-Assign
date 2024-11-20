import { Stack, Tabs } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync()
          .then(result => console.log(`SplashScreen.preventAutoHideAsync()`, result))
          .catch(console.error);
const Layout = () => {
          return (
                    <Stack />
          )
}

export default Layout;