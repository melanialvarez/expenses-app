import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';


const onPressLearnMore = function(){
    console.log("holi");
};

const expenses = props => {
    return(
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onPressLearnMore}
                                  style={styles.button}>
                    <Text style={styles.buttonTitle}> SALIDITAS </Text>
                    <Text style={styles.buttonAvailable}> 100.00 </Text>
                    <Text style={styles.buttonWholeAmount}> 1000.00 </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onPressLearnMore}
                                  style={styles.button}>
                    <Text style={styles.buttonTitle}> DESPENSA </Text>
                    <Text style={styles.buttonAvailable}> 100.00 </Text>
                    <Text style={styles.buttonWholeAmount}> 1000.00 </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        flex: 1
    },
    buttonTitle: {
        color: '#2f7092',
        paddingTop: 10,
        fontSize: 22,
        fontWeight: '200'
    },
    buttonAvailable: {
        fontSize: 15,
        position: "absolute",
        bottom: 25,
        right: 10
    },
    buttonWholeAmount: {
        fontSize: 12,
        position: "absolute",
        bottom: 10,
        right: 10,
        color: '#86777e'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 150,
        shadowColor: '#d2d2d2',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 2.0,
    }
});

export default expenses;