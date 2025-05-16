"use client";
import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Calendar as UICalendar } from "@/components/ui/calendar";
import { addDays, isSameDay } from "date-fns";

// Outer section container with border
const SectionPaper = styled(Paper)(({ theme }) => ({
  border: "1px solid #ddd",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  height: "100%",
}));

// Individual info card with no shadow, only border
const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

// Sample attendance data
const presentDates = [new Date(), addDays(new Date(), -1)];
const absentDates = [addDays(new Date(), -2)];
const holidayDates = [addDays(new Date(), 1)];

const CalendarView = () => (
  <Box>
    <SectionPaper elevation={0}>
      <UICalendar
        mode="single"
        modifiers={{
          present: (date) => presentDates.some((d) => isSameDay(d, date)),
          absent: (date) => absentDates.some((d) => isSameDay(d, date)),
          holiday: (date) => holidayDates.some((d) => isSameDay(d, date)),
        }}
        modifiersClassNames={{
          present: "present-day",
          absent: "absent-day",
          holiday: "holiday-day",
        }}
      />
    </SectionPaper>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={3}
      mt={1}
    >
      {/* Present */}
      <Box display="flex" alignItems="center" gap={1}>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#d1fae5", // same as present-day bg
          }}
        />
        <Typography variant="body2" color="text.primary">
          Present
        </Typography>
      </Box>

      {/* Absent / Leave */}
      <Box display="flex" alignItems="center" gap={1}>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#fee2e2", // same as absent-day bg
          }}
        />
        <Typography variant="body2" color="text.primary">
          Absent/Leave
        </Typography>
      </Box>

      {/* Weekend / Holiday */}
      <Box display="flex" alignItems="center" gap={1}>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#f3f4f6", // same as holiday-day bg
          }}
        />
        <Typography variant="body2" color="text.primary">
          Weekend/Holiday
        </Typography>
      </Box>
    </Box>
  </Box>
);

const DailySummary = ({
  date = "5/15/2025",
  status = "present",
  checkIn = "09:02 AM",
  checkOut = "05:15 PM",
  totalHours = "8.22",
}: {
  date?: string;
  status?: string;
  checkIn?: string;
  checkOut?: string;
  totalHours?: string;
}) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "present":
        return "#d1fae5"; // Tailwind's green-100
      case "absent":
      case "leave":
        return "#fee2e2"; // Tailwind's red-100
      case "holiday":
      case "weekend":
        return "#e5e7eb"; // Tailwind's gray-200
      default:
        return "#f3f4f6"; // fallback gray
    }
  };

  const renderRow = (label: string, value: string, isStatus = false) => (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={0.8}
    >
      <Typography fontWeight={500} color="text.secondary">
        {label}
      </Typography>
      {isStatus ? (
        <Box
          sx={{
            backgroundColor: getStatusColor(value),
            px: 1.5,
            py: 0.5,
            borderRadius: 5,
            fontWeight: 600,
            fontSize: "0.8rem",
            textTransform: "capitalize",
          }}
        >
          {value}
        </Box>
      ) : (
        <Typography fontWeight={600} color="text.primary">
          {value}
        </Typography>
      )}
    </Box>
  );

  return (
    <Box>
      {renderRow("Date:", date)}
      {renderRow("Status:", status, true)}
      {renderRow("Check-in:", checkIn)}
      {renderRow("Check-out:", checkOut)}
      {renderRow("Total Hours:", totalHours)}
    </Box>
  );
};

export default function CalendarViewTab() {
  return (
    <Box sx={{ flexGrow: 1, p: 0 }}>
      <Grid container spacing={2}>
        {/* Calendar */}
        <Grid size={{ xs: 12, md: 6 }}>
          <CalendarView />
        </Grid>

        {/* Daily Summary */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionPaper elevation={0}>
            <Typography
              variant="h6"
              mb={2}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Daily Summary
            </Typography>

            <DailySummary />
          </SectionPaper>
        </Grid>
      </Grid>
    </Box>
  );
}
