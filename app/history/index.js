import { View, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import historyData from './historyData';

const History = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#201830' },
                    headerTitleStyle: { color: '#fff' },
                    headerTintColor: '#fff', 
                    title: 'History', 
                }}
            />
            <View style={{ width: '100%', height: '100%', backgroundColor: '#201830' }}>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 18,
                        textAlign: 'center',
                        marginVertical: 20,
                    }}
                >
                    Trade History
                </Text>
                <FlatList
                    data={historyData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                padding: 20,
                                borderBottomWidth: 1,
                                borderBottomColor: '#fff',
                                width:'100%'
                            }}
                        >
                            
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginBottom: 10,
                                }}
                            >
                                <Text style={{ color: '#fff', fontSize: 14 }}>
                                    Buy Price: {item.buyPrice}
                                </Text>
                                <Text style={{ color: '#48844e', fontSize: 14 }}>
                                    {item.isOngoing ? 'Ongoing' : 'Completed'}
                                </Text>
                                <Text style={{ color: '#48844e', fontSize: 14 }}>
                                    {item.profitPercentage}%
                                </Text>
                            </View>

                          
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginBottom: 10,
                                }}
                            >
                                <Text style={{ color: '#fff', fontSize: 16 }}>
                                    {item.stockName}
                                </Text>
                                <Text style={{ color: '#48844e', fontSize: 14 }}>
                                     {item.profitAmount}
                                </Text>
                            </View>

                            
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Text style={{ color: '#fff', fontSize: 14 }}>
                                    Invested: {item.investedAmount}
                                </Text>
                                <Text style={{ color: '#fff', fontSize: 14 }}>
                                    Quantity: {item.quantity}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </>
    );
};

export default History;
