import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./adminImg.css";

export const AdminImg = () => {
  return (
    <div className="admin-img">
      <div className="container">
        <div className="admin-img-inner">
          <h2 className="admin-img-title">Rasm qo'shish</h2>
          <div className="admin-img-box">
          <input type="file" className="admin-img-upload" />
          <button className="admin-img-add-btn">
            qo'shish
          </button>
          </div>
        </div>
        <h2 className="admin-img-title-bottom">Rasmlarni boshqarish</h2>
        <TableContainer component={Paper} className="admin-img-table">
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className="admin-img-header">Id</TableCell>
                <TableCell className="admin-img-header" align="right">
                  Rasm
                </TableCell>
                <TableCell className="admin-img-header" align="right">
                  O'chirish
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
              >
                <TableCell
                  className="admin-img-body"
                  component="th"
                  scope="row"
                >
                  name
                </TableCell>
                <TableCell className="admin-img-body" align="right">
                  cabs
                </TableCell>
                <TableCell className="admin-img-body" align="right">
                  <RiDeleteBin6Fill className="admin-img-delete" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
