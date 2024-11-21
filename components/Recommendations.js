import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import stockData from '../app/home/stockData'; // Make sure this file is in the correct location
import { SwipeButton } from 'react-native-expo-swipe-button';
import { useRouter } from 'expo-router';

const Recommendations = ({ }) => {
          const router = useRouter();
          return (
                    <LinearGradient
                              colors={['#201830', '#201830']}
                              style={{ height: '100%' }}
                    >
                              <View style={{ marginTop: 40 }}>
                                        <Text style={{ textAlign: 'center', color: 'white', padding: 10, fontSize: 20, fontWeight: 'bold' }} >
                                                  Today's Recommendations
                                        </Text>
                              </View>
                              <View style={{ width: '100%', padding: 15, marginTop: 10, backgroundColor: '#595165', borderRadius: 20, flexDirection: 'column', gap: 20 }}>
                                        <View style={{ height: 250 }}>
                                                  <FlatList
                                                            data={stockData}
                                                            keyExtractor={(item) => item.id.toString()}
                                                            renderItem={({ item }) => (
                                                                      <LinearGradient
                                                                                colors={['#663e9d', '#82419c']}
                                                                                start={{ x: 1, y: 0 }}
                                                                                end={{ x: 0, y: 0 }}
                                                                                style={{
                                                                                          padding: 10,
                                                                                          borderRadius: 10,
                                                                                          width: '100%',
                                                                                          marginBottom: 10,
                                                                                }}
                                                                      >
                                                                                {/* Header Row */}
                                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                                          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                                                                                                    {item.name}
                                                                                          </Text>
                                                                                          <Text style={{ color: '#498f55', fontSize: 15 }}>{item.change}</Text>
                                                                                </View>

                                                                                {/* Content Row */}
                                                                                <View
                                                                                          style={{
                                                                                                    flexDirection: 'row',
                                                                                                    width: '100%',
                                                                                                    marginTop: 10,
                                                                                                    justifyContent: 'space-between',
                                                                                                    alignItems: 'center',
                                                                                          }}
                                                                                >
                                                                                          {/* Buy Section */}
                                                                                          <View style={{ alignItems: 'center' }}>
                                                                                                    <Text style={{ fontSize: 13, color: '#ddd' }}>Buy</Text>
                                                                                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff' }}>
                                                                                                              {item.buyRange}
                                                                                                    </Text>
                                                                                          </View>

                                                                                          {/* Stop Loss Section */}
                                                                                          <View style={{ alignItems: 'center' }}>
                                                                                                    <Text style={{ fontSize: 13, color: '#ddd' }}>Stop Loss</Text>
                                                                                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff' }}>
                                                                                                              {item.stopLoss}
                                                                                                    </Text>
                                                                                          </View>

                                                                                          {/* Target Section */}
                                                                                          <View style={{ alignItems: 'center' }}>
                                                                                                    <Text style={{ fontSize: 13, color: '#ddd' }}>Target</Text>
                                                                                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#fff' }}>
                                                                                                              {item.target}
                                                                                                    </Text>
                                                                                          </View>
                                                                                </View>

                                                                      </LinearGradient>
                                                            )}
                                                            showsVerticalScrollIndicator={false}
                                                  />
                                        </View>
                                        <View style={{ paddingHorizontal: 15 }}>
                                                  <Text style={{ color: 'white', textAlign: 'left' }}>
                                                            On executing this basket, buy orders along with stop loss and targets will be placed
                                                  </Text>
                                        </View>
                              </View>
                              <SwipeButton
                                        Icon={
                                                  <View
                                                            style={{
                                                                      backgroundColor: 'white',
                                                                      borderRadius: '100%',
                                                                      padding: 10,
                                                            }}
                                                  >
                                                            <MaterialCommunityIcons
                                                                      name="lightning-bolt-outline"
                                                                      size={54}
                                                                      color="black"
                                                            />
                                                  </View>
                                        }
                                        onComplete={() => router.push('/history')}
                                        title="EXECUTE"
                                        titleStyle={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
                                        borderRadius={180}
                                        containerStyle={{ backgroundColor: '#8c8c8c' }}
                                        underlayTitle="Release to complete"
                                        underlayTitleStyle={{ color: 'white' }}
                                        railFillBackgroundColor="white"
                                        style={{ width: '50%' }}
                              />
                    </LinearGradient>
          );
};


export default Recommendations;
