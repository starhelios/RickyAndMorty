import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Utils.
import { ResidentStatusColorMapper } from '../../models/ResidentStatusEnum';

const StatusDot = ({ status = "Dead", marginHorizontal = 0 }) => {
    const color = ResidentStatusColorMapper[status];

    return (
        <View style={[styles.dotContainer, { backgroundColor: color, marginHorizontal: marginHorizontal }]} />
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
