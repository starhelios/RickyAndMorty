import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
import { colors } from '../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RnM_DATA_SAGA } from '../../store/sagas/dataTransferSaga';

// Components.
// Store.
// Styles.
// Utils.

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: RnM_DATA_SAGA });
        return () => {

        }
    }, [])


    return (
        <ScreenWithTitle
            title={"The Rick and Morty Api"}
            subtitle={"Home Screen"}
            screenContent={
                <View style={{ paddingTop: 16 }}>
                    <Text style={{ color: colors.white }}>Hellou!</Text>
                </View>

            }
        />

    )
}

export default HomeScreen;