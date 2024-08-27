import {React,useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { IoAddCircle,IoTrashBin } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import database from '../Config/firebase';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';


const Todoapp = () => {
 let [inputvalue,setInputValue] = useState('')
 let [items,setItems] = useState([])
 const [inputCollectionVal, setInputCollectionVal] = useState('');
 let [todoItems,setTodoItems] = useState([])
 let localStorageUsername = localStorage.getItem('todoAppusername')
 const arr = [];

 useEffect(()=>{
  getData()
  showSweetAlert()
 },[])

const showSweetAlert =  () => {
  if(!localStorage.getItem('todoAppalertShown')){
    Swal.fire({
      title: 'Enter Your Name',
      input: 'text',
      inputValue: inputCollectionVal,
      inputPlaceholder: '',
      allowOutsideClick: false,
      allowEscapeKey: false,   
      showCancelButton: true,
      confirmButtonText: 'Submit',
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        const value = result.value; // Get the input value from the SweetAlert
    
        if (!value) {
          showSweetAlert()
          Swal.showValidationMessage('Input is Required')
        }
        else {
          setInputCollectionVal(value);
          localStorage.setItem('todoAppusername', value);
          localStorage.setItem('todoAppalertShown', 'true');
          Swal.fire('Success', 'Your account is created!', 'success');
          const docRef = await addDoc(collection(database, localStorage.getItem('todoAppusername')),{message: "New User created",username: value});
          const users = await addDoc(collection(database, 'allusers'),{username: value});
          localStorage.setItem('showTodoAppProfile','true')
              getData()
            }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        showSweetAlert()
        Swal.showValidationMessage('Input is Required')
      }
    });
  }
};

const deleteUserfromDb = async (id) =>{
  const deleteUserfromdb = await deleteDoc(doc(database,'allusers',id))
}
const addAndGetData = () =>{
  addIteminDb()
  getData()
}

const getData = async () => {
  try {
    const getData = await getDocs(collection(database, localStorage.getItem('todoAppusername')));
 
    getData.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });

    arr.sort((a, b) => a.todo - b.todo);

    const filteredArr = Array.from(new Map(arr.map(item => [item.todo, item])).values());

    


    setTodoItems(filteredArr);
  } catch (error) {
    console.log(error);
  }
};

 const addIteminDb = async () => {
   try {  
     if(inputvalue){
       setItems([...items,inputvalue])
       
       const docRef = await addDoc(collection(database, localStorage.getItem('todoAppusername')), {todo: inputvalue});
       setInputValue('')
      }
    } catch (error) {
      console.log("error", error);
    }
  };


 const handleKeyDown = (e) =>{
     if(e.key == 'Enter'){
        addAndGetData()
     }
 }

 const EditData = async (id) => {

  let updateVal = prompt("Enter updated value");

  let updateObj = {
    todo: updateVal,
  };

  const updateData = await updateDoc(doc(database, localStorageUsername, id), updateObj);
   window.location.reload()

};

 const deleteSubCollections = async (id) =>{
   const deleteSubCollection = await deleteDoc(doc(database, localStorageUsername, id));

 }

  const deleteAll = async () => {
    const getData = await getDocs(collection(database,localStorageUsername));
    getData.forEach((subcollection) => {
      deleteSubCollections(subcollection.id)
    });
    const makeMessageSubCollectionAgain = await addDoc(collection(database, localStorageUsername), {message: 'user created again',username: localStorageUsername});
    window.location.reload()
      
   
  }

  const deleteItem =async (id) => {
    
    const getSubData =await  getDoc(doc(database, localStorage.getItem('todoAppusername'), id))
    
    // if (getSubData.exists())
    
    if(getSubData.data().message != "New User created"){
      const deleteItem = await deleteDoc(doc(database, localStorage.getItem('todoAppusername'), id));
     window.location.reload()
    }
     else {
       console.log("No such document!");
     }
  }

  const deleteAccount = async () =>{   
    const deleteAccount = await getDocs(collection(database,localStorageUsername));
    const getDeleteUser = await  getDocs(collection(database,'allusers'));
    getDeleteUser.forEach((subcollection)=>{
      if(subcollection.data().username == localStorageUsername){
         deleteUserfromDb(subcollection.id) 
      }
    })
    deleteAccount.forEach((subcollection) => {
      deleteSubCollections(subcollection.id)
    });
    localStorage.removeItem('todoAppusername')
    localStorage.removeItem("todoAppalertShown");
    localStorage.removeItem('showTodoAppProfile')

    setTimeout(() => {
      window.location.reload()
    }, 500);
    
  }

 
  
  return (
    <>
     {
    localStorage.getItem('showTodoAppProfile') == 'true'
    ? 
      <div  className='w-100 d-flex justify-content-end'>
      <div className='me-3 mt-1 '>
        <button  style={{
          width:  "40px",
          height: "40px",
          backgroundColor: "#3498db",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "17px"
      }} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   {localStorageUsername.slice(0,1).toUpperCase()}
</button>
<ul className="dropdown-menu">
  <li><a className="dropdown-item mb-1">Username: {localStorageUsername}</a></li>
  <li><a className="dropdown-item" onClick={deleteAccount}>Delete Account</a></li>
</ul>
     
      </div>


      </div>: ""
     }
    <div className='d-flex flex-row justify-content-center'>
      <div className='text-center mt-4'>
        <div className='mb-4'>
            <h1 className='fw-bold'>Todo App</h1>
        </div>
        

        <div>
            <input value={inputvalue} placeholder='Enter Items' onKeyDown={handleKeyDown} onChange={(e)=>{setInputValue(e.target.value)}} type="text" className='fs-3 me-2' />
            <IoAddCircle className='display-5 me-3' onClick={addAndGetData} />
            <IoTrashBin  className='display-5 text-danger' onClick={deleteAll} />
        </div>

       <div className='fs-3 mt-3'>
       {
          todoItems.map((e, i) => {
            return( 
              e.todo != undefined? 
              <li key={i} type={1}>{e.todo}  
              <span className='ms-4 me-3'><MdCancel className='text-danger' onClick={()=>deleteItem(e.id)} /></span>
              <span onClick={()=>EditData(e.id)}><BiNotepad/></span> 
             </li>: ""
            )
          }  )
        }
       </div>
      </div>
    </div>
    </>
  )
}

export default Todoapp

