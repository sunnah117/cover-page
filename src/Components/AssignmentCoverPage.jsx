import { useEffect } from "react";
import { useForm } from "react-hook-form";
import UseData from "./Hook/UseData";


export default function AssignmentCoverPage() {
  const { formData } = UseData();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Save form data to localStorage
    localStorage.setItem("formData", JSON.stringify(data));
     window.location.reload();
  };

  

  useEffect(() => {
    // Populate input fields with saved data
    for (const key in formData) {
      for (const subKey in formData[key]) {
        setValue(`${key}.${subKey}`, formData[key][subKey]);
      }
    }
  }, [formData, setValue]);

  return (
    <div className="mx-auto w-full  bg-primary ">
    
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full rounded-md bg-primary glass border-b-2   border-red-700"
        >
          <h1 className="text-2xl font-bold animate-pulse uppercase text-white text-center pt-5">assignment cover page</h1>
          {/* Student Info */}
          <div className="   rounded-md p-4 ">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Student Info
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-2">
                <label htmlFor="studentName" className="block text-white">
                  Name:
                </label>
                <input
                  type="text"
                  id="studentName"
                  placeholder="Your Name"
                  {...register("student.name", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["student.name"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="studentID" className="block text-white">
                  ID:
                </label>
                <input
                  type="text"
                  id="studentID"
                  placeholder="Your ID"
                  {...register("student.id", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700 uppercase"
                />
                {errors["student.id"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="studentBatch" className="block text-white">
                  Batch:
                </label>
                <input
                  type="text"
                  id="studentBatch"
                  placeholder="Batch Name"
                  {...register("student.batch", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["student.batch"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="studentSection" className="block text-white">
                  Section (optional):
                </label>
                <input
                  type="text"
                  id="studentSection"
                  placeholder="Your Section"
                  {...register("student.section")}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
               
              </div>
              <div className="mb-2">
  <label htmlFor="studentDepartment" className="block text-white">
    Department Name:
  </label>
  <select
    id="studentDepartment"
    {...register("student.department", { required: true })}
    className="w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring focus:border-red-700"
  >
    <option value="" disabled>
      Select a Department
    </option>
    <option value="Computer Science & Engineering ">
     Computer Science & Engineering
    </option>
    <option value="Economics">Economics</option>
    <option value="Journalism and Media Studies (proposed)">
      Journalism and Media Studies (proposed)
    </option>
    <option value="Software Engineering">
      Software Engineering
    </option>
    <option value="Electrical & Electronic Engineering">
      Electrical & Electronic Engineering
    </option>
    <option value="Law & Justice">
      Law & Justice
    </option>
    <option value="Business Administration">
      Business Administration
    </option>
    <option value="English">English</option>
  </select>
  {errors["student.department"] && (
    <span className="text-red-500">This field is required</span>
  )}
</div>

            </div>
          </div>

          {/* Teacher Details */}
          <div className="border-t  p-4 ">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Teacher Details
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-2">
                <label htmlFor="teacherName" className="block text-white">
                  Name:
                </label>
                <input
                  type="text"
                  id="teacherName"
                  placeholder="Teacher Name"
                  {...register("teacher.name", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["teacher.name"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="teacherDesignation"
                  className="block text-white"
                >
                  Designation:
                </label>
                <input
                  type="text"
                  placeholder="Designation Name"
                  id="teacherDesignation"
                  {...register("teacher.designation", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["teacher.designation"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="teacherDepartment" className="block text-white">
                  Department Name:
                </label>
                <input
                  type="text"
                  id="teacherDepartment"
                  placeholder="Department Name"
                  {...register("teacher.department", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["teacher.department"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
          </div>

          {/* Assignment Title Section */}
          <div className="border-t  p-4 ">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Assignment Section
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-2">
                <label htmlFor="assignmentTitle" className="block text-white">
                  Assignment Title:
                </label>
                <input
                  type="text"
                  id="assignmentTitle"
                  placeholder="Assignment Title"
                  {...register("assignment.title", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["assignment.title"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="courseName" className="block text-white">
                  Course Name:
                </label>
                <input
                  type="text"
                  id="courseName"
                  placeholder="course Name"
                  {...register("assignment.courseName", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["assignment.title"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            
              <div className="mb-2">
                <label htmlFor="courseCode" className="block text-white">
                Course Code:
                </label>
                <input
                  type="text"
                  id="courseCode"
                  placeholder=" Course Code"
                  {...register("assignment.courseCode", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["assignment.courseCode"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="assignmentNo" className="block text-white">
                  Assignment No:
                </label>
                <input
                  type="number"
                  id="assignmentNo"
                  placeholder=" Assignment No"
                  {...register("assignment.assignmentNo", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["assignment.assignmentNo"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t  p-4 ">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Additional Info
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
             
              <div className="mb-2">
                <label htmlFor="submissionDate" className="block text-white">
                  Submission Date:
                </label>
                <input
                  type="date"
                  placeholder="Submission No"
                  id="submissionDate"
                  {...register("additional.submissionDate", { required: true })}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-red-700"
                />
                {errors["additional.submissionDate"] && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
          </div>

         <div className="mx-auto text-center ">
         <button
            type="submit"
            className="bg-red-600 text-white  px-20 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring focus:bg-red-600"
          >
            Submit
          </button>
         </div>
         <br />
        </form>
     
      <div></div>
    </div>
  );
}
