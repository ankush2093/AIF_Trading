import React, { useState } from 'react';
import{questions} from '../../dataquestion';
import MyAccordion from './MyAccordion';
import '../faqsection/accordian.css';


const Accordion = () => {
    const [data, setData] =useState(questions);
  return (
    <>
    <section className='main-div'>
        <h1>Frequestly asked Questions (FAQ)</h1>
    {
        data.map((curElem)=>{
            const {id, question,answer}=curElem;
        return <MyAccordion key={id}{...curElem}/>
        })
    }
    </section>

  
    </>
  )
}

export default Accordion;