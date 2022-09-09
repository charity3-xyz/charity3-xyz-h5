import React, { useEffect } from 'react';
import { App } from '../../components/App';
import { Box, Container, IconButton, IconButtonProps, Pagination, Paper, Stack, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ProjectGrid } from '../../components/project/project-grid';
import { observer } from 'mobx-react';
import { projectService } from '../../services/project';
import { Status } from '../../constants/project';
import { ProjectGridProps } from '../../components/project/project-grid';

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
      {...other}
    >
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

const tabs = [
  {
    label: 'All',
    status: '',
  },
  {
    label: '捐赠中',
    status: Status.FUNDRAISING,
  },
  {
    label: '公示中',
    status: Status.PUBLICITY,
  },
];

const pgp: ProjectGridProps = [
  {
    imgUrl: require('../../assets/juanz/juanz1.jpg'),
    title: 'Severe burns',
    sub_title: 'Name: Han Meijuan',
    progress: 50,
    total: 20000,
    content:
      'This is the introduction This is the introduction This is the introduction This is the introduction This is the  This is the introduction ...',
  },
  {
    imgUrl: require('../../assets/juanz/juanz2.jpg'),
    title: 'xxx 中毒',
    sub_title: '需要筹集 200000，花费高昂，请帮帮他',
    progress: 50,
    total: 20000,
    content:
      '没人会知道，幸福和意外哪个会先来，只有生病的人才知道健康是多么的珍贵。本不想打扰大家，可是没有办法，家庭实在承受不了，决定发起筹款，谢谢大家的支持和理解。大家好，我叫 xxx，今年66岁，家住 xx ，目前在 xx 医院住院。xxx',
  },
  {
    imgUrl: require('../../assets/juanz/juanz3.jpg'),
    title: 'xxx 加班过多，差点猝死',
    sub_title: '需要筹集 200000，花费高昂，请帮帮他',
    progress: 50,
    total: 20000,
    content:
      '没人会知道，幸福和意外哪个会先来，只有生病的人才知道健康是多么的珍贵。本不想打扰大家，可是没有办法，家庭实在承受不了，决定发起筹款，谢谢大家的支持和理解。大家好，我叫 xxx，今年66岁，家住 xx ，目前在 xx 医院住院。xxx',
  },
  {
    imgUrl: require('../../assets/juanz/juanz4.jpg'),
    title: 'xxx 淋巴恶性肿瘤',
    sub_title: 'xxx 淋巴恶性肿瘤',
    progress: 50,
    total: 20000,
    content:
      '没人会知道，幸福和意外哪个会先来，只有生病的人才知道健康是多么的珍贵。本不想打扰大家，可是没有办法，家庭实在承受不了，决定发起筹款，谢谢大家的支持和理解。大家好，我叫 xxx，今年66岁，家住 xx ，目前在 xx 医院住院。xxx',
  },
  {
    imgUrl: require('../../assets/juanz/juanz5.jpg'),
    title: 'xxx 突患白血病需要骨髓移植',
    sub_title: '需要筹集 200000，花费高昂，请帮帮他',
    progress: 50,
    total: 20000,
    content:
      '没人会知道，幸福和意外哪个会先来，只有生病的人才知道健康是多么的珍贵。本不想打扰大家，可是没有办法，家庭实在承受不了，决定发起筹款，谢谢大家的支持和理解。大家好，我叫 xxx，今年66岁，家住 xx ，目前在 xx 医院住院。xxx',
  },
  {
    imgUrl: require('../../assets/juanz/juanz6.jpg'),
    title: 'xxx 重伤在 ICU',
    sub_title: '需要筹集 200000，花费高昂，请帮帮他',
    progress: 50,
    total: 20000,
    content:
      '没人会知道，幸福和意外哪个会先来，只有生病的人才知道健康是多么的珍贵。本不想打扰大家，可是没有办法，家庭实在承受不了，决定发起筹款，谢谢大家的支持和理解。大家好，我叫 xxx，今年66岁，家住 xx ，目前在 xx 医院住院。xxx',
  },
  {
    imgUrl: require('../../assets/juanz/juanz7.jpg'),
    title: 'xxx 顶梁柱突发脑梗',
    sub_title: '需要筹集 200000，花费高昂，请帮帮他',
    progress: 50,
    total: 20000,
    content:
      '没人会知道，幸福和意外哪个会先来，只有生病的人才知道健康是多么的珍贵。本不想打扰大家，可是没有办法，家庭实在承受不了，决定发起筹款，谢谢大家的支持和理解。大家好，我叫 xxx，今年66岁，家住 xx ，目前在 xx 医院住院。xxx',
  },
];

/**
 * 求助者项目首页
 */
export const ProjectHome = observer(function ProjectHome() {
  const [value, setValue] = React.useState(0);
  const { loading, page } = projectService;

  useEffect(() => {
    projectService.query({});
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    projectService.query({
      status: tabs[newValue].status,
    });
  };

  function handlePageChange(_: any, p: number) {
    projectService.next(p - 1);
  }

  return (
    <App loading={loading}>
      <Container>
        <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
          <Tabs value={value} onChange={handleChange} visibleScrollbar aria-label="nav tabs example">
            {tabs.map(({ label }, index) => (
              <Tab label={label} key={index} />
            ))}
          </Tabs>
          {tabs.map((item, index) => (
            <TabPanel value={value} index={index} key={index}>
              <ProjectGrid pgp={pgp} />
              <Stack spacing={2}>
                <Pagination onChange={handlePageChange} count={page?.totalPages} variant="outlined" shape="rounded" />
              </Stack>
            </TabPanel>
          ))}
        </Box>
      </Container>
    </App>
  );
});
