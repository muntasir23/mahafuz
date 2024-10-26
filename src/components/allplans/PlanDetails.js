import React from 'react'
import Basic from './Basic';
import Standard from './Standard';
import Premium from './Premium';

export default function PlanDetails({status}) {
  
  let content  = null;
  if (status === "Basic") {
    content = <Basic />
  }
  if (status === "Standard") {
    content = <Standard />
  }
  if (status === "Premium") {
    content = <Premium />
  }

  return (
    <div>
      {content}
    </div>
  )
}

