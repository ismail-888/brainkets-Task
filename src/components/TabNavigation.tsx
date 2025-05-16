import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import OverviewTab from "./tabs/OverViewTab/OverviewTab";
import AttendanceTab from "./tabs/AttendanceTab/AttendaceTab";
import CompensationTab from "./tabs/CompensationTab";
import LeavesTab from "./tabs/LeavesTab/LeavesTab";



// import LeavesTab from "@/tabs/LeavesTab/LeavesTab";


interface TabItem {
  label: string;
}

const tabItems: TabItem[] = [
  { label: "Overview" },
  { label: "Attendance" },
  { label: "Leaves" },
  { label: "Compensation" },
];

const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{  padding: 2 }}>
      <Box
        sx={{
          backgroundColor: "#f3f4f6", // Tailwind's gray-100
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
          {tabItems.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </Box>

      <Box mt={2}>
        {activeTab === 0 && <OverviewTab />}
        {activeTab === 1 && <AttendanceTab />}
         {activeTab === 2 && <LeavesTab />}
        {activeTab === 3 && <CompensationTab />}
      </Box>
    </Box>
  );
};

export default TabNavigation;
