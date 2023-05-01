import React from "react";
import { useForm } from 'react-hook-form';


const Panel = props => {
  const { register, handleSubmit } = useForm();
  
  // 送信を押したときの処理
  const onSubmit = (data) => {
    console.log(data[props.viewValue]);
    props.saveValue(props.viewValue,data[props.viewValue]);
    if (props.close) {
      props.close(false, props.viewValue);
    }
  };

  return (
    <>
      <div className="relative w-full mx-0 max-w-2xl">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    できごとをかいてね
                </h3>
            </div>
            <div className="p-6 space-y-6">
              <textarea type="text" name={props.viewValue} id={props.viewValue} {...register(props.viewValue)} placeholder="やったこと..." maxlength="150" className=" text-slate-400 text-xl p-2.5 dark:bg-gray-700 border rounded-sm w-full dark:border-gray-500 leading-5 h-56">
                {props.takeValue}
              </textarea>
            </div>
            <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button onClick={props.close} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  キャンセル
                </button> 
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  決定
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Panel;