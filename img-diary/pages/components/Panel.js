import React from "react";
import { Button } from "./Button";

const Panel = props => {
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
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Terms of Service
                      </h3>
                  </div>
                  <div className="p-6 space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                      </p>
                  </div>
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button onClick={submit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                      <button onClick={props.close} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
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