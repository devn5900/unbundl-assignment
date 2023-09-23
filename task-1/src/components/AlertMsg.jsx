import React from "react";
import { Alert, Button } from "@material-tailwind/react";
 
export function AlertMsg({msg,color}) {
  
  return (
    <div className={`fixed z-50 top-6 right-4`}>
      <Alert  className={`${color} text-white`} >
        {msg}
      </Alert>
    </div>
  );
}