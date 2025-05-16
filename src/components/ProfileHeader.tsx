import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default function ProfileHeader() {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {/* Cover image */}
      <Box
        sx={{
          position: "relative",
          height: 200,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/blurimage.webp"
          alt="Cover Image"
          fill
          style={{ objectFit: "cover" }}
          className="filter blur-sm brightness-75"
          priority
        />

        {/* Edit Cover Button */}
        <Button
          variant="outline"
          size="sm"
          className="absolute top-4 right-4 flex items-center gap-2"
        >
          <Pencil className="w-4 h-4" />
          Edit Cover
        </Button>
      </Box>

      {/* Avatar + Info Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 0,
          px: 3,
          position: "relative",
        }}
      >
        {/* Avatar and Info grouped together for overlap */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Avatar overlapping cover */}
          <Box
            sx={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid white",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              position: "relative",
              top: -48,
              zIndex: 10,
              backgroundColor: "transparent", // fix white half issue
            }}
          >
            <Image
              src="/images/avatar1.jpg"
              alt="User Avatar"
              width={96}
              height={96}
              style={{ objectFit: "scale-down" }}
              priority
            />
          </Box>

          {/* Info card */}
          <Box
            sx={{
              ml: 2,
              mt: -10,
              p: 1,
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 2,
              boxShadow: 1,
              minWidth: 240,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#444" }}>
              Jane Doe
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Typography variant="body2" color="text.secondary">
                Product Designer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • New York, USA
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Edit Profile Button */}
        <Button
          size="sm"
          className="flex items-center gap-2 -mt-14 bg-black text-white hover:bg-gray-800"
        >
          <Pencil className="w-4 h-4" />
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
}
