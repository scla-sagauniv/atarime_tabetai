import React from "react";
import { Button } from "./Button";
import { stringify } from "postcss";
import { useState } from "react";


const Panel = props => {
  const [formValue, setFormValue] = useState({
    morning: null,
    noon: null,
    evening: null,
  });

  const handleChange = e => {
    console.log(props.viewValue);
    console.log(e.target.value);
    console.log(e.target.name);
    const value = e.target.value;
    const name = e.target.name;
    setFormValue({ ...formValue, [name]: value});
    props.saveValue(name,formValue[name]); 
  }

  const submit = e => {
    console.log("morning as"+formValue.morning);
    // e.preventDefault();
    if (props.close) {
      props.close(e);
    }
  };

  return (
    <>
      <div className="relative w-full mx-0 max-w-2xl">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    できごとをかいてね
                </h3>
            </div>
            <div className="p-6 space-y-6">
              <textarea type="text" value={formValue[props.viewValue]} name={props.viewValue} id={props.viewValue} onChange={handleChange} placeholder="やったこと..." maxlength="150" className=" text-slate-400 text-xl p-2.5 dark:bg-gray-700 border rounded-sm w-full dark:border-gray-500 leading-5 h-56">
              </textarea>
            </div>
            <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={props.close} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  キャンセル
                </button> 
                <button onClick={submit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  決定
                </button>
            </div>
        </div>
      </div>
    </>
    // <section classNameName="container">
    //   <header>
    //     <h3>Modal Panel!</h3>
    //   </header>
    //   <div>Hi! Nice to meet you!</div>
    //   <footer>
    //     <button type="button" onClick={props.close}>
    //       Cancel
    //     </button>
    //     <button type="submit" onClick={submit}>
    //       OK
    //     </button>
    //   </footer>
    // </section>
  );
};

export default Panel;