import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
import ResidentOverview from '../../components/home/ResidentOverview';
import UserResidentImpression from '../../components/home/UserResidentImpression';
import BackButton from '../../components/common/BackButton';
// Store.
// Styles.
// Utils.

const ResidentScreen = ({ navigation }) => {
    const resident = useSelector((state) => state.charactersReducer.activeResident);
    const [impressionInput, setImpressionInput] = useState("");

    return (
        <ScreenWithTitle
            backButton={<BackButton navigation={navigation} />}
            title={resident.name}
            subtitle={"Resident screen"}
            screenContent={
                <View style={{ paddingTop: 16 }}>
                    <ResidentOverview resident={resident} />
                    <UserResidentImpression
                        state={impressionInput}
                        setState={setImpressionInput}
                    />
                </View>
            }
        />
    )
}

export default ResidentScreen;