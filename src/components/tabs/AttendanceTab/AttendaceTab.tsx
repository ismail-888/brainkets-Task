import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import CalendarViewTab from "./CalendarViewTab";
import ListViewTab from "./ListViewTab";


const Attendance = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabItems = ["Calendar View", "List View"];

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
      <Typography variant="h5" fontWeight={600}>
        Attendance Calendar
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        View and manage your attendance records
      </Typography>

      {/* Styled Tabs */}
      <Box
        sx={{
          backgroundColor: "#f3f4f6",
          borderRadius: 2,
          p: 1,
          display: "inline-flex",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            minHeight: 0,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.95rem",
              color: "#555",
              borderRadius: 1,
              px: 3,
              py: 1,
              minHeight: 0,
              transition: "all 0.2s ease-in-out",
            },
            "& .Mui-selected": {
              backgroundColor: "#fff",
              color: "#000 !important",
              fontWeight: 600,
              boxShadow: "0 0 0 1px #e5e7eb",
            },
            "& .MuiTab-root:hover": {
              backgroundColor: "#e5e7eb",
              color: "#000",
            },
          }}
        >
          {tabItems.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
      </Box>

      <Box mt={2}>
        {activeTab === 0 && <CalendarViewTab />}
        {activeTab === 1 && <ListViewTab />}
      </Box>
    </Paper>
  );
};

export default Attendance;
