import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  styled,
  LinearProgress
} from "@mui/material";

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(3),
  '& .MuiCardHeader-title': {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  '& .MuiCardHeader-subheader': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
  },
}));

const ProgressItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  '&:last-child': {
    marginBottom: 0,
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.palette.grey[200],
  '.MuiLinearProgress-bar': {
    borderRadius: 4,
    backgroundColor: color,
  },
}));

const CurrentVisit = () => {
  const data = [
    {
      title: 'Course Completion',
      value: 85,
      color: '#00ab55',
    },
    {
      title: 'Assignment Submission',
      value: 75,
      color: '#2196f3',
    },
    {
      title: 'Attendance Rate',
      value: 92,
      color: '#ffc107',
    },
    {
      title: 'Placement Rate',
      value: 68,
      color: '#ff5722',
    },
  ];

  return (
    <Card sx={{ height: "400px" }}>
      <StyledCardHeader
        title="Current Statistics"
        subheader="Latest performance metrics"
      />
      <CardContent>
        {data.map((item) => (
          <ProgressItem key={item.title}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle2" sx={{ flexGrow: 1, color: 'text.secondary' }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {item.value}%
              </Typography>
            </Box>
            <BorderLinearProgress
              variant="determinate"
              value={item.value}
              color="primary"
              sx={{ color: item.color }}
            />
          </ProgressItem>
        ))}
      </CardContent>
    </Card>
  );
};

export default CurrentVisit;
