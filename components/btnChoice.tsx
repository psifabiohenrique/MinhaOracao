import React, { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export interface btnChoiceProps {
    text: string,
}

export default function BtnChoice(props: btnChoiceProps) {
    // const [text, setText] = useState(props.text)
    return (
        // <Pressable onPress={() => setText(
        //     text === 'Fui Clicado Novamente' ? 'Fui Clicado': 'Fui Clicado Novamente'
        // )} style={styles.container}>
        //     <Text style={styles.text}>{text}</Text>
        // </Pressable>

        <Pressable style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        padding: 20,
        // margin: 5,
        borderRadius: 50,
    },
    text: {
        fontSize: 20,
    }
})