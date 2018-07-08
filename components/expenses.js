import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';


const onPressLearnMore = function(){
    console.log("holi");
};

const expenses = props => {
    return(
        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={onPressLearnMore}
                              style={styles.button}>
                <Text> Touch Here </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLearnMore}
                              style={styles.button2}>
                <Text> Touch Here </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'powderblue',
        height: 200
    },
    button2: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'steelblue',
        height: 200
    }
});

export default expenses;