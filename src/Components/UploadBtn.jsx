import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { storage } from "../Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Input = styled("input")({
  display: "none",
});

export default function UploadButtons() {
  const [image, setImage] = useState(null);

  const fileSelectedHandler = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const imageUpload = async () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then(() => {
      alert("Image Uploaded");
    });
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" onClick={imageUpload}>
          Upload
        </Button>
        <Input
          required
          type="file"
          accept="image/jpg/png/jpeg"
          id="contained-button-file"
          onChange={fileSelectedHandler}
        />
      </label>
      <label htmlFor="icon-button-file">
        <Input
          accept="image/jpg/png/jpeg"
          id="icon-button-file"
          type="file"
          onChange={fileSelectedHandler}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={imageUpload}
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
  );
}
