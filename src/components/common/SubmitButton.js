import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// Components.
// Store.
// Styles.
import { colors } from '../../styles/colors';
// Utils.

const SubmitButton = ({ onSumbit, disabled, isLoading }) => {

    return (
        <TouchableOpacity onPress={onSumbit} style={[styles.buttonContainer, { backgroundColor: disabled ? colors.previewTileBackground : colors.dataInfoTextGray }]} disabled={disabled}>
            <Text style={{ fontSize: 18, color: colors.white }}>Submit</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
    }
})