import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const UsersMap = props => {
    return (
        <View>
            <Text style={styles.mapContainer}>Maps View</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer: {
        color: 'red'
    }
});
export default UsersMap;