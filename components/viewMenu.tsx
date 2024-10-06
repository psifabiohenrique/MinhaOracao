import { Text, View } from "react-native";
import BtnChoice from "@/components/btnChoice";

export interface ViewMenuProps {
    tela: string,
    setTela: Function
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
        <Text>{props.tela}</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>Escolha o terço que gostaria de rezar</Text>
        <BtnChoice text={'Mistérios Dolorosos'} onPress={() => props.setTela('Dolorosos')}/>
        <BtnChoice text={'Mistérios Gloriosos'} onPress={() => props.setTela('Gloriosos')}/>
        <BtnChoice text={'Mistérios Luminosos'} onPress={() => props.setTela('Luminosos')}/>
        <BtnChoice text={'Mistérios Gozosos'} onPress={() => props.setTela('Gozosos')}/>
        </View>
    )
}
