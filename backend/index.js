const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": "0e545e8f-0f5f-446c-bc1b-25527d85bd7d" },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);

//0e545e8f-0f5f-446c-bc1b-25527d85bd7d
