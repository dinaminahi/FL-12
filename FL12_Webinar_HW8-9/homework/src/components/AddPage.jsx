import React, {useState} from 'react';

function AddPage(props) {
    
    const [course, setCourse] = useState({
       title: '',
       description: '',
       duration: '',
       authors: '',
       date: ''
    });

    function handleChange(event) {

       const {name, value} = event.target;
       
       setCourse(prevCourse => {
           return {
               ...prevCourse,
               [name]: value
           }
       });
    }

    function submitCourse(event) {
        props.onAdd(course);
        setCourse({
            title: '',
            description: '',
            duration: '',
            authors: '',
            date: ''
         });
        event.preventDefault();
    }
    
    return (
      <div>
      <h1>New Course</h1>
        <form>
          <label>Title*</label>
          <input className="input" onChange={handleChange} value={course.title} name="title" />
          <label>Description*</label>
          <textarea className="input" onChange={handleChange} value={course.description} name="description" rows="7" />
          <label>Duration*</label>
          <input className="input" onChange={handleChange} value={course.duration}  name="duration" />
          <label>Authors*</label>
          <input className="input" onChange={handleChange} value={course.authors} name="authors" />
          <label>Date*</label>
          <input className="input" onChange={handleChange} value={course.date} type="date" name="date" />
          <button className="add-course-btn" onClick={submitCourse}>Add</button>
        </form>
      </div>
    );
  }


export default AddPage;
