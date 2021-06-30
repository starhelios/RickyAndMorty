import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
import { colors } from '../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RnM_DATA_SAGA } from '../../store/sagas/dataTransferSaga';
import LoadingIndicator from '../../components/common/LoadingIndicator';

// Components.
// Store.
// Styles.
// Utils.

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loaderReducer.home);

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