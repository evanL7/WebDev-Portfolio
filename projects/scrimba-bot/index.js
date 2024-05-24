import { createClient } from '@supabase/supabase-js';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import fs from 'fs/promises';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Read the contents of the text file
const filePath = './scrimba-info.txt';

(async () => {
    try {
        const text = await fs.readFile(filePath, 'utf-8');
        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            chunkOverlap: 50,
            separators: ['\n\n', '\n', ' ', '']
        });

        const output = await splitter.createDocuments([text]);
        console.log(output[0])

        // Access and log each line of the pageContent
        // const document = output[0];
        // const lines = document.pageContent.split('\n');
        // lines.forEach((line, index) => {
        //     console.log(`Line ${index + 1}: ${line}`);
        // });

        const sbApiKey = process.env.SUPABASE_API_KEY;
        const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT;
        const openAIApiKey = process.env.OPENAI_API_KEY;

    } catch (err) {
        console.log(err);
    }
})();
