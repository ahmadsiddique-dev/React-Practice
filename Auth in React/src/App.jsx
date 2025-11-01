import { useState } from "react";
import Input from "./components/Input";
import Label from "./components/Label";
import countries from './data/countries'

function App() {
  const [count, setCount] = useState(0);

  const initialData = {
    firstname : "",
    lastname : "",
    email : "",
    contact : "",
    gender : "",
    favSubject : "",
    file : "",
    url : "",
    choice : "",
    about :"",
  }


  const [data, setData] = useState(initialData)
  const [file, setFile] = useState()
  const fields = [
    {
      label: "First Name*",
      placeholder: "Enter First Name",
      type: "text",
      id: "firstname",
    },
    {
      label: "Last Name*",
      placeholder: "Enter Last Name",
      type: "text",
      id: "lastname",
    },
    {
      label: "Enter Email*",
      placeholder: "Enter email",
      type: "email",
      id: "email",
    },
    {
      label: "Contact*",
      placeholder: "Enter Mobile number",
      type: "text",
      id: "contact",
    },
  ];

  const genderFields = [
    {
      id: "male",
      lablel: "Male",
      value: "male",
    },
    {
      id: "female",
      lablel: "Female",
      value: "female",
    },
    {
      id: "other",
      lablel: "Other",
      value: "other",
    },
  ];

  const subjectField = [
    {
      id: "english",
      lablel: "English",
      value: "english",
    },
    {
      id: "maths",
      lablel: "Maths",
      value: "maths",
    },
    {
      id: "physics",
      lablel: "Physics",
      value: "physics",
    }
  ]

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile)
  }
  const handleSubmit = (e) => {
  e.preventDefault();

  const formData = {}; 

  for (let i = 0; i < 4; i++) {
    const value = e.target[i].value.trim();
    const id = e.target[i].id;

    formData[id] = value;
    
  }

  const form = new FormData(e.target);
  const entries = Object.fromEntries(form.entries());
  console.log(entries);
  setData({...entries, ...formData});
  

  console.log(data)
  
};

  return (
    <>
      <div className="min-w-screen flex text-white justify-center items-center min-h-screen bg-gray-800">
        <center>
          <div className="bg-black p-5 rounded-md">
            <h1 className="text-white text-xl">Form by Ahmad</h1>
            <form onSubmit={handleSubmit}>
              <div className=" text-white mt-8.5 flex-col gap-1.5">
                {fields.map((item) => {
                  return (
                    <div
                      key={item.label}
                      className="flex flex-col mt-2 items-start gap-1.5"
                    >
                      <Label id={item.id} name={item.label} />
                      <Input
                      required
                        placeholder={item.placeholder}
                        id={item.id}
                        type={item.type}
                      />
                    </div>
                  );
                })}
              </div>

              <div>
                <div className="flex mt-4.5 gap-4">
                  <h3>Gender*</h3>
                  {genderFields.map((item) => (
                    <div key={item.id} className="flex items-center gap-1">
                      <input
                        type="radio"
                        id={item.id}
                        value={item.value}
                        name="gender"
                      />
                      <Label id={item.id} name={item.lablel} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start mt-4.5 gap-4">
                <h3>Your best Subject</h3>
                <div className="flex gap-10">
                {subjectField.map((item) => (
                    <div key={item.id} className="flex items-center gap-1">
                      <input
                        type="radio"
                        id={item.id}
                        value={item.value}
                        name="subject"
                      />
                      <Label id={item.id} name={item.lablel} />
                    </div>
                  ))}
                  </div>
              </div>

              <div className="flex items-center w-full border-2 rounded-sm mt-3">
                <label htmlFor="file_input" className="cursor-pointer m-2 bg-gray-200 text-black px-1 rounded-sm ">Browse</label>
                <input type="file" className="sr-only" id="file_input" onChange={handleFile}/>
                {file && <p className="max-w-[190px] overflow-clip max-h-5.5">{file.name}</p>}
              </div>

              <div className="mt-3 flex flex-col items-start gap-1.5
              ">
                <Label id={"url"} name={"Enter URL*"} />
                <Input id={"url"} type={"text"} placeholder={"Enter url"}/>
              </div>

              <div className="flex flex-col gap-2 items-start mt-3">
                <Label id={"choice"} name={"Select your choice"} />
                <div className="border-2 p-0.5">
                  <select name="myOption" id="my-selection">
                    {countries.map((item) => (
                      <option key={item.value} value={item.value} className="bg-black">{item.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-1.5 flex-col items-start mt-3">
                <Label name={"About"} id={"about"} />
                <textarea className="border-2" name="about" required id="about" cols={35} rows={5}></textarea>
              </div>

              <div className="flex gap-1.5 flex-col items-start mt-3" >
                <div >
                  Submit OR Reset
                </div>
                    <div className="flex m-1.5 gap-10  justify-around items-center">
                <button className="bg-green-500 active:bg-green-600 hover:bg-green-400 text-white px-6 py-2 rounded-sm">
                  Reset
                </button>

                <button className="bg-green-500 active:bg-green-600 hover:bg-green-400 text-white px-6 py-2 rounded-sm">
                    Submit 
                </button>

                {/* <input className="bg-green-500 active:bg-green-600 hover:bg-green-400 text-white px-6 py-2 rounded-sm" type="submit" /> */}
                </div>
              </div>
            </form>
          </div>
        </center>
      </div>
    </>
  );
}

export default App;
