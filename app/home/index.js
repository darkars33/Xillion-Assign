import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = () => {
          let amount = 1278653;
          return (
                    <>
                              <StatusBar translucent backgroundColor="transparent" style="light" />
                              <Stack.Screen options={{ headerShown: false }} />
                              <LinearGradient
                                        colors={['#C525FF', '#391EDC']}
                                        style={styles.gradient}
                              >
                                        <View style={styles.row} >
                                                  <AntDesign name="user" size={24} color="white" />
                                                  <Text style={styles.text}>XILLION</Text>
                                                  <Ionicons name="notifications-outline" size={24} color="white" />
                                        </View>
                                        <View style={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom:20 }}>
                                                  <View style={styles.innerContainer}>
                                                            <Text style={styles.headingText}>Current Portfolio</Text>
                                                            <Text style={styles.amountText}>₹12,78,653</Text>
                                                  </View>
                                                  <View style={styles.innerContainer}>
                                                            <Text style={{textAlign:'center', color:'white'}} >Unused Funds</Text>
                                                            <Text style={{textAlign:'center', color:'white', marginTop: 5, fontWeight:'bold'}} >₹1,18,261</Text>
                                                  </View>
                                        </View>
                              </LinearGradient>
                              <Text style={{marginBottom:30, position:'absolute', bottom:0}}>hello</Text>
                    </>
          );
};

const styles = StyleSheet.create({
          gradient: {
                    padding: 15,
                    paddingHorizontal: 15,
          },
          row: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 40
          },
          text: {
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold'
          },
          innerContainer: {
                    marginTop: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
          },
          headingText:{
                    textAlign: 'center',
                    color: 'white',
          },
          amountText:{
                    textAlign: 'center',
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 10
          }
});

export default Home;
