import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./admin.css"

export const AdminContact = () => {
  return (
    <div className="admin-contact">
      <div className="container">
        <div className="admin-contac-inner">
          <h2 className="admin-contact-title">Murojatlar</h2>
          <TableContainer component={Paper} className="admin-contact-table">
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            
            >
              <TableHead>
                <TableRow >
                  <TableCell className="admin-contact-header">Ism</TableCell>
                  <TableCell className="admin-contact-header" align="right">Email</TableCell>
                  <TableCell className="admin-contact-header" align="right">Mavzu</TableCell>
                  <TableCell className="admin-contact-header" align="right">Xabar</TableCell>              
                  <TableCell className="admin-contact-header" align="right">O'chirish</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:first-child td, &:first-child th": { border: 0 } }}
                >
                  <TableCell className="admin-contact-body" component="th" scope="row">
                   name
                  </TableCell>
                  <TableCell className="admin-contact-body" align="right">calor</TableCell>
                  <TableCell className="admin-contact-body" align="right">fat</TableCell>
                  <TableCell className="admin-contact-body" align="right">cabs</TableCell>
                  <TableCell className="admin-contact-body" align="right"><RiDeleteBin6Fill className="admin-contact-delete"/></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
