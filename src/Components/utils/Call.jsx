import { IconButton, Stack } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";

const Call = () => {
  return (
    <Stack
      position="fixed"
      bottom={10}
      borderRadius="20px"
      bgcolor="#0D99FF"
      width={62}
      height={62}
      alignItems="center"
      justifyContent="center"
      right={{ lg: 80, xs: 10 }}
      zIndex={10000}
      boxShadow="0px 4px 10px 5px rgba(0, 0, 0, 0.25)"
    >
      <IconButton>
        <a
          style={{
            color: "#fff",
          }}
          href="tel:8 (800) 234-12-82"
        >
          <CallIcon sx={{ width: 45, height: 45 }} />
        </a>
      </IconButton>
    </Stack>
  );
};

export default Call;
