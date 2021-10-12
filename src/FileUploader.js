import { useEffect } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const FileUploader = (props) => {
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
      <input id="file" type="file" name="file" accept=".md" />
    </>
  );
};
