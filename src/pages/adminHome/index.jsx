import "./adminHome.css";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { MdCloudUpload } from "react-icons/md";
import { AdminNews } from "../../components/addNews";

export const AdminHome = () => {
  const [img, setImg] = useState(null);
  const [slideList, setSlideList] = useState([]);

  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };

  const formData = new FormData();
  formData.append("file", img);
  formData.append("upload_preset", "blog-preset");

  const handleData = async (e) => {
    e.preventDefault();

    fetch("https://api.cloudinary.com/v1_1/dxealoh68/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        {
          fetch(import.meta.env.VITE_APP_BASE_URL + "/create_slide", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              img: data.url,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.message === "created slide") {
                location.reload();
              }
              alert(data?.message);
            })
            .catch((error) => console.log(error));
        }
      });
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_BASE_URL + `/slide`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSlideList(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (e) => {
    fetch(import.meta.env.VITE_APP_BASE_URL + "/delete_slide/" + e, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.msg === "deleted slide!"){
          location.reload()
        }
        alert(data.msg)
      })
      .catch((error) => console.log(error));
  };

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
    <div className="admin-home">
      <div className="container">
        <div className="admin-home-inner">
          <h2 className="admin-home-title">Slider qo'shish</h2>
          <div className="admin-home-box">
            <Button
              component="label"
              variant="contained"
              className="admin-home-add"
              startIcon={<MdCloudUpload />}
              onChange={(e) => handleImg(e)}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <button className="admin-home-add-btn" onClick={handleData}>
              qo'shish
            </button>
          </div>
        </div>
        <TableContainer component={Paper} className="admin-home-table">
          <h2 className="admin-home-title-bottom">Slidelarni boshqarish</h2>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="admin-home-header" align="right">
                  Rasm
                </TableCell>
                <TableCell className="admin-home-header" align="right">
                  O'chirish
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slideList.length &&
                slideList.map((item) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={item.id}
                  >
                    <TableCell className="admin-home-body" align="right">
                      <img
                        src={item.img}
                        alt=""
                        className="slide-img"
                        width={60}
                        height={60}
                      />
                    </TableCell>
                    <TableCell className="admin-home-body" align="right">
                      <RiDeleteBin6Fill
                        className="admin-home-delete"
                        onClick={() => handleDelete(item.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AdminNews />
        <TableContainer component={Paper} className="admin-home-table">
          <h2 className="admin-home-title-bottom">Yangiliklarni boshqarish</h2>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="admin-home-header">Id</TableCell>
                <TableCell className="admin-home-header" align="right">
                  Rasm
                </TableCell>
                <TableCell className="admin-home-header" align="right">
                  Sarlavha
                </TableCell>
                <TableCell className="admin-home-header" align="right">
                  Matn
                </TableCell>
                <TableCell className="admin-home-header" align="right">
                  O'chirish
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className="admin-home-body"
                  component="th"
                  scope="row"
                >
                  name
                </TableCell>
                <TableCell className="admin-home-body" align="right">
                  cabs
                </TableCell>
                <TableCell className="admin-home-body" align="right">
                  cabs
                </TableCell>
                <TableCell className="admin-home-body" align="right">
                  cabs
                </TableCell>
                <TableCell className="admin-home-body" align="right">
                  <RiDeleteBin6Fill className="admin-home-delete" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
