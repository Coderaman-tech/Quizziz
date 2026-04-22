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
    },
});

export const {setQuestions}=quizSlice.actions;

export default quizSlice.reducer