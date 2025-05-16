import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  IconButton,
  Paper,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

// Example payslip data
const payslips = [
  {
    id: "PS-2025-04",
    period: "April 2025",
    date: "April 30, 2025",
    amount: "$4,250.00",
  },
  {
    id: "PS-2025-03",
    period: "March 2025",
    date: "March 31, 2025",
    amount: "$4,100.00",
  },
  {
    id: "PS-2025-02",
    period: "February 2025",
    date: "February 28, 2025",
    amount: "$4,000.00",
  },
  {
    id: "PS-2025-01",
    period: "January 2025",
    date: "January 31, 2025",
    amount: "$3,950.00",
  },
  {
    id: "PS-2024-12",
    period: "December 2024",
    date: "December 31, 2024",
    amount: "$4,150.00",
  },
];

const CompensationTab: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 3,
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <Box mb={2}>
        <Typography variant="h6" fontWeight={600}>
          Payslips
        </Typography>
        <Typography variant="body2" color="text.secondary">
          View and download your payslips.
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ border: "1px solid #ddd", borderRadius: 2 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant="body1"
                  fontWeight={300}
                  color="textSecondary"
                >
                  ID
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="body1"
                  fontWeight={300}
                  color="textSecondary"
                >
                  Period
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="body1"
                  fontWeight={300}
                  color="textSecondary"
                >
                  Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="body1"
                  fontWeight={300}
                  color="textSecondary"
                >
                  Amount
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  variant="body1"
                  fontWeight={300}
                  color="textSecondary"
                >
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payslips.map((slip) => (
              <TableRow key={slip.id}>
                <TableCell sx={{ fontWeight: 600 }}>{slip.id}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{slip.period}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{slip.date}</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>{slip.amount}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="view">
                    <VisibilityOutlinedIcon
                      fontSize="small"
                      sx={{ color: "black" }}
                    />
                  </IconButton>
                  <IconButton aria-label="download">
                    <FileDownloadOutlinedIcon
                      fontSize="small"
                      sx={{ color: "black" }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CompensationTab;
