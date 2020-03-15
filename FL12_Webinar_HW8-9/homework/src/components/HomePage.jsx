import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import Card from './Card';
import AddBtn from './addBtn';
import Add from './AddPage';




function HomePage() {
    
    const [courses, setCourses] = useState([]);
    
    function addCourse(course) {
            setCourses(prevCourses => {
            return [...prevCourses, course];
        });
     }

     function deleteCourse(id) {
        setCourses(prevCourses => {
        return prevCourses.filter((course, index) => {
           return index !== id;
        })
    });
 }
    
    return (
      <div>
      <Add onAdd={addCourse}/>
        <Input />
        {/* <Link to="/add" style={{textDecoration: "none"}}>
           <AddBtn />
        </Link> */}
        <AddBtn />
        {courses.map((course, index) => {
          return <Card
            key={index}
            id={index}
            date={course.date}
            title={course.title}
            description={course.description}
            duration={course.duration}
            onDelete={deleteCourse}
          />
        })}
      </div>
    );
}

export default HomePage;


