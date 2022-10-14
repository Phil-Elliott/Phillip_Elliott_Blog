import { useState } from "react";
import styles from "../styles/SubscribeModal.module.scss";

const SubscribeModal = ({ changeModalDisplay }) => {
  return (
    <div
      className={styles["subscribe-modal-container"]}
      id="subscribeModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="subscribeModalLabel"
      aria-hidden="true"
      //   onClick={() => changeModalDisplay()}
    >
      <div className={styles["modal-dialog"]} role="document">
        <div className={styles["modal-content"]}>
          <div className={styles["modal-header"]}>
            <h5 className={styles["modal-title"]} id="subscribeModalLabel">
              Subscribe to our newsletter
            </h5>
            <button
              type="button"
              className={styles["modal-close-button"]}
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => changeModalDisplay()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className={styles["modal-body"]}>
            <form>
              <div className={styles["modal-form-group"]}>
                <label htmlFor="subscribeEmail">Email address</label>
                <input
                  type="email"
                  className={styles["modal-form-control"]}
                  id="subscribeEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className={styles["modal-form-text"]}>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className={styles["modal-form-check"]}>
                <input
                  type="checkbox"
                  className={styles["modal-form-check-input"]}
                  id="subscribeCheck"
                />
                <label
                  className={styles["modal-form-check-label"]}
                  htmlFor="subscribeCheck"
                >
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className={styles["modal-form-submit-button"]}
                onClick={() => changeModalDisplay()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;

// import React, { useState, useEffect } from "react"
// // import "./ModalAddProject.scss"

// const ModalAddProject = ({
//   displayAddProjectModal,
//   displayProjectModal,
//   addProject,
// }: {
//   displayAddProjectModal: boolean
//   displayProjectModal: any
//   addProject: any
// }) => {
//   const [inputData, setInputData] = useState<projectData>({
//     name: "",
//     initials: "",
//     color: "green",
//     description: "",
//     launch: "",
//     tasks: [],
//     completed: [],
//   })

//   const addTheProject = () => {
//     if (
//       inputData.name &&
//       inputData.initials &&
//       inputData.color &&
//       inputData.description &&
//       inputData.launch
//     ) {
//       addProject(inputData)
//     } else {
//       alert("Please fill out all fields")
//     }
//   }

//   const change = (e: any, init?: boolean) => {
//     if (init) {
//       console.log(e.length)
//       if (e.initials.length < 3) {
//         setInputData(e)
//       }
//     } else {
//       setInputData(e)
//     }
//   }

//   useEffect(() => {
//     setInputData({
//       name: "",
//       initials: "",
//       color: "#5ec99c",
//       description: "",
//       launch: "",
//       tasks: [],
//       completed: [],
//     })
//   }, [displayAddProjectModal])

//   // Allows ESC key to only be used to close
//   const closeOnEscapeKeyDown = (e: any) => {
//     if ((e.charCode || e.keyCode) === 27) {
//       displayProjectModal()
//     }
//   }

//   // Allows for enter key to save details
//   const saveOnEnterKeyDown = (e: any) => {
//     if (e.code === "Enter" || e.code === "NumpadEnter") {
//       addTheProject()
//     }
//   }

//   // Allows access to use keys only when modal is displayed
//   useEffect(() => {
//     if (displayAddProjectModal === true) {
//       document.body.addEventListener("keydown", closeOnEscapeKeyDown)
//       document.body.addEventListener("keydown", saveOnEnterKeyDown)
//     }
//   }, [displayAddProjectModal])

//   return (
//     <div
//       className={`modal ${displayAddProjectModal ? "show" : ""}`}
//       onClick={displayProjectModal}
//     >
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-header">
//           <h1 className="modal-title">Create Project</h1>
//         </div>
//         <div className="modalAdd-body">
//           <div className="modal-add-projectName">
//             <div
//               className="nav-logo-addProject"
//               style={{ backgroundColor: inputData.color }}
//             >
//               <p>{inputData.initials}</p>
//             </div>
//             <input
//               type="text"
//               name="project-name"
//               placeholder="Project Name"
//               value={inputData.name}
//               onChange={(e) => change({ ...inputData, name: e.target.value })}
//               className="project-name-input"
//             />
//           </div>
//           <div className="modal-add-logo-details">
//             <div className="logo-initials">
//               <p>Initials</p>
//               <input
//                 type="text"
//                 name="project-logo initials"
//                 placeholder="Logo Initials"
//                 value={inputData.initials}
//                 onChange={(e) =>
//                   change({ ...inputData, initials: e.target.value }, true)
//                 }
//               />
//             </div>
//             <div className="logo-color">
//               <p>Color</p>
//               <select
//                 defaultValue="#5ec99c"
//                 name="logo color"
//                 onChange={(e) =>
//                   change({ ...inputData, color: e.target.value })
//                 }
//               >
//                 <option value="#5ec99c">Green</option>
//                 <option value="#38b2e0">Light Blue</option>
//                 <option value="#283170">Dark Blue</option>
//                 <option value="purple">Purple</option>
//                 <option value="rgb(248, 68, 68)">Red</option>
//               </select>
//             </div>
//           </div>
//           <p>Description</p>
//           <textarea
//             value={inputData.description}
//             onChange={(e) =>
//               change({ ...inputData, description: e.target.value })
//             }
//           />
//           <p>Launch date</p>
//           <input
//             type="date"
//             name="launch date"
//             placeholder="Description"
//             value={inputData.launch}
//             onChange={(e) => change({ ...inputData, launch: e.target.value })}
//           />
//         </div>
//         <div className="modal-footer">
//           <button
//             className="modal-close-btn"
//             onClick={() => displayProjectModal()}
//           >
//             Close
//           </button>
//           <button
//             className="modal-create-btn"
//             type="submit"
//             onClick={() => addTheProject()}
//           >
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ModalAddProject
