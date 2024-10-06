import { Text, View } from "react-native";
import BtnChoice from "@/components/BtnChoice";

export interface ViewMenuProps {
    screen: string,
    startPray: Function
}

export default function ViewMenu(props: ViewMenuProps) {
    return (
        <View
        style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:10,
        backgroundColor: '#ADD8E6'
        }}
        >
        <Text>{props.screen}</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>Escolha o terço que gostaria de rezar</Text>
        <BtnChoice text={'Mistérios Dolorosos'} onPress={() => props.startPray('Dolorosos')}/>
        <BtnChoice text={'Mistérios Gloriosos'} onPress={() => props.startPray('Gloriosos')}/>
        <BtnChoice text={'Mistérios Luminosos'} onPress={() => props.startPray('Luminosos')}/>
        <BtnChoice text={'Mistérios Gozosos'} onPress={() => props.startPray('Gozosos')}/>
        </View>
    )
}
