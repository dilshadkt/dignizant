import React, { useState } from "react";
import Button from "../../../components/button/Button";
import Modal from "../../../components/modal/Modal";

const AddProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="h-full ">
      <nav className="flex h-[70px] shadow-xl w-full items-center justify-end px-4">
        <div onClick={() => setIsModalOpen(true)}>
          <Button width={100} value={"Add"} />
        </div>
      </nav>
      {isModalOpen && <Modal modalOpne={setIsModalOpen} />}
    </div>
  );
};

export default AddProduct;
