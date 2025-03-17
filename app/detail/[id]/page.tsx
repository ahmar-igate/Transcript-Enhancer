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

type DetailProps = {
  params: { id: string };
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function ColumnsGrid({ params }: DetailProps) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [notesTitle, setNotesTitle] = React.useState<string>("My youtube video link as Notes link")
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);
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
                    color: (theme:any) =>
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
                    color: (theme:any) =>
                      theme.palette.mode === "dark"
                        ? colors.grey[50]
                        : colors.grey[900],
                    maxWidth: "700px", // adjust maxWidth as needed
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
                      color: (theme:any) =>
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
            <Box sx={{ marginTop: "80px" }}>
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
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      <FormDialog open={dialogOpen} notesTitle={notesTitle} onClose={handleCloseDialog} />
    </Box>
  );
}
