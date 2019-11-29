import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const DisplayLove = (prop) => {
    console.log('1234567890', prop);
     if (prop.resultData.message) {
        return <Text style={styles.red}>Oops, an error occurred... Something Went Wrong</Text>
    } else {
        return (
            <View>
                <Text style={styles.text}>Percentage: {prop.resultData.percentage}</Text>
                <Text style={styles.text}>Result: {prop.resultData.result}</Text>
            </View>
        );
    }
}

export default DisplayLove;
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    red: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
    }
});
