import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ScreenWithTitle from '../../components/common/ScreenWithTitle';
import { colors } from '../../styles/colors';

// Components.
// Store.
// Styles.
// Utils.

const HomeScreen = ({ navigation }) => {
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