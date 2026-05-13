// import fs from 'fs';
//
// const fileUrlToPathOptions = "./hello.txt";

// Write to a file (synchronously)
// fs.writeFileSync(fileUrlToPathOptions,  "Hi Node js learner!");

// Write to a file (synchronously)
// const content = fs.readFileSync(fileUrlToPathOptions,  "utf8");
// console.log("File Content:", content);


import fs from 'fs/promises';

const fileUrlToPathOptions = "./hello.txt";
// Async version
async function fileIO(){
    // Write to file asynchronously
    await fs.writeFile(fileUrlToPathOptions,"Hello, Node.js beginner!");

    // Read from file asynchronously
    const content = await fs.readFile(fileUrlToPathOptions,"utf8");
    console.log("File Content:", content);
}
fileIO();