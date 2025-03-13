import React from 'react';
import { TextareaAutosize } from '@mui/material';

const Text: React.FC = () => {
  return (
    <TextareaAutosize
      minRows={10}
      placeholder="Type or paste the text you want to summarize..."
      style={{
        width: '100%',
        padding: '8px',
        fontSize: '1rem',
        borderColor: '#ccc',
        borderRadius: '4px',
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
    />
  );
};

export default Text;