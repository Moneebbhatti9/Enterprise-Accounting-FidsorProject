import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { textFieldStyles } from '../../../Global/Styling';



const SearchBar = () => {
  const textFieldStyle = textFieldStyles();
  return (
    <div>
     
      <TextField
        variant="outlined"
        fullWidth
        InputProps={{
          classes: {
            root: textFieldStyle.customTextField,
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
