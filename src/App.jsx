
import React from 'react';

import { FaClipboard } from "react-icons/fa";
import { useState } from "react";
import { useForm } from './form';
import { toast } from "react-hot-toast";
import { getRandomChar , getSpecialChar } from './functioninuse'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App(){
    const [values,setValues]= useForm({
        length:6,
        capital: true,
        small:true,
        number:false,
        symbol:false,
    });
    const [result,setResult] = useState("");

    const FieldArray =[
        {
        field: values.capital,
        getChar:()=> getRandomChar(65,90),
        },
        {
            field: values.small,
        getChar:()=> getRandomChar(97,122),
        },
        {
            field: values.number,
        getChar: ()=> getRandomChar(48,57),
        },
        {
            field:values.symbol,
            getChar: ()=>  getSpecialChar(),
        },

    ];

    const handleOnSubmit =(e) =>{
        e.preventDefault();
        let generatePassword = '';
        const CheckedFields = FieldArray.filter(({ field }) => field);

        for(let i =0;i<values.length;i++){
            const index = Math.floor(Math.random() * CheckedFields.length);
            const letter =CheckedFields[index]?.getChar();


            if(letter){
                generatePassword += letter;
            }
        }
        if(generatePassword){
            setResult(generatePassword);
        }else{
            toast.error("Select at least one field");
        }
    };

    const handleClipboard = async () => {
        if (result) {
            await navigator.clipboard.writeText(result);
            toast.success("Copied to your Clipboard");
        } else {
            toast.error("No password to copy");
        }
    }
    
  return (
    <>
    <Navbar />
    <section>
        <div className="container">
            <form id="pg-form" onSubmit={handleOnSubmit}>
                <div className="result">
                    <input type="text" id="result" placeholder="Min 6 Characters" readOnly value={result}/>
                    <div className="board" onClick={handleClipboard}><FaClipboard></FaClipboard></div>
                </div>
                <div>
                <div className="field">
                <label htmlFor="length">Length</label>
                <input type="number" id="length" min={6} max={10} name="length" value={values.length} onChange={setValues}/>
                </div>
                </div>
                <div className='field'>
                    <label htmlFor="capital">Capital</label>
                    <input type="checkbox" id="capital" name="capital" checked={values.capital} onChange={setValues}/>
                </div>
                <div className='field'>
                    <label htmlFor="small">Small</label>
                    <input type="checkbox" id="small" name="small" checked={values.small} onChange={setValues}/>
                </div>
                <div className='field'>
                    <label htmlFor="number">Number</label>
                    <input type="checkbox" id="number" name="number" checked={values.number} onChange={setValues}/>
                </div>
                <div className='field'>
                    <label htmlFor="symbol">Symbol</label>
                    <input type="checkbox" id="symbol" name="symbol" checked={values.symbol} onChange={setValues}/>
                </div>
                <button type="submit">Generate Password</button>
            </form>
        </div>
    </section>
    <Footer/>
    </>
  );

}

export default App