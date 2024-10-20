import { StyleSheet, Text, View } from "react-native";
import BtnChoice from "../components/btnChoice";
import { Link } from "expo-router";
import MenuScreenManager from "@/hooks/MenuScreenManager";
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
        {/* <Text>Escolha o seu terço</Text> */}
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>Escolha o terço que gostaria de rezar</Text>
        <Link href={{pathname:"/ViewRosary/[id]", params:{rosary:"Doloroso", id:0}}} style={styles.btn}>
            Mistérios Dolorosos
        </Link>
        <Link href={{pathname:"/ViewRosary/[id]", params:{rosary:"Glorioso", id:0}}} style={styles.btn}>
            Mistérios Gloriosos
        </Link>
        <Link href={{pathname:"/ViewRosary/[id]", params:{rosary:"Luminoso", id:0}}} style={styles.btn}>
            Mistérios Luminosos
        </Link>
        <Link href={{pathname:"/ViewRosary/[id]", params:{rosary:"Gozoso", id:0}}} style={styles.btn}>
            Mistérios Gozosos
        </Link>



        {/* <Link href={'/ViewRosary'}>
            <BtnChoice text={'Mistérios Dolorosos'}/>
        </Link>
        <BtnChoice text={'Mistérios Gloriosos'} />
        <BtnChoice text={'Mistérios Luminosos'} />
        <BtnChoice text={'Mistérios Gozosos'}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'purple',
        padding: 20,
        margin: 5,
        borderRadius: 50,
        fontSize:20
        }
})