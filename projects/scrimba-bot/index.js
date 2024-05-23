import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import fs from 'fs/promises'; // Import the fs module for file operations

// Read the contents of the text file
const filePath = './scrimba-info.txt';

try {
    const text = await fs.readFile(filePath, 'utf-8');
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 50,
        separators: ['\n\n', '\n', ' ', '']  
    });

    const output = await splitter.createDocuments([text]);
    console.log(output);

    // const sbApiKey = process.env.SUPABASE_API_KEY
    // const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT
    // const openAIApiKey = process.env.OPENAI_API_KEY

} catch (err) {
    console.log(err);
}
