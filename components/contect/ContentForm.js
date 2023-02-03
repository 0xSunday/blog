import React, { useState, useRef } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [requestStatus, setRequestStatus] = useState();

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    // console.log(enteredComment, enteredEmail, enteredName);

    const resposnse = await fetch("/api/Contect", {
      method: "POST",
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        message: enteredComment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = resposnse.json();

    if (!resposnse.ok) {
      throw new Error(data.message || "something went wong !");
    }

    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    commentInputRef.current.value = "";
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="sm:px-20 py-9 bg-gradient-to-tr sm:from-[#2A0944] sm:via-[#3FA796] sm:to-[#2A0944] rounded-3xl"
    >
      <div className="flex flex-col sm:flex-row ">
        <div className="mb-3 pt-0 w-full sm:pr-10 pr-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="sm:px-5 px-3 py-3 my-3 placeholder-dimWhite rounded-3xl border-2  border-yellow-300   sm:text-[20px] text[15px] text-white relative bg-black   shadow outline-none focus:outline-none focus:no-underline w-full"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="mb-3 pt-0 w-full">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="sm:px-5 px-3 py-3 my-3 placeholder-dimWhite rounded-3xl border-2  border-yellow-300   sm:text-[20px] text[15px] text-white relative bg-black   shadow outline-none focus:outline-none focus:no-underline w-full"
            required
            ref={nameInputRef}
          />
        </div>
      </div>

      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="sm:px-5 px-3 py-3 my-3 placeholder-dimWhite rounded-3xl border-2  border-yellow-300   sm:text-[20px] text[15px]  text-white relative bg-black   shadow outline-none focus:outline-none focus:no-underline w-full"
          required
          ref={commentInputRef}
        />
      </div>
      <div className=" w-full flex justify-end mb-3 pt-0">
        <button
          className="bg-yellow-300 text-black active:bg-yellow-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-yellow-600 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

// import React, { useState } from "react";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formError, setFormError] = useState("");

//   const handleInputChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) {
//       setFormError("All fields are required.");
//       return;
//     }
//     // Add code to send the form data to your API here
//     setFormSubmitted(true);
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       {formSubmitted ? (
//         <div className="text-green-500">
//           Thank you for your message! We'll get back to you soon.
//         </div>
//       ) : (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white p-6 rounded-lg shadow-md"
//         >
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-medium mb-2"
//               htmlFor="name"
//             >
//               Name:
//             </label>
//             <input
//               className="w-full border border-gray-400 p-2"
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-medium mb-2"
//               htmlFor="email"
//             >
//               Email:
//             </label>
//             <input
//               className="w-full border border-gray-400 p-2"
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-medium mb-2"
//               htmlFor="message"
//             >
//               Message:
//             </label>
//             <textarea
//               className="w-full border border-gray-400 p-2"
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//             />
//           </div>
//           {formError && <div className="text-red-500">{formError}</div>}
//         </form>
//       )}
//     </div>
//   );
// };
// export default ContactPage;
