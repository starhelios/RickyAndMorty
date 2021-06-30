import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Components.
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
// Store.
// Styles.
// Utils.

const ResidentScreen = ({ navigation }) => {
    const resident = useSelector((state) => state.charactersReducer.activeResident);

    return (
        <ScreenWithTitle
            title={resident.name}
            subtitle={"Resident screen"}
            screenContent={
                <>
                    <Text>No content</Text>
                </>
            }
        />
    )
}

export default ResidentScreen;