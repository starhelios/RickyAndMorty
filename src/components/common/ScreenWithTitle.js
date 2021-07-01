import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import BackButton from './BackButton';

// Components.
// Store.
// Styles.
// Utils.

const ScreenWithTitle = ({ title = "Screen title", subtitle = "Screen Subtitle", screenContent, backButton }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleBarContainer}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: 80 }}>
                        {backButton}
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.titleTextStyle}>{title}</Text>
                        <Text>{subtitle}</Text>
                    </View>
                    <View style={{ width: 80 }} />
                </View>

            </View>
            <View style={styles.screenContentContainer}>
                {screenContent}
            </View>
        </View>
    )
}

export default ScreenWithTitle;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.screenBackground,
        flex: 1,
    },
    titleBarContainer: {
        height: 85,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    screenContentContainer: {
        paddingHorizontal: 16
    },
    titleTextStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

})