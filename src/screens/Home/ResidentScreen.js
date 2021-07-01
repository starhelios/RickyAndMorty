import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
import ResidentOverview from '../../components/home/ResidentOverview';
import UserResidentImpression from '../../components/home/UserResidentImpression';
import BackButton from '../../components/common/BackButton';
import SubmitButton from '../../components/common/SubmitButton';

// Store.
import { SEND_IMPRESSION_SAGA } from '../../store/sagas/dataTransferSaga';
// Styles.
// Utils.

const ResidentScreen = ({ navigation }) => {
    const resident = useSelector((state) => state.charactersReducer.activeResident);
    const loading = useSelector((state) => state.loaderReducer.submit);
    const [impressionInput, setImpressionInput] = useState("");
    const dispatch = useDispatch();

    const onSumbit = () => {
        dispatch({ type: SEND_IMPRESSION_SAGA, data: { text: impressionInput } })
    }

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
                    <SubmitButton onSumbit={onSumbit} disabled={impressionInput == ""} isLoading={loading} />
                </View>
            }
        />
    )
}

export default ResidentScreen;