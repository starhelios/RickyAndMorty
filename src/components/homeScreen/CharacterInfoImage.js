import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
// Store.
import { GET_CharacterData } from '../../services/rickNmortyService';
// Styles.
import { colors } from '../../styles/colors';
import { images } from '../../styles/images';
// Utils.

const CharacterInfoImage = ({ characterDataUrl }) => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetchCharacterDataFromApi();
    }, [])

    useEffect(() => {
        if (loading) {
            setLoading(!loading)
        }
    }, [character])


    const fetchCharacterDataFromApi = async () => {
        try {
            let charData = await GET_CharacterData(characterDataUrl);
            setCharacter(charData);
        } catch (err) {
            console.log('Error @ CharacterInfoImage.js: fetchCharacterDataFromApi -> ', err);
        }
    }

    return (
        <View>
            <View style={styles.container}>
                {!loading && character != null &&
                    <ImageBackground source={{ uri: character.image }} style={{ height: '100%', width: 100 }}>
                        <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                            <View style={{ backgroundColor: colors.dataInfoTextGray, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 4 }}>
                                <Text style={styles.textStyle}>{character.name}</Text>
                                <Text style={styles.textStyle}>{character.status}</Text>
                            </View>
                        </View>
                    </ImageBackground>}
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