import React, { useState } from "react";
import CarrierCard from "./CarrierCard";
import { Grid, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll } from "../../../services/resources/resources";
import { Link as RouterLink, useNavigate } from "react-router-dom";
export default function Carrier() {
  const user = useSelector((state) => state.user.currentUser);
  const driverArray = useSelector((state) => state.transporterMembers);
  const accountDetails = useSelector((state) => state.dashboard.accountDetails);
  const [trucks, setTrucks] = useState([]);
  console.log(driverArray);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const data = { params: { transporter_id: accountDetails.id } };
    const url = `transporter/fetchtrucks`;
    fetchAll(data, url).then((res) => {
      // console.log(res['data']);
      setTrucks(res["data"]);
    });
  }, []);
  return (
    <>
      <Button
        component={RouterLink}
        to="/app/addtruck"
        sx={{ marginBottom: "2%", marginLeft: "85%" }}
        variant="contained"
      >
        Add Carrier
      </Button>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {trucks.map((value) => (
          <Grid item xs={2} sm={4} md={4} key={value.id}>
            <CarrierCard data={value} />
          </Grid>
        ))}
      </Grid>
      {
          trucks.length === 0 ? "No Trucks present" : ""
        }
    </>
  );
}
