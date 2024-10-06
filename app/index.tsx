import ViewMenu from "@/components/ViewMenu";
import ViewRosary from "@/components/ViewRosary";
import MenuScreenManager from "@/hooks/MenuScreenManager";

export default function Index() {
  const {screen, setScreen} = MenuScreenManager()

  if(screen === 'Menu') {
    return (
      <ViewMenu screen={screen} startPray={setScreen}/>  
    )
  }
  if(screen == 'Dolorosos') {
    return (
      <ViewRosary misteryName={'Doloroso'} endPray={setScreen}/>  
    )
  }
  if(screen == 'Gloriosos') {
    return (
      <ViewRosary misteryName="Glorioso" endPray={setScreen}/>  
    )
  }
  if(screen == 'Luminosos') {
    return (
      <ViewRosary misteryName="Luminoso" endPray={setScreen}/>  
    )
  }
  if(screen == 'Gozosos') {
    return (
      <ViewRosary misteryName="Gozoso" endPray={setScreen}/>  
    )
  }

}
