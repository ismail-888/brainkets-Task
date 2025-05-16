import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Chip,
  Grid,
  Paper,
} from "@mui/material";

const leaveData = [
  {
    title: "Annual Leave",
    used: 12,
    total: 24,
  },
  {
    title: "Sick Leave",
    used: 7,
    total: 10,
  },
  {
    title: "Personal Leave ",
    used: 3,
    total: 3,
  },
  {
    title: "Bereavement Leave",
    used: 5,
    total: 5,
  },
];

const LeaveCard = ({ title, used, total }: { title: string; used: number; total: number }) => {
  const remaining = total - used;
  const percentage = (used / total) * 100;

  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        p: 2,
        height: "100%",
      }}
    >
      {/* Title + Days Left */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography fontWeight={600}>{title}</Typography>
        <Chip
          label={`${remaining} days left`}
          size="small"
          sx={{
            backgroundColor: "#d1fae5",
            color: "#000",
            fontWeight: 600,
          }}
        />
      </Box>

      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#f3f4f6",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#000",
          },
        }}
      />

      {/* Used & Total Days */}
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          Used: {used} days
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          Total: {total} days
        </Typography>
      </Box>
    </Paper>
  );
};

const LeaveBalance = () => {
  return (
    <Grid container spacing={2}>
      {leaveData.map((leave, i) => (
        <Grid size={{ xs: 12, md: 6 }} key={i}>
          <LeaveCard  {...leave} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LeaveBalance;
