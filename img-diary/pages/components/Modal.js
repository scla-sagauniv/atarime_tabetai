import React, { useState } from "react";

const Modal = props => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseDown = e => {
    if (e.target === e.currentTarget) {
      setIsMouseDown(true);
    }
  };

  const onMouseUp = e => {
    if (isMouseDown) {
      props.close(e);
    }
    setIsMouseDown(false);
  };

  return (
      <div
        className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {/* Panelコンポーネントにプロップス渡す */}
          {React.cloneElement(props.children, {
            close: props.close,
            saveValue: props.saveValue,
            viewValue: props.viewValue
          })}
      </div>
  );
};

export default Modal;