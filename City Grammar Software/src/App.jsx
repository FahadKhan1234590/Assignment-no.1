import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Dashboard from './Screens/Dashboard'
import StudentRegistration from './Screens/Student/Student-Registration/StudentRegistration'
import StudentList from './Screens/Student/Student-List/Student-List'
import TeacherRegistration from './Screens/Teacher/Teacher-Registration/TeacherRegistration'
import TeacherList from './Screens/Teacher/Teacher-List/Teacher-List'
import SubjectsList from './Screens/Subjects/Subjects-List/Subjects-List'
import AddSubjects from './Screens/Subjects/Add-Subjects/AddSubjects'
import AddSyllabus from './Screens/Syllabus/Add-Syllabus/AddSyllabus'
import SyllabusList from './Screens/Syllabus/Syllabus-List/Syllabus-List'
import FeeStructure from './Screens/Fees/FeesStructure/FeeStructure'
import FeeSubmission from './Screens/Fees/FeesSubmission/FeesSubmission'
import ExamSchedule from './Screens/Exam/Exam Schedule/ExamSchedule'
import ExamResults from './Screens/Exam/Exam Results/ExamResults'
import ClassForm from './Screens/Class/Class-Form/ClassForm'
import ClassList from './Screens/Class/Class-List/ClassList'
import AdmissionForm from './Screens/Admission/Admission-Form/Admission'

const App = () => {
  return (
    <Routes>
      <Route index element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard/" element={<Dashboard/>}>
     
      <Route path="students/student-registration" element={<StudentRegistration/>}/>
      <Route path="students/students-list" element={<StudentList/>}/>
    
      <Route path="teachers/teacher-registration" element={<TeacherRegistration/>}/> 
      <Route path="teachers/teachers-list" element={<TeacherList/>}/>

      <Route path="subjects/add-subjects" element={<AddSubjects/>}/> 
      <Route path="subjects/subjects-list" element={<SubjectsList/>}/>

      <Route path="syllabus/add-syllabus" element={<AddSyllabus/>}/> 
      <Route path="syllabus/syllabus-list" element={<SyllabusList/>}/>

      <Route path="fees/fees-submission" element={<FeeSubmission/>}/>
      <Route path="fees/fees-structure" element={<FeeStructure/>}/>

      <Route path="exam/exam-schedule" element={<ExamSchedule/>}/>
      <Route path="exam/exam-results" element={<ExamResults/>}/>

      <Route path="class/class-form" element={<ClassForm/>}/>
      <Route path="class/class-list" element={<ClassList/>}/>

      <Route path="admission/admission-form" element={<AdmissionForm/>}/>


     
      </Route>
    </Routes>
  )
}

export default App
