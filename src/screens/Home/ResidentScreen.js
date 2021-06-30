import React from 'react';
import { View, Text } from 'react-native';
import ScreenWithTitle from '../../components/common/ScreenWithTitle';

// Components.
// Store.
// Styles.
// Utils.

const ResidentScreen = ({ navigation }) => {
    return (
        <ScreenWithTitle
            title={"Resident Screen title"}
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