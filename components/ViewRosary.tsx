import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
// import {begningOrder, endOrder, prays, praysNames, misterys} from "@/constants/Prays";
import Getpray from "@/constants/Prays";
import { useState } from "react";

export interface ViewRosaryProps {
    misteryName: string,
    endPray: (screen: string) => void
}

const prayOrder = new Getpray()


export default function ViewRosary(props: ViewRosaryProps) {
    const imageBackground = require('@/assets/images/NossaSenhora.jpeg')

    prayOrder.mistery = props.misteryName
    
    const [misteryText, setMisteryText] = useState(prayOrder.misteryText)
    const [pray, setPray] = useState(prayOrder.pray)
    const [prayName, setPrayName] = useState(prayOrder.prayName)

    function nextPray() {
        prayOrder.nextPray()
        if(!prayOrder.prayFinished){
            setMisteryText(prayOrder.misteryText)
            setPray(prayOrder.pray)
            setPrayName(prayOrder.prayName)
        } else {
            props.endPray('Menu')
        }
    }

    return (
        <ImageBackground style={styles.image} source={imageBackground}>
                <Text style={misteryText ? styles.textIndex : {}}>
                    {misteryText}
                </Text>
            <Text style={styles.textTitle}>{prayName}</Text>
            <Text style={styles.textPray}>
                {pray}
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