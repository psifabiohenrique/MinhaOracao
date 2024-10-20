import ViewMenu from "@/app/ViewMenu";
import ViewRosary from "@/app/ViewRosary/[id]";
import BtnChoice from "@/components/btnChoice";
import MenuScreenManager from "@/hooks/MenuScreenManager";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Link href={'/ViewMenu'} style={styles.btn}>Escolher o terço</Link>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 20,
    // margin: 5,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'purple',
    padding: 20,
    margin: 5,
    borderRadius: 50,
    fontSize:20
  }
})