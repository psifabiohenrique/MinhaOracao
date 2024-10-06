import { Text, View } from "react-native";
import BtnChoice from "@/components/btnChoice";
import { useState } from "react";
import ViewMenu from "@/components/viewMenu";

export default function Index() {
  const [tela, setTela] = useState('Menu')
  if(tela === 'Menu') {
    return (
      <ViewMenu tela={tela} setTela={setTela}/>  
    )
  }
  else {
    return (
      <ViewMenu tela={tela} setTela={setTela}/>  
    )
  }
}
