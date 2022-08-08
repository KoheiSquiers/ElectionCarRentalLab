import {
  Paper,
  Container,
  Typography,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Autocomplete,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ background: blue }}>
      <Paper elevation={3} sx={{ p: 5 }}>
        <Typography variant={"h5"}>選挙レンタカー 料金シュミレーション</Typography>
        <Divider />
        <Typography variant={"h6"}>お見積り</Typography>

        <ToggleButtonGroup sx={{ pb: 3 }}>
          <ToggleButton value="1">統一地方選</ToggleButton>
          <ToggleButton value="2">一般選挙</ToggleButton>
          <ToggleButton value="3">衆議委員選挙</ToggleButton>
        </ToggleButtonGroup>

        <Grid container>
          <Grid xs={12} sm={4}>
            <Autocomplete
              options={[
                { label: "The Shawshaaank Redemption", year: 1994 },
                { label: "The Godfather", year: 1972 }]}
              renderInput={(params) => <TextField {...params} label="選挙区" />}
            />
          </Grid>
          <Grid xs={12} sm={8}>
            <ToggleButtonGroup sx={{ pb: 3 }}>
              <ToggleButton value="1">議長</ToggleButton>
              <ToggleButton value="2">首長</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <Divider />

        <Typography variant={"h6"}>サイズ・車両タイプ</Typography>
        <ToggleButtonGroup sx={{ pb: 3 }}>
          <ToggleButton value="1">軽自動車</ToggleButton>
          <ToggleButton value="2">コンパクトカー</ToggleButton>
          <ToggleButton value="3">普通車</ToggleButton>
          <ToggleButton value="4">バンタイプ</ToggleButton>
        </ToggleButtonGroup>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>

        <ToggleButtonGroup sx={{ pb: 3 }}>
          <ToggleButton value="1">外照</ToggleButton>
          <ToggleButton value="2">内照</ToggleButton>
          <ToggleButton value="3">登壇</ToggleButton>
        </ToggleButtonGroup>


      </Paper>
    </Container>
  );

};

export default Home;
