const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

// File to store the filenames
const filenamesFile = 'filenames.txt';

// Read filenames from file
const readFilenames = () => {
    if (fs.existsSync(filenamesFile)) {
        return fs.readFileSync(filenamesFile, 'utf-8').split('\n').filter(Boolean);
    }
    return [];
};

// Write filenames to file
const writeFilenames = (filenames) => {
    fs.writeFileSync(filenamesFile, filenames.join('\n'));
};

// Check if file already exists
const checkFileExists = (filename) => {
    return fs.existsSync(filename);
};

// Write content to a new file
const writeToFile = (filename) => {
    fs.writeFileSync(filename, 'You are awesome');
};

// Main function
const main = () => {
    const argv = yargs
        .option('filename', {
            alias: 'f',
            description: 'Name of the file to create',
            type: 'string',
            demandOption: true,
        })
        .help()
        .alias('help', 'h')
        .argv;

    let filenames = readFilenames();
    let filename = argv.filename;

    // Check if the file already exists
    if (checkFileExists(filename)) {
        console.log(`File ${filename} already exists. Please provide a new filename.`);
    } else {
        // Write to the new file
        writeToFile(filename);
        filenames.push(filename);
        writeFilenames(filenames);
        console.log(`File ${filename} created successfully.`);
    }
};

main();
