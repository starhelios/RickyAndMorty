import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// Components.
import StatusDot from './StatusDot';
// Store.
import { GET_Episode } from '../../services/rickNmortyService';
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const ResidentOverview = ({ resident }) => {
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
        fetchResidentEpisodeFromAPI()
    }, [])

    const fetchResidentEpisodeFromAPI = async () => {
        try {
            let epData = await GET_Episode(resident.episode[0]);
            setEpisode(epData);
            console.log('episode: ', epData.name)
            return;
        } catch (err) {
            console.log('Error @ ResidentOverivew.js: fetchCharacterDataFromApi -> ', err);
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 120 }}>
                    <Image source={{ uri: resident.image }} style={{ height: "100%", resizeMode: 'cover' }} />
                </View>
                <View style={{ padding: 8 }}>
                    <Text style={styles.nameTextStyle}>{resident.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <StatusDot status={resident.status} marginHorizontal={4} />
                        <Text style={styles.infoTextStyle}>{resident.status}</Text>
                        <Text style={[styles.infoTextStyle, { marginHorizontal: 8 }]}>-</Text>
                        <Text style={styles.infoTextStyle}>{resident.species}</Text>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={styles.infoQuestionText}>Last know location:</Text>
                        <Text style={styles.infoTextStyle}>{resident.location.name}</Text>
                    </View>
                    <View style={{ marginTop: 16, flexGrow: 1, padding: 4, }}>
                        <Text style={styles.infoQuestionText}>First seen in:</Text>
                        {episode && <Text style={styles.infoTextStyle}>{episode.name}</Text>}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ResidentOverview;

const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: colors.previewTileBackground,
        borderRadius: 10,
        overflow: 'hidden'
    },
    nameTextStyle: {
        fontSize: 26,
        color: colors.white,
        fontWeight: 'bold'
    },
    infoTextStyle: {
        fontSize: 16,
        color: colors.white
    },
    infoQuestionText: {
        fontSize: 12,
        color: colors.dataInfoTextGray
    }

})