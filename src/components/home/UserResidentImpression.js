import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
// Styles.
import { colors } from '../../styles/colors';

const UserResidentImpression = ({ state, setState }) => {
    return (
        <View style={{ marginVertical: 16 }}>
            <TextInput
                onChangeText={(newValue) => {
                    setState(newValue);
                }}
                value={state}
                underlineColorAndroid="transparent"
                placeholder={"Leave your impression about resident"}
                style={styles.formStyle}
                placeholderTextColor={colors.unknownColor}
                multiline={true}
            />
        </View>

    )
}

export default UserResidentImpression;

const styles = StyleSheet.create({
    formStyle: {
        backgroundColor: colors.white,
        borderRadius: 8,
        textAlignVertical: 'top',
        padding: 16,
        height: 150,
        color: colors.screenBackground
    }
})