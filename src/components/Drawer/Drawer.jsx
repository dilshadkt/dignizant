import React from "react";

const Drawer = ({ children, width, id }) => {
  return (
    <div className="drawer drawer-end z-50">
      <input id={`${id}`} type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor={`${id}`}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div
          style={{
            width,
          }}
          className={`menu p-4 w-80 min-h-full bg-base-200 text-base-content`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
