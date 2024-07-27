import React from 'react'
const Training_Card = (props) => {
  return (
    <>
      <div className={`text-center`}>
         <div className={`mb-3`}>
         <img src={props.imgSrc} className={`border rounded-3`} style={{width: props.width}}/>
         </div>
        <div>
            <span style={{fontSize : "18px"}}>
                <span>{props.text1}</span> <br/> <span>{props.text2}</span>
            </span>
        </div>
      </div>
    </>
  )
}

export default Training_Card
