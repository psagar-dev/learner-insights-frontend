import { 
  Card,
  Typography, 
  Container, 
  Grid, 
  Box,
  styled,
  alpha 
} from "@mui/material";
import { useState, useEffect } from "react";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { getDashboardData } from "../../api/queries";
import WebsiteVisit from "./websiteVisit";
import CurrentSubject from "./currentSubject";
import CurrentVisit from "./currentVisit";
import ConversionRate from "./conversionRate";
import NewsUpdate from "./newsUpdate";
import Tasks from "./tasks";
import TrafficBySite from "./trafficBySite";
import OrderTimeline from "./orderTimeline";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.05)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.1)',
  },
}));

const StatCard = styled(StyledCard)(({ theme, color }) => ({
  background: `linear-gradient(135deg, ${alpha(color, 0.8)} 0%, ${alpha(color, 0.9)} 100%)`,
  color: '#fff',
  minWidth: 200,
  margin: '10px',
  padding: '24px',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  marginBottom: theme.spacing(2),
}));

const AdminDashboard = () => {
  const [dashBoardData, setDashboardData] = useState([]);

  useEffect(() => {
    getDashboardData().then((data) => {
      setDashboardData(data);
    });
  }, []);

  function getIcon(type) {
    let icon;
    switch (type) {
      case "Weekly Sales":
        icon = <TrendingUpIcon sx={{ fontSize: 24 }} />;
        break;
      case "New Users":
        icon = <PeopleAltOutlinedIcon sx={{ fontSize: 24 }} />;
        break;
      case "Item Orders":
        icon = <AssignmentOutlinedIcon sx={{ fontSize: 24 }} />;
        break;
      case "Bug Reports":
        icon = <SchoolOutlinedIcon sx={{ fontSize: 24 }} />;
        break;
      default:
        icon = <TrendingUpIcon sx={{ fontSize: 24 }} />;
    }
    return icon;
  }

  return (
    <Box sx={{ pb: 5, pt: 2 }}>
      <Container maxWidth="xl">
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 5, 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Hi, Welcome back 👋
        </Typography>

        <Grid container spacing={3}>
          {dashBoardData?.map((d) => (
            <Grid item xs={12} sm={6} md={3} key={d.name}>
              <StatCard color={d.color}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <Box>
                    <IconWrapper>
                      {getIcon(d.name)}
                    </IconWrapper>
                    <Typography variant="h3" sx={{ mb: 1, fontWeight: 600 }}>
                      {d.value}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                      {d.name}
                    </Typography>
                  </Box>
                </Box>
              </StatCard>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={8}>
            <StyledCard>
              <WebsiteVisit />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CurrentVisit />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledCard>
              <ConversionRate />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CurrentSubject />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledCard>
              <NewsUpdate />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <OrderTimeline />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <TrafficBySite />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledCard>
              <Tasks />
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;

//create route for user page - clickable button User in admin page.
