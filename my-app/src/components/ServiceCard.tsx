import { Box, Typography } from "@mui/material";
import type { Service } from "../store/servicesSlice";

interface ServiceCardProps {
  service: Service;
  height?: number;
}

function ServiceCard({service, height = 400 }: ServiceCardProps) {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 1,
        height: height,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {service.description}
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic", mb: 1 }}>
          Category: {service.category}
        </Typography>
      </Box>

      <Typography variant="subtitle1" fontWeight="bold">
        ${service.price}
      </Typography>
    </Box>
  );
}

export default ServiceCard;
