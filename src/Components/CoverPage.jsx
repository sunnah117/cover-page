import { useRef } from "react";
import ReactToPrint from "react-to-print";
import UseData from "./Hook/UseData";
import defaultPage from "../assets/default.jpg";
import { FaDownload } from 'react-icons/fa';

const CoverPage = () => {
  const { formData } = UseData();
  if(formData.student.department){
    console.log("found");
  }else{
    console.log("not found");
  }
  console.log(formData);
  const componentRef = useRef();

  return (
    <>
    {formData.student.department ?
    <div>
    <div className="md:block hidden">
      <div className="bg-white p-4" ref={componentRef}>
        <img
          className="bg-white mx-auto h-28 mt-28"
          src="https://vectorseek.com/wp-content/uploads/2023/09/Metropolitan-University-Logo-Vector.svg-.png"
          alt=""
        />
        <div className="mt-14 ">
          {/* <h1 className="text-center text-5xl font-bold">
            Metropolitan University
          </h1> */}
          <h1 className="text-center text-xl font-semibold mt-12">
            Department Of
            <br />
            <p className="mt-2 text-3xl font-bold">
              {" "}
            {formData.student.department}
            </p>
          </h1>
          <h1 className="text-center text-xl font-semibold mt-8">
            Course Name
          </h1>
          <h1 className="text-center text-3xl font-bold mt-1">
          {formData.assignment.courseName} 
        <span className="ml-0.5">   ({formData.assignment.courseCode})</span>
          </h1>
          <h1 className="text-center text-7xl font-bold mt-12">
          {formData.assignment.assignmentNo}
          
            <br />
          </h1>
          <h1 className="text-center text-xl font-semibold mt-2">
            Assignment Title
            <br />
          </h1>
          <p className="uppercase text-4xl mt-2 text-center font-bold">
          {formData.assignment.title}
          </p>
          <br />
          <div className="grid grid-cols-2 p-5 rounded mx-20 mt-6 gap-4   border-2 border-primary ">
            <div className="">
              <p>
                <span className="font-bold text-lg">Submitted By</span>
                <br />
                Name: {formData.student.name}
                <br />
                ID No: {formData.student.id}
                <br />
                Batch:  {formData.student.batch} <br />
                Section:  <span className="uppercase">{formData.student.section}</span>
                <br />
                Department: {formData.student.department}
                <br />
                Metropolitan University
                <br />
              </p>
            </div>

            {/* <div className="divider divider-horizontal"></div> */}
            <div className="border-l-2 pl-5 border-primary">
              <p className="tex-left">
                <span className="font-bold text-lg"> Submitted To</span> <br />
                {formData.teacher.name} <br />
                {formData.teacher.designation}<br />
                Dept. of  {formData.teacher.department} <br />
                Metropolitan University <br />
              </p>
            </div>
          </div>

          <div>
            <p className="mt-8 ml-20">
              {" "}
              <span className="text-bold">Date Of Submission:</span>{" "}
               {formData.additional.submissionDate}
            </p>
          </div>
        </div>
      </div>
    </div>
       {/* Conditionally render the download button */}
      
          <div className="text-center mx-auto flex justify-center items-center   mt-5">
            <ReactToPrint
              trigger={() => (
                <button className="bg-red-600 text-white px-20 flex justify-center items-center py-2 rounded hover:bg-red-700 focus:outline-none focus:ring focus:bg-red-600">
                <FaDownload className="mr-2" />
                Download Now
              </button>
              
              )}
              content={() => componentRef.current}
            />
          </div>
    </div>
        :<div className=""><img className="shadow shadow-white p-1.5 rounded mb-4" src={defaultPage} alt="" /></div>}</>
  );
};

export default CoverPage;
