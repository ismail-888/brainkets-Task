import React from "react";
import { Box, Grid, Paper, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

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

interface RecentActivityCardProps {
  avatarUrl: string; // <-- URL for avatar image here
  title: string;
  subtitles: string[];
}

interface HolidayCardProps {
  icon: React.ReactNode;
  title: string;
  dateInfo: string;
  daysAway: string;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  avatarUrl,
  title,
  subtitles,
}) => (
  <CardBox >
    <Box display="flex" gap={2}>
      <Avatar src={avatarUrl} alt={title} sx={{ width: 40, height: 40 }} />
      <Box>
        <Typography fontWeight={600}>{title}</Typography>
        {subtitles.map((text, i) => (
          <Typography key={i} variant="body2" color="text.secondary">
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  </CardBox>
);

const HolidayCard: React.FC<HolidayCardProps> = ({
  title,
  dateInfo,
  daysAway,
}) => (
  <CardBox>
    <Box display="flex" gap={2} alignItems="center" mb={1}>
      <Box
        sx={{
          bgcolor: "#eee",
          borderRadius: "50%",
          width: 40,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 24,
        }}
      >
        <CalendarTodayOutlinedIcon fontSize="small" />
      </Box>
      <Box flex={1}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight={600}>{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {daysAway}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {dateInfo}
        </Typography>
      </Box>
    </Box>
  </CardBox>
);

export default function OverviewTab() {
  const recentActivities = [
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      title: "Leave Request Approved",
      subtitles: [
        "Your leave request for May 15-17 has been approved by HR.",
        "2 hours ago",
      ],
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      title: "Payslip Generated",
      subtitles: [
        "Your April 2025 payslip has been generated and is ready for download.",
        "Yesterday",
      ],
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      title: "New Training Assigned",
      subtitles: [
        "You've been assigned to 'Advanced Leadership Skills' training course.",
        "2 day ago",
      ],
    },
    {
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      title: "Performance Review Scheduled",
      subtitles: [
        "Your quarterly performance review has been scheduled for May 20.",
        "3 day ago",
      ],
    },
  ];

  const upcomingHolidays = [
    {
      icon: "",
      title: "Memorial Day",
      dateInfo: "May 27,2025 (Monday)",
      daysAway: "19 days away",
    },
    {
      icon: "",
      title: "Independence Day",
      dateInfo: "july 4,2025 (Friday)",
      daysAway: "57 days away",
    },
    {
      icon: "",
      title: "Labor Day",
      dateInfo: "September 1,2025 (Monday)",
      daysAway: "116 days away",
    },
    {
      icon: "",
      title: "Thanksgiving Day",
      dateInfo: "November 27,2025 (Thursday)",
      daysAway: "203 days away",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 0 }}>
      <Grid container spacing={2}>
        {/* Recent Activity */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionPaper elevation={0}>
            <Typography
              variant="h6"
              mb={2}
              sx={{ fontWeight: 600, fontSize: 24 }}
            >
              Recent Activity
            </Typography>
            {recentActivities.map((item, i) => (
              <RecentActivityCard key={i} {...item} />
            ))}
          </SectionPaper>
        </Grid>

        {/* Upcoming Holidays */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SectionPaper elevation={0}>
            <Typography
              variant="h6"
              mb={2}
              sx={{ fontWeight: 600, fontSize: 24 }}
            >
              Upcoming Holidays
            </Typography>
            {upcomingHolidays.map((item, i) => (
              <HolidayCard key={i} {...item} />
            ))}
          </SectionPaper>
        </Grid>
      </Grid>
    </Box>
  );
}
