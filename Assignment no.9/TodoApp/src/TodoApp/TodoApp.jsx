import {React,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoAddCircle,IoTrashBin } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";

const TodoApp = () => {
 let [inputvalue,setInputValue] = useState('')
 let [items,setItems] = useState([])
 
  const addItem = () =>{
  if(inputvalue){
    setItems([...items,inputvalue])
    setInputValue('')
  }

}

 const handleKeyDown = (e) =>{
     if(e.key == 'Enter'){
        addItem()
     }
 }


 
 const updateItem = (index) =>{
  let userInput = prompt('Enter Updated Value');
  let updatedItems = [...items] 
  updatedItems[index] = userInput
  if(userInput){
    setItems(updatedItems)
  }else{
    setItems(items)

  }
  
 }


  const deleteAll = () => {
    setItems([])
  }

  const deleteItem = (index) => {
    let filterItems = items.filter((elem, i) => index !== i);
    setItems(filterItems);
  }
  return (
    <div className='d-flex flex-row justify-content-center'>
      <div className='text-center mt-4'>
        <div className='mb-4'>
            <h1 className='fw-bold'>Todo App</h1>
        </div>

        <div>
            <input value={inputvalue} placeholder='Enter Items' onKeyDown={handleKeyDown} onChange={(e)=>{setInputValue(e.target.value)}} type="text" className='fs-3 me-2' />
            <IoAddCircle className='display-5 me-3' onClick={addItem} />
            <IoTrashBin  className='display-5 text-danger' onClick={deleteAll} />
        </div>

       <div className='fs-3 mt-3'>
       {
          items.map((e, i) => {
            return( 
            <li key={i} type={1}>{e}  
              <span className='ms-4 me-3'><MdCancel className='text-danger' onClick={()=>deleteItem(i)} /></span>
              <span onClick={()=>updateItem(i)}><BiNotepad/></span> 
             </li>
            )
          }  )
        }
       </div>
      </div>
    </div>
  )
}

export default TodoApp
