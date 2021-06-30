import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ResidentStatusColorMapper } from '../../models/ResidentStatusEnum';

// Components.
// Store.
// Styles.
// Utils.

const StatusDot = ({ status = "Dead" }) => {
    const color = ResidentStatusColorMapper[status];

    return (
        <View style={[styles.dotContainer, { backgroundColor: color }]} />
    )
}

export default StatusDot;

const styles = StyleSheet.create({
    dotContainer: {
        width: 8,
        height: 8,
        borderRadius: 8
    }
})
