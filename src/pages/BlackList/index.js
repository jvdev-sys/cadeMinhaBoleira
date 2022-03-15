import React, { useEffect, useState } from 'react'
import { Text, useColorScheme, StyleSheet, View, FlatList } from 'react-native';
import _, { sum } from 'lodash';
import Container from '../../components/Core/Container';
import useEntry from '../../hooks/useEntry';
import styles from '../../styles/styles';



const BlackList = () => {
    const isDarkTheme = useColorScheme() === 'dark';
    const [entries, , ] = useEntry();
    const [blackListEntries, setBlackListEntries] = useState([]);

    useEffect(() => {
        const groupEntriesByClients = () => {
            if(entries){
                let entriesGrouped = _.groupBy(entries, 'client.name');
                let newEntries = Object.entries(entriesGrouped);
                let blackList = [];  
                for(let i in newEntries){
                    let sumTimeElapsed = 0;
                    for(let j in newEntries[i][1]){
                        sumTimeElapsed +=  newEntries[i][1][j].timeElapsed;
                    }
                    let blackListEntry = {
                        name: newEntries[i][0],
                        timeElapsedAverage: sumTimeElapsed / newEntries[i][1].length,
                    }
                    blackList.push(blackListEntry);
                }
                blackList.sort(function (a, b){
                    return a.timeElapsedAverage - b.timeElapsedAverage;
                }).reverse();
                setBlackListEntries(blackList.slice(0,10));
            }
        }
        groupEntriesByClients();
    }, [entries])

    const getDuration = (milli) => {
        let minutes = Math.floor(milli / 60000);
        let hours = Math.round(minutes / 60);
        let days = Math.round(hours / 24);

        return (
            (days && { days: days }) ||
            (hours && { hours: hours }) ||
            { minutes: minutes }
        )
    };


    const renderItem = ({ item }) => (

        <View
            style={stylesLocal.tableItem}
        >
            <View >
                <Text
                    style={isDarkTheme
                        ? styles.tableLabelDark
                        : styles.tableLabelLight
                    }
                >{item.name.length > 14
                    ? item.name.split("").slice(0, 14).join("") + "..."
                    : item.name
                    }</Text>
            </View>
            
            <View>
                <Text
                    style={isDarkTheme
                        ? styles.tableLabelDark
                        : styles.tableLabelLight}
                >{
                    getDuration(item.timeElapsedAverage).days
                            ? (getDuration(item.timeElapsedAverage).days > 1 ?  
                                getDuration(item.timeElapsedAverage).days + " dias"
                            : 
                                getDuration(item.timeElapsedAverage).days + " dia"
                            ) 
                            : getDuration(item.timeElapsedAverage).hours
                                ? (getDuration(item.timeElapsedAverage).hours > 1
                                    ? getDuration(item.timeElapsedAverage).hours + ' horas'
                                    : getDuration(item.timeElapsedAverage).hours + ' hora'
                                )
                                : getDuration(item.timeElapsedAverage).minutes > 1
                                    ? getDuration(item.timeElapsedAverage).minutes + ' minutos'
                                    : getDuration(item.timeElapsedAverage).minutes + ' minuto'
                }
                </Text>
            </View>

        </View>
    );

    return (

        <Container
            flex={1}
            isDarkTheme={isDarkTheme}
            justifyContent={"center"}
        >
            <View style={isDarkTheme ? styles.tableViewDark : styles.tableViewLight}>
                <View style={stylesLocal.tableItem}>
                    <View >
                        <Text
                            style={[isDarkTheme
                                ? styles.tableLabelDark
                                : styles.tableLabelLight, { fontWeight: 'bold' }]
                            }
                        >Nome do Cliente</Text>
                    </View>
                   
                    <View>
                        <Text
                            style={[isDarkTheme
                                ? styles.tableLabelDark
                                : styles.tableLabelLight, { fontWeight: 'bold' }]}
                        >Tempo com a boleira</Text>
                    </View>
                </View>
                <FlatList
                    data={blackListEntries}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
        </Container>
            
    )
}

const stylesLocal = StyleSheet.create({
    tableItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default BlackList


