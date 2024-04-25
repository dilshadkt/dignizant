import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
const ImageViewer = ({ previewImage, setPreviewImage, setImage }) => {
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      if (event.target.files[0]) {
        setImage && setImage(event.target.files[0]);
      }
    }
  };
  return (
    <div className="w-[260px] relative -z-0  border rounded-md  border-gray-300 my-3 h-[300px] flex items-center justify-center">
      {previewImage ? (
        <label className="w-full h-full rounded-md overflow-hidden">
          <img
            src={previewImage}
            alt="preview"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />

          <div
            // onClick={editPreview}
            className="absolute hover:bg-gray-400 z-40 -top-3  -right-3 w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-gray-400 cursor-pointer hover:scale-105 transition-all duration-300 bg-white shadow-2xl"
          >
            <EditIcon />
          </div>
        </label>
      ) : (
        <>
          <label>
            <input type="file" className="hidden" onChange={onImageChange} />

            <AddIcon />
          </label>
        </>
      )}
    </div>
  );
};

export default ImageViewer;
