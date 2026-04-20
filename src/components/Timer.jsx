import React from 'react';
import {Clock} from "lucide-react";

function Timer() {
  return (
    <div className={`flex items-center space-x-2`}>
        <Clock size={20}/>
        <span className="font-mono text-lg font-semibold">Time Left</span>
    </div>
  )
}

export default Timer