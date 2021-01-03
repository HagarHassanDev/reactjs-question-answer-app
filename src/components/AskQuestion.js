import React from 'react'

const AskQuestion = ({   setAnswer , domain, setDomain, inputText , setInputText , questions , setQuestions}) => {

    const inputTextHandler =(e)=>{
        setInputText(e.target.value);
    }

    const handleChangeDomain =(e)=>{
      setDomain(e.target.value);  
    
    } 
    const handleAskQuestion = (e)=>{
        e.preventDefault();
        // answer will be Hagar Hamdy API response 
        setAnswer('');
        // we need to change id 
        setQuestions([...questions , {question : inputText ,id:Math.random()*1000 , domain:domain , answer:'this is an answer' }]);
        setInputText('');
        setDomain('');
    }


    function SubmitButton(){
      if (inputText && domain && domain !== 'select domain' ){
        return  <button type="submit" onClick={handleAskQuestion} className="btn btn-lg btn-block btn-purple text-white" >ASK</button>

      } else {
        return <button disabled type="submit" onClick={handleAskQuestion} className="btn btn-lg btn-block btn-purple text-white" >ASK</button>

      };
    };

    return (
            <div className="question-wapper">
        <div className="form-group">
         <input onChange={inputTextHandler} value={inputText} className="form-control" type="text" id="question-input" placeholder="What is your question ?" />
          </div> 
          <div className="form-group">


         <select onChange={handleChangeDomain} name="domains"  value={domain} className="form-control">
            <option value="select domain"  >select domain</option>
            <option value="domain1"> domain1</option>
            <option value="domain2"> domain2</option>
            <option value="domain3"> domain3</option>
           </select> 
          </div> 
          <div className="form-group">
            <SubmitButton/>
          </div>
       </div>

    );

}


export default AskQuestion;