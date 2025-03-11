const express = require('express');
const app = express();
const aiRoutes = require("./routes/ai.routes");
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/ai", aiRoutes);

app.use((req, res, next) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack); 

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

module.exports = app;
