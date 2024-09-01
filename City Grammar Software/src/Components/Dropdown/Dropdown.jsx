import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoIosArrowDown } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Dropdown.css'
import { PiStudent } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
const Dropdown = (props) => {
  return (
    <div className='mb-3'>
      <Accordion className='dropdownonhover'   style={{boxShadow: "-1px 0px 10px gray",borderRadius : "0px",color : "#4BB152"}}>
        <AccordionSummary 
          expandIcon={<IoIosArrowDown style={{color : "#4BB152"}}  />}
          aria-controls="panel1-content"
          id="panel1-header"
          >
         <span className='me-2'>
         {props.icon}
         </span>
          <Typography className='fs-4 typocolor'>{props.text}</Typography>
        </AccordionSummary>
        <AccordionDetails className='ms-2'>
          <Typography  className='fs-5 mb-3 '>
           <NavLink onClick={props.onLinkClick}  style={{color : "#4BB152"}} className='onhovertextcolor text-decoration-none' to={props.linkto1}>
            {props.subtext1}
            </NavLink>
          </Typography>
          <Typography  className='fs-5 '>
          <NavLink onClick={props.onLinkClick}  style={{color : "#4BB152"}} className='onhovertextcolor text-decoration-none' to={props.linkto2}>
            {props.subtext2}
            </NavLink>
          </Typography>
        </AccordionDetails>
      </Accordion>
   
   
    </div>
  );
}

export default Dropdown