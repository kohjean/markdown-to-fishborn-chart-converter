import UploadFileIcon from '@mui/icons-material/UploadFile';

export const FileUploader = (props) => {
  const fileDataSetter = (event) => {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0], 'UTF-8');
    reader.onload = () => {
      props.setText(reader.result);
    };
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
      <input
        id="file"
        type="file"
        accept=".md"
        onChange={(event) => fileDataSetter(event)}
      />
    </>
  );
};
