import React from "react";
import { Button } from "./Button";
import { stringify } from "postcss";
import { useState } from "react";


const Panel = props => {
  const [formValue, setFormValue] = useState({
    1: null,
    2: null,
    3: null,
  });

  const handleChange = (action) => {
    const target = action.target;
    const value = target.value;
    const name = target.name;
    setFormValue({ ...formValue, [name]: value });
  }

  const submit = e => {
    e.preventDefault();
    if (props.close) {
      props.close(e);
      console.log("ccc");
    }
  };

  return (
    <>
      <div className="relative w-full mx-0 max-w-2xl">
        <form>
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      できごとをかいてね
                  </h3>
              </div>
              <div className="p-6 space-y-6">
                <textarea type="text" name={props.viewValue} id={props.viewValue} value={formValue} onChange={handleChange} placeholder="やったこと..." maxlength="150" className=" text-slate-400 text-xl p-2.5 dark:bg-gray-700 border rounded-sm w-full dark:border-gray-500 leading-5 h-56">
                </textarea>
              </div>
              <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button onClick={props.close} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    キャンセル
                  </button> 
                  <button onClick={() => this.submit(formValue)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    決定
                  </button>
              </div>
          </div>
        </form>
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