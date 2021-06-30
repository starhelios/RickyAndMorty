import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import LoadingIndicator from '../../components/common/LoadingIndicator';
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
import CharacterPreviewTile from '../../components/homeScreen/CharacterPreviewTile';
import LocationPreviewTile from '../../components/homeScreen/LocationPreviewTile';
// Store.
import { RnM_DATA_SAGA } from '../../store/sagas/dataTransferSaga';
// Styles.
import { colors } from '../../styles/colors';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loaderReducer.home);
    const characters = useSelector((state) => state.charactersReducer.characters);
    const activeCharacter = useSelector((state) => state.charactersReducer.activeCharacter);
    const activeLocation = useSelector((state) => state.locationsReducer.activeLocation);

    useEffect(() => {
        dispatch({ type: RnM_DATA_SAGA });
    }, [])

    useEffect(() => {
        console.log('Loading: ', loading);
    }, [loading])


    return (
        <ScreenWithTitle
            title={"The Rick and Morty Api"}
            subtitle={"Home Screen"}
            screenContent={
                <View style={{ paddingTop: 16, flex: 1 }}>
                    {loading && (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <LoadingIndicator />
                    </View>)}
                    {/* <CharacterPreviewTile character={activeCharacter} /> */}
                    <LocationPreviewTile location={activeLocation} />
                </View>

            }
        />

    )
}

export default HomeScreen;