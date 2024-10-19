// import ViewMenu from "@/components/ViewMenu";
import ViewMenu from "@/app/ViewMenu";
import ViewRosary from "@/app/ViewRosary";
import BtnChoice from "@/components/btnChoice";
import MenuScreenManager from "@/hooks/MenuScreenManager";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Link href={'/ViewMenu'}>
          <BtnChoice text="Escolher Terço"/>
        </Link>
      </View>
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

})