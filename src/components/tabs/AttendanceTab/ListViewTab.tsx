import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const rows = [
  {
    date: "2025-05-01",
    checkIn: "09:02 AM",
    checkOut: "05:15 PM",
    status: "Present",
    hours: "8.22",
  },
  {
    date: "2025-05-03",
    checkIn: "--",
    checkOut: "--",
    status: "Weekend",
    hours: "--",
  },
  {
    date: "2025-05-04",
    checkIn: "--",
    checkOut: "--",
    status: "Sick Leave",
    hours: "--",
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "present":
      return "#d1fae5"; // green-100
    case "weekend":
      return "#e5e7eb"; // gray-200
    case "sick leave":
    case "absent":
      return "#fee2e2"; // red-100
    default:
      return "#f3f4f6";
  }
};

const StatusBadge = ({ status }: { status: string }) => (
  <Box
    sx={{
      backgroundColor: getStatusColor(status),
      px: 1.5,
      py: 0.5,
      borderRadius: 5,
      display: "inline-block",
      fontWeight: 600,
      fontSize: "0.875rem",
      textTransform: "capitalize",
    }}
  >
    {status}
  </Box>
);

const ListViewTab: React.FC = () => {
  return (
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
                Date
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="body1"
                fontWeight={300}
                color="textSecondary"
              >
                Check In
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="body1"
                fontWeight={300}
                color="textSecondary"
              >
                Check Out
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="body1"
                fontWeight={300}
                color="textSecondary"
              >
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                variant="body1"
                fontWeight={300}
                color="textSecondary"
              >
                Hours
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.checkIn}</TableCell>
              <TableCell>{row.checkOut}</TableCell>
              <TableCell>
                <StatusBadge status={row.status} />
              </TableCell>
              <TableCell>{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListViewTab;
