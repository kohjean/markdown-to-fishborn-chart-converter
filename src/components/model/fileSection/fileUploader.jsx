import { useState } from 'react';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { css } from '@emotion/react';

export const FileUploader = (props) => {
  const [filename, setFilename] = useState('');

  const fileDataSetter = (event) => {
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsText(event.target.files[0], 'UTF-8');
      reader.onload = () => {
        setFilename(event.target.files[0].name);
        props.setText(reader.result);
      };
    }
  };

  return (
    <>
      <label htmlFor="file">
        <UploadFileIcon
          sx={{
            fontSize: props.size,
            '&:hover': { cursor: 'pointer' },
          }}
        />
      </label>
      <div>
        <label htmlFor="file">
          <input
            accept=".md"
            id="file"
            type="file"
            onChange={(event) => fileDataSetter(event)}
            css={css`
              display: none;
            `}
          />
          <Button
            className="MuiButton-textSecondary"
            variant="outlined"
            component="span"
            color="info"
          >
            select file
          </Button>
          <p>{filename}</p>
        </label>
      </div>
    </>
  );
};
