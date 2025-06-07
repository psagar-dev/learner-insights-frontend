import { Card, CardHeader, CardContent, Box, styled } from "@mui/material";
import ReactApexChart from 'react-apexcharts';

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

const WebsiteVisit = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        style: {
          colors: Array(9).fill('#637381'),
          fontSize: '0.75rem',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#637381',
          fontSize: '0.75rem',
        },
      },
    },
    colors: ['#2196f3', '#00ab55', '#ffc107'],
    tooltip: {
      theme: 'dark',
      x: {
        show: false
      },
    },
    grid: {
      borderColor: 'rgba(145, 158, 171, 0.15)',
      strokeDashArray: 3,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };

  const chartData = [
    {
      name: 'Student Activity',
      data: [31, 40, 28, 51, 42, 109, 100, 98, 85]
    },
    {
      name: 'Faculty Activity',
      data: [11, 32, 45, 32, 34, 52, 41, 44, 35]
    },
    {
      name: 'Career Services',
      data: [5, 15, 21, 14, 15, 25, 18, 20, 15]
    }
  ];

  return (
    <Box>
      <Card sx={{ height: "400px" }}>
        <StyledCardHeader
          title="Website Visits"
          subheader="(+43%) than last year"
        />
        <CardContent>
          <ReactApexChart
            type="area"
            series={chartData}
            options={chartOptions}
            height={364}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default WebsiteVisit;
