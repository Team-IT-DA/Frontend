//material ui vertical tab => 추후에 지울 예정
import React, { ReactChildren, ReactChild } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MyPageOrderList from "components/MyPage/MyPageOrderList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface VerticalTabsProps {
  children?: ReactChildren | ReactChild;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    width: 250,
    borderRight: `1px solid ${theme.palette.divider}`,
    color: "#555555",
  },
}));

export default function VerticalTabs(props: VerticalTabsProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="주문 내역" {...a11yProps(0)}></Tab>
        <Tab label="상품 후기" {...a11yProps(1)}></Tab>
        <Tab label="잇다톡" {...a11yProps(2)}></Tab>
        <Tab label="개인 정보 수정" {...a11yProps(3)}></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        <MyPageOrderList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        상품 후기
      </TabPanel>
      <TabPanel value={value} index={2}>
        잇다톡
      </TabPanel>
      <TabPanel value={value} index={3}>
        개인 정보 수정
      </TabPanel>
    </div>
  );
}
