import React, {useState} from 'react';
import './App.css';
import {Rating} from "./Components/Raiting/Rating";
import {CAccordion} from "./Components/Accordion/ControlAcordion/Accordion";
import {RatingControlled} from "./Components/Raiting/ConctrollRaiting/ControllRating";
import {Accordion} from "./Components/Accordion/UnccontrollAcordion/Accordion";
import {OnOfControll} from "./Components/OnOf/Controll/ControlOnOf";
import {Counter} from "./Components/Counter/Counter";
import {InputComponent} from "./Components/Input/Input";
import {MyAccordion} from "./Components/Accordion/MyAccordion/MyAccordion";

export  type arrForMap = Array<valueType>;
export type valueType =  number;
export const mapForRating: arrForMap = [1,2,3,4,5];
function App() {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [value, setValue] = useState<valueType>(0);
    const [on, setOn] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');



    //test
    const itemsForMyAccordion = [
        {id: 1, title: '1first'},
        {id: 2, title: '2second'},
        {id: 3, title: '3third'},
        {id: 4, title: 'expected'},
        {id: 5, title: '5five'}
    ];

  return (
    <div className="mainDiv">
        {/*<CAccordion title={'New Task Acc'} onLiClick={(value) => {console.log(value)}} collapsed={collapsed} setCollapsed={setCollapsed} items={[{value:1, title:'As'}, {value:2, title:'Bars'}, {value:3, title:'Arm'}]}/>*/}
        {/*<hr/>*/}
        {/*<Rating color={'red'}/>*/}
        {/*<hr/>*/}
        {/*<Accordion title={'New Task Acc'}/>*/}
        {/*<hr/>*/}
        {/*<RatingControlled mapForRating={mapForRating} value={value}  onclick={setValue}/>*/}
        {/*<hr/>*/}
        {/*<OnOfControll on={on} switchOn={setOn}/>*/}
        {/*<hr/>*/}
        {/*<Counter initValue={0} maxValue={5}/>*/}
        {/*<hr/>*/}
        {/*<InputComponent value={inputValue} setValue={(e) => {setInputValue(e.currentTarget.value)}}/>*/}
        <MyAccordion items={itemsForMyAccordion} title={'OpenToonz'}/>
    </div>
  );
}

export default App;
