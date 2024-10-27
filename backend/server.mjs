import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/api/query', (req, res) => {
    const { input } = req.body;
    const response = "Sample response"; // Placeholder for AI response
    res.json({ response });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
