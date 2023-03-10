import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// const columns = [
//   { id: "srno", label: "Sr. No." },
//   {
//     id: "purchaseOrder",
//     label: "Purchase Order No.",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "demand",
//     label: "Demand No.",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "materialId",
//     label: "Material Id",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "materialName",
//     label: "Material Name",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "materialQty",
//     label: "Material Qty",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "VendorId",
//     label: "Vendor Id",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "VendorName",
//     label: "Vendor Name",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "RatePerUnit",
//     label: "Rate Per Unit",
//     minWidth: 100,
//     align: "center",
//     format: (value) => '$' + value.toFixed(2),
//   },
//   {
//     id: "RateOfTotalQty",
//     label: "Rate Of Total Qty",
//     minWidth: 100,
//     align: "center",
//     format: (value) => '₹' + value.toFixed(2),
//   },
//   {
//     id: "GST",
//     label: "GST (5% Total Price)",
//     minWidth: 100,
//     align: "center",
//     format: (value) => '₹' + value.toFixed(2),
//   },
//   {
//     id: "TotalPrice",
//     label: "Total Price",
//     minWidth: 100,
//     align: "center",
//     format: (value) => '₹' + value.toFixed(2),
//   },
//   {
//     id: "ExpectedDeliveryDate",
//     label: "Expected Delivery Date",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "Status",
//     label: "Status",
//     minWidth: 100,
//     align: "center",
//   },
//   {
//     id: "RiskReason",
//     label: "Risk Reason",
//     minWidth: 140,
//     align: "center",
//   },
// ];

export default function CustomTable({ tableData }) {
  const { columns, rows } = tableData;

  // let crtData = "";

  // const tableArrLen = columns.length - 1;

  // columns.map((v, i) => {
  //   crtData += `step_${i}${i === tableArrLen ? "" : ","}`;
  // });

  // console.log(crtData);

  // const createData = (...crtData) => {
  //   console.log(crtData);
  //   return {
  //     crtData,
  //   };
  // };

  
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(4);
  // const [page] = React.useState(0);
  // const [rowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <Paper sx={{ maxWidth: "100%", overflow: "hidden", p: 1 }}>
      <TableContainer sx={{ height: "30vh" }}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell
                  key={column.label+i}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    padding: "0 5px",
                    fontSize: ".8rem",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column, i) => {
                    const value = row[i];
                    return (
                      <TableCell
                        key={column.label+i}
                        align={column.align}
                        style={{ fontSize: ".8rem" }}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
