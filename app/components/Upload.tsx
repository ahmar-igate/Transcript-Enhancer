// components/Uploading.tsx

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Paper, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

interface UploadingProps {
  onFilesAccepted?: (files: File[]) => void;
  acceptedFormats?: string; // e.g., '.pdf,.docx,.xlsx,.txt'
}

const Uploading: React.FC<UploadingProps> = ({ onFilesAccepted, acceptedFormats }) => {
  // Default accepted formats: PDF, DOCX, and Text files.
  const defaultFormats = '.pdf,.docx,.txt';
  const allowedFormats = acceptedFormats || defaultFormats;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (onFilesAccepted) {
      onFilesAccepted(acceptedFiles);
    }
  }, [onFilesAccepted]);

  // Convert the allowed formats string to an object expected by react-dropzone.
  // Each key is a trimmed file extension.
  const acceptObj = allowedFormats.split(',').reduce((acc, format) => {
    acc[format.trim()] = [];
    return acc;
  }, {} as { [key: string]: [] });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptObj,
    multiple: true,
  });

  return (
    <Paper
      variant="outlined"
      {...getRootProps()}
      sx={{
        p: 4,
        textAlign: 'center',
        border: isDragActive ? '3px dashed #1976d2' : '2px dashed #42a5f5',
        backgroundColor: isDragActive ? '#f0f8ff' : 'inherit',
        transition: 'border 0.3s ease, background-color 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <SvgIcon
        viewBox="0 0 384 512"
        sx={{
          fontSize: 56,
          color: "rgb(46, 131, 251)",
          display: "inline-block",
        }}
      >
        <path
          fill="currentColor"
          d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
        />
      </SvgIcon>
      <input {...getInputProps()} />
      <Typography variant="h6" gutterBottom>
        {isDragActive ? 'Drop the files here...' : 'Drag and drop files here, or click to select files to summarize'}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Accepted file types: PDF, DOCX, and Text files.
      </Typography>
    </Paper>
  );
};

export default Uploading;
