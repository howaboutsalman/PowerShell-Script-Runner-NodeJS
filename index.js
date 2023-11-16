import express from "express";
import { PowerShell } from "node-powershell";

const ps = new PowerShell({
  executionPolicy: "Bypass",
  noProfile: true,
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.post("/run", (req, res) => {
  const { command, path } = req.body;

  if (!command && !path) {
    return res.status(400).json({ error: "Command or path is required" });
  }

  let script = command || path;

  console.log(`Executing PowerShell ${command ? 'command' : 'script'}: ${script}`);

  //ps.addCommand();

  ps.invoke(script)
    .then((response) => {
      console.log("Execution successful");
      res.send(response);
    })
    .catch((err) => {
      console.error("Error executing PowerShell script:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.get("/", (req, res) => {
  res.send("Welcome to the PowerShell runner!");
});

app.listen(port, () => {
  console.log(`Node.js server is running on Port http://localhost:${port}`);
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\nShutting down gracefully");
  ps.dispose().then(() => process.exit());
});
