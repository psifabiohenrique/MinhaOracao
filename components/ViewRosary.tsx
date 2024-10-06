import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import prays from "@/constants/Prays";
import { useState } from "react";

export interface ViewRosaryProps {
    misteryName: string,
    endPray: (screen: string) => void
}

export default function ViewRosary(props: ViewRosaryProps) {
    const imageBackground = require('@/assets/images/NossaSenhora.jpeg')
    const [mistery, setMistery] = useState(1)
    const [prayNumber, setPrayNumber] = useState(1)

    function nextPray() {
        if(prayNumber < 10) {
            setPrayNumber(prayNumber + 1)
        } else {
            if (mistery < 5) {
                setMistery(mistery + 1)
                setPrayNumber(1)
            } else {
                props.endPray('Menu')
            }
        }
    }
    function previewsPray() {
        if(prayNumber > 1) {
            setPrayNumber(prayNumber - 1)
        } else {
            if (mistery > 1) {
                setMistery(mistery - 1)
                setPrayNumber(10)
            } else {
                props.endPray('Menu')
            }
        }
    }


    return (
        <ImageBackground style={styles.image} source={imageBackground}>
            <Text style={styles.textIndex}>
                {mistery}° Misterio {props.misteryName}{'\n'} {prayNumber}ª Ave Maria
            </Text>
            <Text style={styles.textTitle}>Ave Maria</Text>
            <Text style={styles.textPray}>
                {prays['aveMaria']}
            </Text>
            <View style={styles.container}>
                <Pressable style={[styles.buttonBackward, styles.buttons]} onPress={() => previewsPray()}>
                    <Text style={styles.buttonsText} >Anterior</Text>
                </Pressable>
                <Pressable style={[styles.buttonFoward, styles.buttons]} onPress={() => nextPray()}>
                    <Text style={styles.buttonsText}>Proximo</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
        resizeMode: 'cover',
        width: '100%',
    },
    textIndex: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        opacity: 0.7,
    },
    textTitle: {
        padding: 20,
        fontSize:28,
        fontWeight: '900',
    },
    textPray: {
        marginHorizontal: 50,
        padding:20,
        fontSize: 20,
        color: 'white',
        backgroundColor: '#000',
        opacity: 0.7,
        borderRadius: 30,
    },
    buttons: {
        padding: 10,
        marginVertical: 40,
        marginHorizontal: 20,
        borderRadius: 30,
    },
    buttonsText: {
      fontSize: 20,  
    },
    buttonFoward: {
        backgroundColor: 'green',
    },
    buttonBackward: {
        backgroundColor: 'red',
    }
})