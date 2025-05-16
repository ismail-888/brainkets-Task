import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

const cardData = [
  {
    title: "Hours This Week",
    icon: <CalendarTodayOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
    value: "32.5 / 40",
    progress: 90,
    subtext: "81.25% of weekly target",
  },
  {
    title: "Leave Balance",
    icon: <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
    value: "18 days",
    progress: 75,
    subtext: "75% remaining for the year",
  },
  {
    title: "Next Holiday",
    icon: <BeachAccessIcon fontSize="small" sx={{ color: "#444" }} />,
    value: "May 27",
    progress: null,
    subtext: "Memorial Day (Monday)",
  },
  {
    title: "Last Payslip",
    icon: <WorkOutlineOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
    value: "$4,250.00",
    progress: null,
    subtext: "Processed on April 30, 2025",
  },
];

const SummaryCards = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                height: 180,
                p: 2,
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: 2,
                border: "1px solid #ddd",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              {/* Title + Icon */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{ color: "#444" }}
                >
                  {card.title}
                </Typography>
                <Box sx={{ fontSize: 18, color: "#444" }}>{card.icon}</Box>
              </Box>

              {/* Value */}
              <Typography
                variant="body1"
                fontWeight={700}
                fontSize={20}
                sx={{ mt: 0.5 }}
              >
                {card.value}
              </Typography>

              {/* Progress or aligned subtitle */}
              <Box
                sx={{
                  height: 36,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {card.progress !== null ? (
                  <>
                    <LinearProgress
                      variant="determinate"
                      value={card.progress}
                      sx={{
                        height: 12,
                        borderRadius: 6,
                        backgroundColor: "#eee",
                        [`& .${linearProgressClasses.bar}`]: {
                          backgroundColor: "#000",
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ mt: 0.5, color: "text.secondary" }}
                    >
                      {card.subtext}
                    </Typography>
                  </>
                ) : (
                  <Typography
                    variant="caption"
                    sx={{ mt: -3, color: "text.secondary" }}
                  >
                    {card.subtext}
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SummaryCards;
