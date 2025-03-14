import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Uploading from "./Upload";
import Text from "./Text";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  tab1: string;
  tab2: string;
  tab3: string;
}

// Styled Tab using theme values for both light and dark mode
const PillTab = styled(Tab)(({ theme }) => ({
  minHeight: "36px",
  minWidth: "80px",
  borderRadius: "10px",
  textTransform: "none",
  padding: theme.spacing(0, 2),
  display: "flex",
  gap: 2,

  // marginRight: theme.spacing(1),
  // Use theme palette for background and text colors based on mode
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[200]
      : theme.palette.grey[800],
  color:
    theme.palette.mode === "light"
      ? theme.palette.text.primary
      : theme.palette.text.secondary,
  "& .MuiTab-iconWrapper": {
    marginRight: theme.spacing(1),
  },
  "&.Mui-selected": {
    // For selected state, use primary colors from the theme
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
}));

export default function BasicTabs({ tab1, tab2, tab3 }: BasicTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={(theme: any) => ({
        // width: "100%",
        p: 2,
        borderRadius: 2,
        maxWidth: 1200,
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="custom styled tabs"
        sx={(theme: any) => ({
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[900],
          display: "inline-flex", // Use inline-flex for shrink wrapping
          alignItems: "center",
          borderRadius: "10px",
          "& .MuiTabs-indicator": {
            display: "none",
          },
          // Override the flex container inside Tabs:
          "& .MuiTabs-flexContainer": {
            flexGrow: 0,
            gap: theme.spacing(2), 
          },
          p: 1,
          width: "auto",
          marginBottom: theme.spacing(2),
        })}
      >
        <PillTab label={tab1} {...a11yProps(0)} />
        <PillTab label={tab2} {...a11yProps(1)} />
        <PillTab label={tab3} {...a11yProps(2)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <TextField
          fullWidth
          label="URL"
          id="fullWidth"
          placeholder="https://example.com/your-url"
          sx={{
            "& .css-1waddqg-MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "10.5px 7.23px",
            },
            "& .css-kbp9eo-MuiFormLabel-root-MuiInputLabel-root": {
              fontSize: "0.8rem",
              lineHeight: "1.2em",
            },
          }}
        />
        <Button
          variant={"contained"}
          color={"primary"}
          fullWidth
          sx={{ mt: 2, maxWidth: "100%", display: "block", marginX: "auto" }}
        >
          Summarize Now
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Uploading />
        <Button
          variant={"contained"}
          color={"primary"}
          fullWidth
          sx={{ mt: 2, maxWidth: "100%", display: "block", marginX: "auto" }}
        >
          Summarize Now
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Text />
        <Button
          variant={"contained"}
          color={"primary"}
          fullWidth
          sx={{ mt: 2, maxWidth: "100%", display: "block", marginX: "auto" }}
        >
          Summarize Now
        </Button>
      </CustomTabPanel>
    </Box>
  );
}
