const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 8080

app.get("/", (req, res) => {

    const a = [
        {

            fullname: "Vikas",
            username: "vk@123",
            image: "https://cdn2.photostockeditor.com/h/0601/flag-flag-hanging-on-pole-india-india-image.jpg"

        }
    ]
    res.status(200).send(a)
})

app.listen(PORT, () => {
    console.log(`server is running in ${PORT}`)
})