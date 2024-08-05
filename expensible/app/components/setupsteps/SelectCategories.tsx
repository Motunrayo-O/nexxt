import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import {
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useCategories from "@/app/hooks/useCategories";

const SelectCategories = () => {
  const { data: categories, error, isLoading } = useCategories();

  if (isLoading) return <CircularProgress />;

  if (error) return <p>{error.message}</p>;

  return (
    <Card className="min-h-[300px]" sx={{ padding: "16px" }}>
      <span className="text-center">Select Categories</span>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">Remove?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <Button>
                    <DeleteOutlineIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default SelectCategories;
