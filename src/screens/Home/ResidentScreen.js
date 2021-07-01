import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../components/common/BackButton';
// Components.
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
import ResidentOverview from '../../components/home/ResidentOverview';
// Store.
// Styles.
// Utils.

const ResidentScreen = ({ navigation }) => {
    const resident = useSelector((state) => state.charactersReducer.activeResident);

    return (
        <ScreenWithTitle
            backButton={<BackButton navigation={navigation} />}
            title={resident.name}
            subtitle={"Resident screen"}
            screenContent={
                <View style={{ paddingTop: 16 }}>
                    <ResidentOverview resident={resident} />
                </View>
            }
        />
    )
}

export default ResidentScreen;