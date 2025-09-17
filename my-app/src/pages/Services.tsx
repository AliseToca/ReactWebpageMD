import  { useState, useEffect } from "react";
import { Box, Grid, Typography, CircularProgress, Alert, TextField } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchServices } from "../store/servicesSlice"; // <-- async thunk
import ServiceCard from "../components/ServiceCard";

function ServicesPage() {
  const dispatch = useAppDispatch();
  const { items: services, loading, error } = useAppSelector(
    (state) => state.services
  );

  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"title" | "price" | null>(null);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  // Filter services by query
  let filteredServices = services.filter(
      (service) =>
        service.title.toLowerCase().includes(query.toLowerCase())
    );

  if (sortBy === "price") {
    filteredServices = filteredServices.sort((a, b) => a.price - b.price);
  } else if (sortBy === "title") {
    filteredServices = filteredServices.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>

      {/*--Top actions--*/}
      <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={() => console.log("Searching:", query)}
        />

        <TextField
          select
          value={sortBy || ""}
          onChange={(e) => setSortBy(e.target.value as "title" | "price" | null)}
          slotProps={{
            select: {
              native: true,
            },
          }}
          sx={{
            width: "10rem"
          }}
        >
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </TextField>
      </Box>

      {/*---Loading screen--*/}
      {loading && (
        <Box
          sx={{
            minHeight: "70vh", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      
      {/*---Error screen---*/}
      {error && (
        <Box
          sx={{
            minHeight: "80vh", 
          }}
        >
          <Alert
            severity="error"
            sx={{
              width: "100%",
              textAlign: "center",
              p: 1,
              borderRadius: 2,
              fontSize: "1rem",
            }}
          >
            {error}
          </Alert>
        </Box>
      )}

      {/*---No results on search---*/}
      {!loading && !error && filteredServices.length === 0 && (
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="text.secondary">
            No results found.
          </Typography>
        </Box>
      )}

      {/*---Service cards---*/}
      {!loading && !error && filteredServices.length > 0 && (
        <Grid container spacing={4}>
          {filteredServices.map((service) => (
            <Grid key={service.id} size={{xs:12, sm:6, md:4}}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
        )}
    </Box>
  );
}

export default ServicesPage;