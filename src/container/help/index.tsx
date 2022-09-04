import React, { Component } from 'react';
import { App } from '../../components/App';
import {
  Unstable_Grid2 as Grid,
  Box,
  Paper,
  IconButton,
  IconButtonProps,
  Avatar,
  CardHeader,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Collapse,
  Container,
  Pagination,
  Stack,
} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { url } from 'inspector';
import { ProjectGrid } from '../../components/project/project-grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface LinkTabProps {
  label?: string;
  href?: string;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

/**
 * 求助者项目首页
 */
export function ProjectHome() {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedIndex, setExpandedIndex] = React.useState(0);

  const handleExpandClick = (index: number) => {
    console.log('-----::', index, !expanded);
    setExpanded(!expanded);
    setExpandedIndex(index);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

  return (
    <App>
      <Container>
        <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
          <Tabs value={value} onChange={handleChange} visibleScrollbar aria-label="nav tabs example">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="捐赠中" {...a11yProps(1)} />
            <Tab label="公示期" {...a11yProps(2)} />
            <Tab label="公示期" {...a11yProps(2)} />
            <Tab label="公示期" {...a11yProps(2)} />
            <Tab label="公示期" {...a11yProps(2)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <ProjectGrid />
            <Stack spacing={2}>
              <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Three
          </TabPanel>
        </Box>
      </Container>
    </App>
  );
}
