import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// Components.
import BackButton from './BackButton';
// Styles.
import { colors } from '../../styles/colors';

const ScreenWithTitle = ({ title = "Screen title", subtitle = "Screen Subtitle", screenContent, backButton }) => {
    return (
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>

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