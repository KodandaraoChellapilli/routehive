const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// RouteHive Utah Locations API
let locations = [
  { locationId: 1, locationName: "Salt Lake City", code: "SLC" },
  { locationId: 2, locationName: "Provo", code: "PRO" },
  { locationId: 3, locationName: "Orem", code: "ORM" },
  { locationId: 4, locationName: "Ogden", code: "OGD" },
  { locationId: 5, locationName: "Lehi", code: "LEH" },
];

// GET all locations
app.get("/api/locations", (req, res) => {
  res.json(locations);
});

// GET by ID (dynamic endpoint)
app.get("/api/locations/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = locations.find((x) => x.locationId === id);
  res.json(result);
});

// ADD new location (dynamic POST)
app.post("/api/locations", (req, res) => {
  const newLocation = req.body;
  locations.push(newLocation);
  res.json({ message: "Location added", data: newLocation });
});

// DELETE location
app.delete("/api/locations/:id", (req, res) => {
  const id = parseInt(req.params.id);
  locations = locations.filter((x) => x.locationId !== id);
  res.json({ message: "Deleted successfully" });
});

// Start server
app.listen(3000, () => {
  console.log("🚀 RouteHive API running on http://localhost:3000");
});
