import Props from "./Props";
import IconSova from './assets/Sova.png';
import IconSage from './assets/Sage.png';
import IconJett from './assets/Jett.png';

function App() {

  return(

        <>
      <Props name = "Sova"
             description = "I'm the hunter. I like to use old weapons. " 
             icon = {IconSova}
             />
      <Props name = "Jett"
             description = "I love the wind as it feels like knife. " 
             icon = {IconJett}
             />
      <Props name = "Sage"
             description = "I'm healer but i'm not just a healer. " 
             icon = {IconSage}
             />
      
    </>

  )
  }
    
export default App
