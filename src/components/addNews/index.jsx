import "./adminNews.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MdCloudUpload } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const AdminNews = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div className="admin-news">
      <div className="container">
        <div className="admin-news-inner">
          <h2 className="admin-news-title">Yangilik qo'shish</h2>
          <div className="admin-new-box">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
            >
              <div className="admin-news-wrapper">
                <TextField
                  id="outlined-required"
                  label="Mavzu"
                  autoComplete="current-lined"
                  variant="standard"
                  className="admin-news-input"
                />
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<MdCloudUpload />}
                  className="admin-news-input-btn"
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </div>
              <textarea
                name="text"
                cols="30"
                rows="10"
                placeholder="matn..."
              ></textarea>
              <button className="admin-news-add-btn">qo'shish</button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
