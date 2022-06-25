import quote from "../quotes.json";
import React, { useState } from 'react';
const QuoteBox = ({changer}) => {
    let init = quote.length;
    let randomQ = Math.floor(Math.random() * init)
    const [ change, setChange ] = useState(randomQ);
    const [ colorTxt, setColorTxt] = useState(changer);
    let bg = ['#B10DC9', '#001f3f', '#3D9970', '#FFDC00', '#F012BE', '#f0143B', '#85144b', '#FF851B'];
    const clickIt = () => {
        let ranNumber = Math.floor(Math.random() * init);
        setChange(ranNumber)
        let colors = Math.floor(Math.random() * 5);
        let changer = bg[colors] 
        setColorTxt(changer);
        document.body.style = `background: ${changer}`;
    };

    return (
       
        <div className="card">
            <div className="symbols" style={{color: colorTxt}}>“</div>
           <div className="quoteBody" style={{color: colorTxt}}>
            {quote[change].quote}
           </div>
           <div className="author" style={{color: colorTxt}}>
             {quote[change].author}
           </div>
           <button className="btnNex" onClick={clickIt} style={{color: colorTxt}}>Siguiente</button>
        </div>
    );
};

export default QuoteBox;