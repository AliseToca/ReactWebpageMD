import  { useState, useEffect } from "react";
import { Box, Grid, Typography, CircularProgress, Alert, TextField } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchServices } from "../store/servicesSlice"; // <-- async thunk

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
      <Typography variant="h3" gutterBottom>
        Our Services
      </Typography>

      {/* Search bar */}
      <Box sx={{ mb: 4 }}>
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={() => console.log("Searching:", query)}
        />

        <TextField
          select
          label="Sort by"
          value={sortBy || ""}
          onChange={(e) => setSortBy(e.target.value as "title" | "price" | null)}
          SelectProps={{ native: true }}
        >
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </TextField>
      </Box>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      <Grid container spacing={4}>
        {filteredServices.length === 0 && !loading ? (
          <Typography variant="body1" sx={{ p: 2 }}>
            No services found.
          </Typography>
        ) : (
          filteredServices.map((service) => (
            <Grid key={service.id} size={{xs:12, sm:6, md:4}}>
             <Box
                sx={{
                  p: 2,
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  boxShadow: 1,
                  textAlign: "center",
                }}
              >
                {service.image && (
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderRadius: 1,
                      mb: 2,
                    }}
                  />
                )}
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {service.description}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic", mb: 1 }}>
                  Category: {service.category}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  ${service.price}
                </Typography>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default ServicesPage;