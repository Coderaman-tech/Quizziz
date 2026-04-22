import {createSlice} from "@reduxjs/toolkit";

const initialState={
    questions:[],
    currentQuestionIndex:0,
    answers:[],
    isQuizCompleted:false,
    score:0,
    timeLeft:300,
    isTimerActive:false,
    showExplanation:false
};

const quizSlice=createSlice({
    name:'quiz',
    initialState,
    reducers:{
        setQuestions:(state,action)=>{
            state.questions=action.payload;
        },
        startQuiz:(state)=>{
            state.currentQuestionIndex=0,
            state.answers=[];
            state.isQuizCompleted=false;
            state.score=0;
            state.timeLeft=300;
            state.isTimerActive=true;
            state.showExplanation=false;
        },
        decreamentTimer:(state)=>{
            if(state.timeLeft>0 && state.isTimerActive){
                state.timeLeft-=1;
            }
            else if(state.timeLeft===0){
                state.isQuizCompleted=true;
                state.isTimerActive=false;
            }
        }
    },
});

export const {setQuestions,startQuiz,decreamentTimer}=quizSlice.actions;

export default quizSlice.reducer