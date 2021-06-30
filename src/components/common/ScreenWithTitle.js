import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

// Components.
// Store.
// Styles.
// Utils.

const ScreenWithTitle = ({ title = "Screen title", subtitle = "Screen Subtitle", screenContent }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleBarContainer}>
                <Text style={styles.titleTextStyle}>{title}</Text>
                <Text>{subtitle}</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenContentContainer: {
        paddingHorizontal: 16
    },
    titleTextStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})