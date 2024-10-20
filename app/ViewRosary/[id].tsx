import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
// import {begningOrder, endOrder, prays, praysNames, misterys} from "@/constants/Prays";
import Getpray from "@/constants/Prays";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

export interface ViewRosaryProps {
}

const prayOrder = new Getpray()


export default function ViewRosary() {
    const imageBackground = require('@/assets/images/NossaSenhora.jpeg')

    const {rosary, id} = useLocalSearchParams()

    if (typeof rosary === "string") {
        prayOrder.mistery = rosary
    } else {
        prayOrder.mistery = "Doloroso"
    }

    if (typeof Number(id) == "number") {
        prayOrder.nextPray(Number(id))
    } else {
        prayOrder.nextPray(0)
    }
    

    useEffect(() => {
        if (prayOrder.prayFinished) {
            prayOrder.prayFinished = false
            router.navigate("/")
        }
    })



    // const [misteryText, setMisteryText] = useState(prayOrder.misteryText)
    // const [pray, setPray] = useState(prayOrder.pray)
    // const [prayName, setPrayName] = useState(prayOrder.prayName)

    const misteryText = prayOrder.misteryText
    const pray = prayOrder.pray
    const prayName = prayOrder.prayName


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
                <Link href={`/ViewRosary/${Number(id) - 1}`} style={[styles.buttonBackward, styles.buttons]}>
                    Anterior
                </Link>
                <Link href={`/ViewRosary/${Number(id) + 1}`} style={[styles.buttonFoward, styles.buttons]}>
                    Próximo
                </Link>
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
        fontSize: 18,
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
        fontSize: 20,  

    },
    buttonBackward: {
        backgroundColor: 'red',
        fontSize: 20,  
    }
})