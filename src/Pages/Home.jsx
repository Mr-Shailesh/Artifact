import React, { useState, useEffect } from "react";
import ImgCard from "../Components/ImgCard";
import { useUserAuth } from "../Context/UserAuthContext";
import "./Home.css";
import { storage } from "../Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Home = () => {
  const { user } = useUserAuth();

  const [image, setImage] = useState("");
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");

  const fileSelectedHandler = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const imageUpload = (e) => {
    e.preventDefault();
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
      alert("image Uploaded");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Pictures Collection</h1>
        <h5 className="text-center"> Welcome back {user && user.email}</h5>
        <p className="text-center">
          Upload your pictures collection here by clicking the{" "}
          <b>upload button.</b> Click on images to overview the full image.
        </p>

        <div className="upload"></div>
        <div className="text-center">
          <form onSubmit={imageUpload}>
            <input
              type="file"
              id="uploadImage"
              onChange={fileSelectedHandler}
              required
            />
            <button>Upload</button>
          </form>
        </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <ImgCard imageList={imageList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
