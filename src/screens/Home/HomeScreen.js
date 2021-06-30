import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import LoadingIndicator from '../../components/common/LoadingIndicator';
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
// Store.
import { RnM_DATA_SAGA } from '../../store/sagas/dataTransferSaga';
// Styles.
import { colors } from '../../styles/colors';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loaderReducer.home);
    const characters = useSelector((state) => state.charactersReducer.characters);

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
                <View style={{ paddingTop: 16 }}>
                    {loading && (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <LoadingIndicator />
                    </View>)}
                    <Text style={{ color: colors.white }}>Hellou!</Text>
                </View>

            }
        />

    )
}

export default HomeScreen;