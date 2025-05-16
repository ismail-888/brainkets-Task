import React from "react";
import {
  Button,
  Typography,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Paper,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const leaveTypes = [
  "Select leave type",
  "Annual Leave",
  "Sick Leave",
  "Personal Leave",
  "Bereavement Leave",
];
const durations = ["Select duration", "Full Day", "Half Day", "Multiple Days"];

const LeaveApplicationModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography variant="h6" fontWeight={600}>
            Apply for Leave
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Submit a new leave request
          </Typography>
        </DialogTitle>

        <DialogContent dividers>
          <Grid container spacing={3}>
            {/* Leave Type */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography fontWeight={600} mb={0.5}>
                Leave Type
              </Typography>
              <TextField select fullWidth defaultValue="Select leave type">
                {leaveTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Duration */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography fontWeight={600} mb={0.5}>
                Duration
              </Typography>
              <TextField select fullWidth defaultValue="Select duration">
                {durations.map((duration) => (
                  <MenuItem key={duration} value={duration}>
                    {duration}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Start Date */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography fontWeight={600} mb={0.5}>
                Start Date
              </Typography>
              <DatePicker slotProps={{ textField: { fullWidth: true } }} />
            </Grid>

            {/* End Date */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography fontWeight={600} mb={0.5}>
                End Date
              </Typography>
              <DatePicker slotProps={{ textField: { fullWidth: true } }} />
            </Grid>

            {/* Reason */}
            <Grid size={{ xs: 12 }}>
              <Typography fontWeight={600} mb={0.5}>
                Reason (Optional)
              </Typography>
              <TextField
                placeholder="Enter reason for leave"
                fullWidth
                multiline
                rows={3}
              />
            </Grid>

            {/* Handover Notes */}
            <Grid size={{ xs: 12 }}>
              <Typography fontWeight={600} mb={0.5}>
                Handover Notes (Optional)
              </Typography>
              <TextField
                placeholder="Enter handover for your team"
                fullWidth
                multiline
                rows={3}
              />
            </Grid>

            {/* Static Note */}
            <Grid size={{ xs: 12 }}>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "#f3f4f6",
                }}
              >
                <DescriptionOutlinedIcon color="action" />
                <Typography variant="body2">
                  You have 18 days of Annual Leave remaining.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              borderColor: "#f3f3f3",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f3f3f3",
                borderColor: "#000",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              textTransform: "none",
            }}
          >
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default LeaveApplicationModal;
