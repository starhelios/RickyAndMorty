import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


// Components.
// Store.
// Styles.
import { colors } from '../../styles/colors';
import StatusDot from './StatusDot';
// Utils.

const ResidentOverview = ({ resident }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: resident.image }} style={{ height: "100%", resizeMode: 'cover' }} />
                </View>
                <View style={{ flexGrow: 1, padding: 8 }}>
                    <Text style={styles.nameTextStyle}>{resident.name}</Text>
                    <Text style={styles.statusTextStyle}>{resident.species}</Text>
                    <StatusDot status={resident.status} />
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
        fontSize: 22,
        color: colors.white,
        fontWeight: 'bold'
    },
    statusTextStyle: {
        fontSize: 14,
        color: colors.white
    }

})