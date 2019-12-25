import React from 'react';
import Courses from './components/Course';


const App = ({courses}) => {
  
  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
};

export default App;
