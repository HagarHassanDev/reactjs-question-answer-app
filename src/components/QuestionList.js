import React from 'react';

const QuestionList = ({questions})=>{
    return (
            <div id="accordion"  >
         {
         questions.map((question , index)=>(
  <div className="card rounded" key={question.id} >
    <div className="card-header bg-white" id="headingOne">
      <h5 className="mb-0">
        <button className="bg-white outline-none question-header" data-toggle="collapse" data-target={`#${index}`} aria-expanded="true" aria-controls={index}>
        {question.question}
        </button>
        
      <span  className="badge btn-purple text-white float-right">
                     {question.domain}
                    </span> 
      </h5>
      
    </div>

    <div id={index} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
         {question.answer}
      </div>
    </div>
  </div>


))
}   
</div>
    );
}

export default QuestionList;