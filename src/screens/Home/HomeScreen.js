import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import LoadingIndicator from '../../components/common/LoadingIndicator';
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
import CharacterPreviewTile from '../../components/homeScreen/CharacterPreviewTile';
import LocationPreviewTile from '../../components/homeScreen/LocationPreviewTile';
// Store.
import { LOCATIONS_DATA_SAGA } from '../../store/sagas/dataTransferSaga';
// Styles.
import { colors } from '../../styles/colors';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loaderReducer.home);
    const characters = useSelector((state) => state.charactersReducer.characters);
    const locations = useSelector((state) => state.locationsReducer.locations);
    const activeCharacter = useSelector((state) => state.charactersReducer.activeCharacter);
    const activeLocation = useSelector((state) => state.locationsReducer.activeLocation);

    useEffect(() => {
        dispatch({ type: LOCATIONS_DATA_SAGA });
    }, [])

    useEffect(() => {
        console.log('Loading: ', loading);
    }, [loading])


    return (
        <ScreenWithTitle
            title={"The Rick and Morty Api"}
            subtitle={"Home Screen"}
            screenContent={
                <View>
                    {loading && (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                        <LoadingIndicator />
                    </View>)}
                    {/* <CharacterPreviewTile character={activeCharacter} /> */}
                    {!loading && <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={locations}
                        renderItem={({ item, index }) => <LocationPreviewTile location={item} />}
                        keyExtractor={(item) => item.id}

                    />}
                </View>

            }
        />

    )
}

export default HomeScreen;