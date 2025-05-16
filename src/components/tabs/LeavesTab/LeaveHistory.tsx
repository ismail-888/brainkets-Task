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
    ID: "L-2025-042",
    Type: "Annual Leave",
    From: "2025-03-15",
    To: "2025-03-19",
    Days: "5",
    Status: "Approved",
  },
  {
    ID: "L-2025-036",
    Type: "Sick Leave",
    From: "2025-02-07",
    To: "2025-03-19",
    Days: "2",
    Status: "Approved",
  },
  {
    ID: "L-2025-028",
    Type: "Annual Leave",
    From: "2025-01-22",
    To: "2025-03-19",
    Days: "1",
    Status: "Approved",
  },
  {
    ID: "L-2025-112",
    Type: "Annual Leave",
    From: "2025-03-15",
    To: "2025-12-29",
    Days: "3",
    Status: "Approved",
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "approved":
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

const LeaveHistory: React.FC = () => {
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
                ID
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                variant="body1"
                fontWeight={300}
                color="textSecondary"
              >
                Type
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                variant="body1"
                fontWeight={300}
                color="textSecondary"
              >
                From
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                variant="body1"
                fontWeight={300}
                color="textSecondary"
              >
                To
              </Typography>
            </TableCell>

            <TableCell>
              <Typography
                variant="body1"
                fontWeight={300}
                color="textSecondary"
              >
                Days
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.ID}</TableCell>
              <TableCell>{row.Type}</TableCell>
              <TableCell>{row.From}</TableCell>
              <TableCell>{row.To}</TableCell>
              <TableCell>{row.Days}</TableCell>
              <TableCell>
                <StatusBadge status={row.Status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaveHistory;
