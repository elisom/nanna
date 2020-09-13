import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// import MaterialChipBasic from '@material/chips';

const Welcome = () => {
    return (
        <View style={styles.container}>
            {/* Question box */}
            <View style={styles.questionBox}>
                <View style={styles.question}>
                    <View style={styles.questionRow}>
                        <Text style={styles.questionText}>
                            Hello, how can I help you?
                        </Text>
                        <Icon name="info-with-circle" style={styles.icon} ></Icon>
                    </View>
                </View>
                <Image source={require('../assets/img/logo.png')} resizeMode="contain" style={styles.image} ></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(225,150,150,1)"
    },
    questionBox: {
        width: 353,
        height: 117,
        marginTop: 59,
        marginLeft: -16
    },
    question: {
        top: 31,
        left: 36,
        width: 317,
        height: 86,
        position: "absolute",
        backgroundColor: "#E6E6E6",
        borderWidth: 0,
        borderColor: "#000000",
        borderStyle: "solid",
        borderRadius: 24,
        flexDirection: "row"
    },
    questionRow: {
        height: 50,
        flexDirection: "row",
        flex: 1,
        marginLeft: 50
    },
    questionText: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 34
    },
    icon: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        height: 46,
        width: 40,
        marginLeft: 60,
        marginTop: 8
    },
    image: {
        top: 0,
        left: 0,
        width: 90,
        height: 64,
        position: "absolute"
    }
});

export default Welcome;