import React from 'react';
import QuizStart from './QuizStart';
import ProgressBar from './ProgressBar';
import Questions from './Questions';
import Results from './Results';
import Timer from './Timer';
import {useDispatch,useSelector} from "react-redux";
import {sampleQuestions} from "../data/questions.js";
import {setQuestions} from "../store/quizSlice.js";
import {useEffect} from "react";

function Quiz() {
  const dispatch=useDispatch();

  //load the question
  useEffect(() => {
    dispatch(setQuestions(sampleQuestions));
  
  }, dispatch)
  

  const {questions,currentQuestionIndex,isQuizCompleted,isTimerActive,answers}=useSelector((state)=>state.quiz);
  
  //loading Quiz
  if(questions.length===0){
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-50 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading</p>
        </div>
      </div>
    );
  }

  //is Quiz Completed
  if(isQuizCompleted){
    return(
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 flex items-center justify-center">
        <Results/>
      </div>
    );
  }

  // Quiz Started
  if(!isTimerActive && answers.length===0){
     return(
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 flex items-center justify-center">
        <QuizStart/>
      </div>
    );
  }

  return (    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
        <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rowunded-xl shadow-lg p-6">
                <div className="flex flex-col md:flex-row md-items-center md:justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <ProgressBar/>
                    </div>
                    <div className="md:ml-6">
                      <Timer/>
                    </div>
                </div>
            </div>
        </div>
        <Questions/>
    </div>
  )
}

export default Quiz