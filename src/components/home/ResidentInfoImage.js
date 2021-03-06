import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import StatusDot from './StatusDot';
// Store.
import { GET_CharacterData } from '../../services/rickNmortyService';
import { SET_ACTIVE_CHARACTER } from '../../store/reducers/charactersReducer';
// Styles.
import { colors } from '../../styles/colors';
// Utils.
import { RESIDENT_SCREEN } from '../../navigation/screenNames';


const ResidentInfoImage = ({ characterDataUrl, navigation }) => {
    const dispatch = useDispatch();
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
            return;
        } catch (err) {
            console.log('Error @ ResidentInfoImage.js: fetchCharacterDataFromApi -> ', err);
        }
    }

    const onPress = useMemo(() => {
        if (character) {
            return () => {
                dispatch({
                    type: SET_ACTIVE_CHARACTER,
                    payload: character
                })
                navigation.navigate(RESIDENT_SCREEN);
            }
        }

        return () => { };
    }, [character])

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {!loading && character != null &&
                    <ImageBackground source={{ uri: character.image }} style={{ height: '100%', width: 100 }}>
                        <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                            <View style={{ backgroundColor: colors.bottomStatusBackground, flexDirection: 'row', justifyContent: 'space-between', padding: 4, alignItems: 'center', }}>
                                <View style={{ flex: 1, margin: 4 }}>
                                    <Text style={styles.textStyle}>{character.name}</Text>
                                </View>
                                <StatusDot status={character.status} />
                            </View>
                        </View>
                    </ImageBackground>}
            </View>
        </TouchableOpacity>
    )
}

export default ResidentInfoImage;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: 140,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 4
    },
    textStyle: {
        color: colors.screenBackground,
        fontSize: 10
    }
})