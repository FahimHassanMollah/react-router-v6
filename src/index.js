import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from "react-router-dom";
ReactDOM.render(

  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/myapps" element={<Navigate replace to='/learn'/>}></Route>
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Course />} >
            <Route path=":courseId" element={<CourseId/>}></Route>
          </Route>
          <Route path="bundles" element={<Bundles/>} />
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}>Dahsbord</Route>
      </Routes>
    </BrowserRouter>
     
  </React.StrictMode>,
  document.getElementById('root')
);

function Home() {
  return (
    <>
      home
    </>
  )
}

function Learn() {
  return (
    <>
      <h1>Learn</h1>
      <h4>all course are list here</h4>
      <Link to='/learn/courses'>Courses</Link>
      <br />
      <Link to='/learn/bundles'>Bundles</Link>
      <Outlet />
    </>
  )
}

function Course() {
  const courseList = ['React', 'angular', 'vue ', 'node js ']; 
  const randomCourse = courseList[Math.floor(Math.random()*courseList.length)];
  return (
    <>
      <h1>all Course list</h1>
      <NavLink style={({isActive}) => {
        return  {
          backgroundColor: isActive ? 'red' : 'green'
         }
        
      }} to={`/learn/courses/${randomCourse}`}>{randomCourse}</NavLink>
      <br />
      <NavLink style={({ isActive }) => {
        return {
          backgroundColor: isActive ? 'red' : 'green'
        }

      }} to={`/learn/courses/test`}>tests</NavLink>

      <h1> Course card</h1>
      <Outlet/>
    </>
  )
}

function Bundles() {
  return (
    <>
      <h1>Bundles list</h1>
      <h1>Bundles card</h1>
    </>
  )
}

function CourseId() {
  const navigate = useNavigate();
  const {courseId } = useParams();
  return (
    <>
      <h1>URL params is : {courseId}</h1>
      <button onClick={() => navigate('/dashboard', {
        state:'2999'
      })}> Price</button>
      
    </>
  )
}

function Dashboard() {
const location = useLocation()
  return (
    <>
      <h1>If that i got here is ------ { location.state }</h1>
     
    </>
  )
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
