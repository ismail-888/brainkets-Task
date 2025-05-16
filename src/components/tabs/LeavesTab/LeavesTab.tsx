"use client";
import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import { Button } from "@/components/ui/button";
import LeaveBalance from "./LeaveBalance";
import LeaveHistory from "./LeaveHistory";
import { Plus } from "lucide-react";
import LeaveApplicationModal from "./LeaveApplicationModal";

const LeavesTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const tabItems = ["Leave Balance", "Leave History"];

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
        Leave Balance
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        Track your leave balance and history
      </Typography>

      {/* Styled Tabs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // mb:2
        }}
      >
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
        <Button
          size="sm"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center font-semibold gap-3 bg-black text-white hover:bg-gray-800"
        >
          <Plus className="w-4 h-4" />
          Apply for Leave
        </Button>
      </Box>

      <Box mt={2}>
        {activeTab === 0 && <LeaveBalance />}
        {activeTab === 1 && <LeaveHistory />}
      </Box>
      <LeaveApplicationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Paper>
      
  );
};

export default LeavesTab;
