import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, ScrollView} from 'react-native';



const onPressLearnMore = function(key){
    console.log("holi ", key);
};

const expensesList = [{title: "SALIDITAS", availableAmount: 100, totalAmount: 1000},
    {title: "DESPENSA", availableAmount: 100, totalAmount: 1000},
    {title: "GASOLINA", availableAmount: 200, totalAmount: 1000},
    {title: "COMIDA", availableAmount: 500, totalAmount: 4000},
    {title: "DOCTOR", availableAmount: 90, totalAmount: 2000},
    {title: "PERRITOS", availableAmount: 160, totalAmount: 1000},
    {title: "COCHE", availableAmount: 675, totalAmount: 1000},
    {title: "ESTETICA", availableAmount: 40, totalAmount: 500}];

const expenses = props => {
    return(
        <ScrollView style={{flex: 1, flexDirection: 'column'}}>

            {

                expensesList.map((item) =>
                    (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => onPressLearnMore(item)}
                                              key={item.title}
                                              style={styles.button}>
                                <Text style={styles.buttonTitle}> {item.title} </Text>
                                <Text style={styles.buttonAvailable}> {item.availableAmount} </Text>
                                <Text style={styles.buttonWholeAmount}> {item.totalAmount} </Text>
                            </TouchableOpacity>
                        </View>
                    ))

            }

            {/*<View style={{flex: 1, flexDirection: 'row'}}>*/}
                {/*<View style={styles.buttonContainer}>*/}
                    {/*<TouchableOpacity onPress={onPressLearnMore}*/}
                                      {/*style={styles.button}>*/}
                        {/*<Text style={styles.buttonTitle}> SALIDITAS </Text>*/}
                        {/*<Text style={styles.buttonAvailable}> 100.00 </Text>*/}
                        {/*<Text style={styles.buttonWholeAmount}> 1000.00 </Text>*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}
                {/*<View style={styles.buttonContainer}>*/}
                    {/*<TouchableOpacity onPress={onPressLearnMore}*/}
                                      {/*style={styles.button}>*/}
                        {/*<Text style={styles.buttonTitle}> DESPENSA </Text>*/}
                        {/*<Text style={styles.buttonAvailable}> 100.00 </Text>*/}
                        {/*<Text style={styles.buttonWholeAmount}> 1000.00 </Text>*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}
            {/*</View>*/}



            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onPressLearnMore}
                                      style={styles.button}>
                        <Text style={styles.plusSign}> + </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 5,
        flex: 1
    },
    buttonTitle: {
        color: '#2f7092',
        paddingTop: 10,
        fontSize: 22,
        fontWeight: '200'
    },
    plusSign: {
        color: '#2f7092',
        fontSize: 60
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
        height: 90,
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