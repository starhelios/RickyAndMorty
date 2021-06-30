import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


// Components.
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const CharacterPreviewTile = ({ character }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red' }}>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: character.image }} style={{ height: "100%", resizeMode: 'cover' }} />
                </View>
                <View style={{ flexGrow: 1, backgroundColor: 'green', padding: 8 }}>
                    <Text>{character.location}</Text>
                    <Text>{character.location}</Text>
                </View>

            </View>


        </View>
    )
}

export default CharacterPreviewTile;

const styles = StyleSheet.create({
    container: {
        height: 160,
        backgroundColor: colors.previewTileBackground,
        borderRadius: 10,
        overflow: 'hidden'
    }
})