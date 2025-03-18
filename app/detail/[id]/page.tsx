"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../../globals.css";
import { colors, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { Padding } from "@mui/icons-material";
import FormDialog from "../../components/FormDialog";
import Link from "@mui/material/Link";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LongMenu from "../../components/menu"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
type DetailProps = {
  params: { id: string };
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.825rem;
  font-weight: normal;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 6px 10px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:focus {
    color: #fff;
    outline: 3px solid rgb(38, 46, 56);
  }

  &.${tabClasses.selected} {
    background-color: #1a2027;
    color: ${blue[300]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.825rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
    min-width: 800px;
    background-color:rgb(28, 29, 32);
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    place-content: space-between center;
    `
);

export default function ColumnsGrid({ params }: DetailProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [notesTitle, setNotesTitle] = React.useState<string>(
    "My youtube video link as Notes title"
  );
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} columns={16}>
        <Grid item xs={8}>
          <Item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Button
                  sx={{
                    p: 0,
                    minWidth: 0,
                    color: (theme: any) =>
                      theme.palette.mode === "dark"
                        ? colors.grey[50]
                        : colors.grey[900],
                  }}
                >
                  <ArrowBackIosNewIcon fontSize="small" />
                </Button>
                <Typography
                  variant="body1"
                  sx={{
                    color: (theme: any) =>
                      theme.palette.mode === "dark"
                        ? colors.grey[50]
                        : colors.grey[900],
                    maxWidth: "700px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {notesTitle}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">
                  <Button
                    sx={{
                      p: 0,
                      minWidth: 0,
                      color: (theme: any) =>
                        theme.palette.mode === "dark"
                          ? colors.grey[50]
                          : colors.grey[900],
                    }}
                    onClick={handleOpenDialog}
                  >
                    <EditIcon fontSize="small" />
                  </Button>
                </Typography>
              </Box>
            </Box>
            <Box>
              <iframe
                style={{ marginTop: 20, borderRadius: 8 }}
                width="810"
                height="450"
                src="https://www.youtube.com/embed/63QdVHiCStE?si=Aib9m_mkfXzZt0Rm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </Box>
            <div>
              <div
                className="trans_title"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "10px 5px",
                }}
              >
                <div className="tabs">
                  <Tabs defaultValue={1}>
                    <TabsList>
                      <Tab value={1}>Transcript</Tab>
                      <Tab value={2}>Discover</Tab>
                    </TabsList>
                    <div
                      className="accessibilties"
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        gap: 4,
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
                          p: 0,
                          minWidth: 0,
                          color: (theme: any) =>
                            theme.palette.mode === "dark"
                              ? colors.grey[50]
                              : colors.grey[900],
                        }}
                      >
                        <ContentCopyIcon fontSize="small" />

                      </Button>
                      <Button
                        onClick={handleButtonClick}
                        sx={{
                          p: 0,
                          minWidth: 0,
                          color: (theme: any) =>
                            theme.palette.mode === "dark"
                              ? colors.grey[50]
                              : colors.grey[900],
                        }}
                      >
                        <FileDownloadOutlinedIcon fontSize="medium" />

                      </Button>
                      <LongMenu
                        anchorEl={anchorEl}
                        open={open}
                        handleClose={handleMenuClose}
                      />
                    </div>

                    <TabPanel value={1}>
                      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <div style={{ marginBottom: "5px" }}>
                          <Link href="#" underline="none">
                            56:30
                          </Link>
                        </div>
                        <Box>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ullam sunt expedita asperiores perspiciatis eum
                          ab ducimus laudantium blanditiis, nemo debitis
                          deleniti recusandae doloremque minima sapiente officia
                          at exercitationem laboriosam illo ex dicta iusto.
                          Ratione similique autem dicta soluta tenetur facere
                          exercitationem repellendus facilis sit reprehenderit
                          debitis quia, veniam eos ullam earum dignissimos
                          molestiae consequuntur?
                        </Box>
                      </div>
                      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <div style={{ marginBottom: "5px" }}>
                          <Link href="#" underline="none">
                            36:01
                          </Link>
                        </div>
                        <Box>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ullam sunt expedita asperiores perspiciatis eum
                          ab ducimus laudantium blanditiis, nemo debitis
                          deleniti recusandae doloremque minima sapiente officia
                          at exercitationem laboriosam illo ex dicta iusto.
                        </Box>
                      </div>
                      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <div style={{ marginBottom: "5px" }}>
                          <Link href="#" underline="none">
                            24:09
                          </Link>
                        </div>
                        <Box>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Ullam sunt expedita asperiores perspiciatis eum
                          ab ducimus laudantium blanditiis, nemo debitis
                          deleniti recusandae doloremque minima sapiente officia
                          at exercitationem laboriosam illo ex dicta. Lorem
                          ipsum dolor sit amet consectetur adipisicing elit.
                          Temporibus, rem. iusto.
                        </Box>
                      </div>
                    </TabPanel>
                    <TabPanel value={2}>Second page</TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      <FormDialog
        open={dialogOpen}
        notesTitle={notesTitle}
        onClose={handleCloseDialog}
      />
    </Box>
  );
}
