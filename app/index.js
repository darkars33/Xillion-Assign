import {View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Redirect } from 'expo-router';
import 'react-native-gesture-handler';


const Index = () =>{

          const isLoggedIn = true;

          if(isLoggedIn){
                    return <Redirect href="/home" />
          }
}

export default Index;