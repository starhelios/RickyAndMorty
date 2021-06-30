import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


// Components.
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const LocationPreviewTile = ({ location }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.dataInfoTextStyle}>type: <Text style={styles.textStyle}>{location.type}</Text></Text>
                <Text style={styles.dataInfoTextStyle}>name: <Text style={styles.textStyle}>{location.name}</Text></Text>
            </View>
        </View>
    )
}

export default LocationPreviewTile;

const styles = StyleSheet.create({
    container: {
        height: 160,
        backgroundColor: colors.previewTileBackground,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 8
    },
    textStyle: {
        color: colors.white,
        fontSize: 14,
    },
    dataInfoTextStyle: {
        color: colors.dataInfoTextGray,
        fontSize: 10,
    }
})