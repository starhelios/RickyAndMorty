import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


// Components.
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const CharacterInfoImage = ({ }) => {
    const character = useSelector((state) => state.charactersReducer.activeCharacter);

    return (
        <View>
            <View style={styles.container}>
                <ImageBackground source={{ uri: character.image }} style={{ height: '100%', width: 100 }}>
                    <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                        <View style={{ backgroundColor: colors.dataInfoTextGray, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4 }}>
                            <Text style={styles.textStyle}>{character.name}</Text>
                            <Text style={styles.textStyle}>{character.status}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default CharacterInfoImage;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 4
    },
    textStyle: {
        color: colors.white,
        fontSize: 10
    }
})