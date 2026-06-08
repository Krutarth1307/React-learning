import List from "./assets/List";
import Props from "./Props";
import sova from "./assets/Sova.png";
import jett from "./assets/Jett.png";
import ClickEvent from "./ClickEvent";


function App(){

       return(
              <>
                     <ClickEvent />
              </>
       )





       // return(
       //        <>
       //               <Props icon= {sova}name="Sova" description = "I'm the hunter."/>

       //               <Props icon= {sova}name="Sova" description = "I use old weapons."/>

       //               <Props icon= {jett}name="Jett" description = "I love wind."/>

       //               <Props icon= {sova}name="Sova" description = "I'm the hunter."/>

       //               <Props />
       //        </>
       // )





       // const fruits = [{id : 1, name : "apple" , calories : 50},
       //               {id : 2, name : "orange" ,calories : 62},
       //               {id : 3, name : "banana" ,calories : 45},
       //               {id : 4, name : "coconut" ,calories : 28}];

       //               const vagetables = [{id :5 , name : "Tomato" , calories : 70},
       //               {id : 6, name : "carrot" ,calories : 62},
       //               {id : 7, name : "patato" ,calories : 64},
       //               {id : 8, name : "onion" ,calories : 91}];

       // return(
       //        <>
       //               {fruits.length > 0 && <List items= {fruits} category = "Fruits"/> }
       //               {vagetables.length > 0 && <List items= {vagetables} category = "Vagetables"/>}
       //        </>
              
       // )

}

export default App;

