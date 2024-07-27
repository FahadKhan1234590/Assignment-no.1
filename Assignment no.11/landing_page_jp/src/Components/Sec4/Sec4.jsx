import React from 'react'
import Training_Card from '../Training_Card/Training_Card'
import web_and_mobile from './web_and_mobile.png'
import blockchain from './blockchain.jpg'
import flutter from './flutter.png'
import graphic_design from './graphic_design.jpg'
import social_media_marketing from "./social_media_marketing.png"

import  {Box, Stack } from '@mui/material'

const Sec4 = () => {
  return (
    <>
     <div>
        <div className="text-center mt-5 pt-5 mb-5 pb-5">
         <span className='fw-bold  display-5' style={{color : "#1F632B"}}>
             IT Trainings Offering In Jawan Pakistan
         </span>
     </div>
    

     <div className='container container-fluid'>
         <div className="d-md-flex justify-content-center gap-5 mb-4">
         <Box sx={{width : {xs : "90%",sm : "500px",md : "380px"}}}> <Training_Card imgSrc = {web_and_mobile} width = "100%" text1 = "Web and Mobile Application" text2="Development"/>
         </Box>

          <Box sx={{width : {xs : "90%",sm : "500px",md : "380px"}}}> <Training_Card imgSrc = {flutter} width = "100%" text1 = "Flutter Mobile Application" text2="Development"/>
         </Box>

        
         <Box sx={{width : {xs : "90%",sm : "500px",md : "310px"}}}> <Training_Card imgSrc = {graphic_design} width = "100%" text1 = "Graphic Design And Video Editing"/>
         </Box>
         </div>

         <div  className="d-md-flex justify-content-center gap-5">

         <Box sx={{width : {xs : "90%",sm : "500px",md : "300px"}}}>
           <Training_Card imgSrc = {social_media_marketing} width = "100%" text1 = "Digital And Social Media Marketing"/>
         </Box>
         
         <Box sx={{width : {xs : "90%",sm : "500px",md : "300px"}}}>
           <Training_Card imgSrc = {blockchain} width = "100%" text1 = "BlockChain Development"/>
         </Box>
         </div>
     </div>
     </div>
    </>
  )
}

export default Sec4
