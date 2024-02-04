import "./adminHome.css";
import React from "react";
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
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <button className="admin-home-add-btn">qo'shish</button>
          </div>
        </div>
        <AdminNews/>
        <h2 className="admin-home-title-bottom">Yangiliklarni boshqarish</h2>
        <TableContainer component={Paper} className="admin-home-table">
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
