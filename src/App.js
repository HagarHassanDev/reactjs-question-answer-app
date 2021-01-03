import * as React from 'react';
import {fetchDomainsData} from './data-service'

import  AskQuestion from './components/AskQuestion';
import QuestionList from './components/QuestionList';

const {useState , useEffect } = React ; 



function App() {
  // state 
  const [inputText , setInputText] = useState('');
  const [domain , setDomain] = useState('');
  const [answer , setAnswer] = useState('');
  const [questions , setQuestions] = useState([]);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div className="App">
     <h1 className="title">
       QA
       </h1> 
       
       <AskQuestion answer={answer} setAnswer={setAnswer} domain={domain} setDomain={setDomain} setInputText={setInputText} inputText={inputText} questions={questions} setQuestions={setQuestions}/>
        <QuestionList questions={questions} />
      
      {/* for testing only  */}
       {/* <button onClick={fetchDomainsData} className="btn btn-success">Get domains</button> */}
    </div>
  );
}

export default App;
