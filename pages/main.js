import {
  Checkbox,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Doc from "components/doc";
import React from "react";

function Main(props) {
  const {} = props;
  const [search, setSearch] = React.useState("");
    const [documents, setDocuments] = React.useState([]);
    
    React.useEffect(() => {
        fetch("/api/documents")
            .then((res) => res.json())
            .then((data) => setDocuments(data));
    }, []);

  return (
    <div>
      <Stack spacing={2} sx={{ m: 2 }}></Stack>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <h1>Documents</h1>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={search}
            fullWidth
            onChange={(e) => setSearch(e.target.value)}
            label="Search"
            variant="filled"
          />
        </Grid>
        {documents
          .filter((document) =>
            document.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((document) => (
            <Grid item key={document.id}>
              <Doc title={document.title} description={document.description} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Main;
