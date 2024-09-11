import  { useEffect, useState } from 'react';
const UseData = () => {
     const [formData, setFormData] = useState({
          student: {
            name: "",
            id: "",
            batch: "",
            section: "",
            department: "",
          },
          teacher: {
            name: "",
            designation: "",
            department: "",
          },
          assignment: {
            title: "",
            courseName: "",
            courseCode: "",
          },
          additional: {
            assignmentNo: "",
            submissionDate: "",
          },
        });
        useEffect(() => {
          // Load saved form data from localStorage
          const savedFormData = JSON.parse(localStorage.getItem("formData"));
          if (savedFormData) {
            setFormData(savedFormData);
          }
        }, []);
     return {formData,setFormData}
};
export default UseData;