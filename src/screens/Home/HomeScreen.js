import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import LoadingIndicator from '../../components/common/LoadingIndicator';
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
import LocationPreviewTile from '../../components/home/LocationPreviewTile';
// Store.
import { LOCATIONS_DATA_SAGA } from '../../store/sagas/dataTransferSaga';


const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loaderReducer.home);
    const locations = useSelector((state) => state.locationsReducer.locations);

    useEffect(() => {
        dispatch({ type: LOCATIONS_DATA_SAGA });
    }, [])

    return (
        <ScreenWithTitle
            title={"The Rick and Morty Api"}
            subtitle={"Home Screen"}
            screenContent={
                <View>
                    {loading && (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                        <LoadingIndicator />
                    </View>)}
                    {!loading && <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={locations}
                        renderItem={({ item, index }) => <LocationPreviewTile location={item} navigation={navigation} />}
                        keyExtractor={(item, index) => {
                            return 'HL' + index
                        }}
                    />}
                </View>

            }
        />

    )
}

export default HomeScreen;