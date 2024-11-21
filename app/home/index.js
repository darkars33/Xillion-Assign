import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import stockData from './stockData';

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
                                        <View style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", marginTop: 10, marginBottom: 20 }}>
                                                  <View style={styles.innerContainer}>
                                                            <Text style={styles.headingText}>Current Portfolio</Text>
                                                            <Text style={styles.amountText}>₹12,78,653</Text>
                                                  </View>
                                                  <View style={styles.innerContainer}>
                                                            <Text style={{ textAlign: 'center', color: 'white' }} >Unused Funds</Text>
                                                            <Text style={{ textAlign: 'center', color: 'white', marginTop: 5, fontWeight: 'bold' }} >₹1,18,261</Text>
                                                  </View>
                                        </View>

                              </LinearGradient>
                              <View style={styles.container}>
                                        <TouchableOpacity style={styles.button} onPress={() => alert("UI not Build")}>
                                                  <Feather name="download" size={24} color="white" />
                                                  <Text style={styles.buttonText}>Portfolio</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button} onPress={() => alert("UI not Build")}>
                                                  <MaterialIcons name="message" size={24} color="white" />
                                                  <Text style={styles.buttonText}>Ask AI</Text>
                                        </TouchableOpacity>
                              </View>
                              <LinearGradient
                                        colors={['#201830', '#201830']}
                                        style={{ height: '100%' }}
                              >
                                        <View style={{ marginTop: 50 }}>
                                                  <Text style={{ textAlign: 'center', color: 'white', padding: 10, fontSize: 20, fontWeight: 'bold' }} >Today's Recommendations</Text>
                                        </View>
                                        <View style={{ width: '100%', padding: 15, marginTop: 10, backgroundColor: '#595165', borderRadius: 20, flexDirection: 'column', gap: 20 }}>
                                                  <View style={{ height: 250 }}>
                                                            <FlatList
                                                                      data={stockData}
                                                                      keyExtractor={(item) => item.id.toString()}
                                                                      renderItem={({ item }) => (
                                                                                <LinearGradient
                                                                                          colors={['#663e9d', '#82419c']} // Gradient colors
                                                                                          start={{ x: 1, y: 0 }} // Start from right
                                                                                          end={{ x: 0, y: 0 }} // End at left
                                                                                          style={{
                                                                                                    padding: 10,
                                                                                                    borderRadius: 10,
                                                                                                    width: '100%',
                                                                                                    marginBottom: 10,
                                                                                                    
                                                                                          }}
                                                                                >
                                                                                          {/* Header Row */}
                                                                                          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                                                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                                                                                                              {item.name}
                                                                                                    </Text>
                                                                                                    <Text style={{ color: '#498f55' }}>{item.change}</Text>
                                                                                          </View>

                                                                                          {/* Content Row */}
                                                                                          <View
                                                                                                    style={{
                                                                                                              flex:1,
                                                                                                              flexDirection: 'row',
                                                                                                              width: '100%', // Ensure full width
                                                                                                              marginTop: 10, // Add space between rows
                                                                                                              justifyContent:'space-around' // Distribute space evenly
                                                                                                              
                                                                                                    }}
                                                                                          >
                                                                                                    {/* Buy Section */}
                                                                                                    <View style={{ flexDirection:'column', flex:1, alignItems:'center', justifyContent:'center' }}>
                                                                                                              <Text style={{ fontSize: 14, color: '#ddd' }}>Buy</Text>
                                                                                                              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                                                                                                                        {item.buyRange}
                                                                                                              </Text>
                                                                                                    </View>

                                                                                                    {/* Stop Loss Section */}
                                                                                                    <View style={{flexDirection:'column', flex:1, justifyContent:'center',alignItems:'center', }}>
                                                                                                              <Text style={{ fontSize: 14, color: '#ddd' }}>Stop Loss</Text>
                                                                                                              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                                                                                                                        {item.stopLoss}
                                                                                                              </Text>
                                                                                                    </View>

                                                                                                    {/* Target Section */}
                                                                                                    <View style={{ flexDirection:'column', flex:1 , justifyContent:'center',alignItems:'center',}}>
                                                                                                              <Text style={{ fontSize: 14, color: '#ddd' }}>Target</Text>
                                                                                                              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                                                                                                                        {item.target}
                                                                                                              </Text>
                                                                                                    </View>
                                                                                          </View>
                                                                                </LinearGradient>

                                                                      )}
                                                                      showsVerticalScrollIndicator={false}
                                                            />
                                                  </View>
                                                  <View>
                                                            <Text>On</Text>
                                                  </View>
                                        </View>
                              </LinearGradient>

                    </>
          );
};

const styles = StyleSheet.create({
          gradient: {
                    padding: 15,
                    paddingHorizontal: 15,
                    position: 'relative',
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
                    fontWeight: 'bold',
                    fontStyle: 'Poppins-Bold'
          },
          innerContainer: {
                    marginTop: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
          },
          headingText: {
                    textAlign: 'center',
                    color: 'white',
                    fontStyle: 'Poppins-Bold'
          },
          amountText: {
                    textAlign: 'center',
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 10
          },
          container: {
                    marginTop: '68%',
                    position: 'absolute',
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    gap: 10,
                    zIndex: 10
          },
          button: {
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    backgroundColor: '#0e0524',
                    padding: 15,
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    borderRadius: 15,
                    width: '40%'
          },
          buttonText: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'white',
          },
});

export default Home;
