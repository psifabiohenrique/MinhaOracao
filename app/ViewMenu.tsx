import { Text, View } from "react-native";
import BtnChoice from "../components/btnChoice";
import { Link } from "expo-router";
// import BtnChoice from "@/components/BtnChoice";

export interface ViewMenuProps {
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
        <Text>Escolha o seu terço</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>Escolha o terço que gostaria de rezar</Text>
        <Link href={'/ViewRosary'}>
            <BtnChoice text={'Mistérios Dolorosos'}/>
        </Link>
        <BtnChoice text={'Mistérios Gloriosos'} />
        <BtnChoice text={'Mistérios Luminosos'} />
        <BtnChoice text={'Mistérios Gozosos'}/>
        </View>
    )
}
