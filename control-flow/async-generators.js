/**
 * The async await generator can be used to 
 */
const { readdir, readFile, writeFile } = require('fs')
const { join } = require('path')
const { promisify } = require('util')

const folder = join(__dirname, '../2-Factories')

const readdirAsync = promisify(readdir)
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

 // read files in a folder
async function* getFilesIterator() {
    try {
        const readDirectory = await readdirAsync(folder)

        for (const file of readDirectory) {
            yield file
        }
    } catch (error) {
        throw Error(error)
    }
}
 
async function process (){
    try {
        const allFiles = await getFilesIterator() //AsyncGenerator Object

        for await (const file of allFiles) {
            const read = await readFileAsync(join(folder, file), 'utf8')
            console.log(`${file} has been processed`);
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log('All files processed');
    }
}

process()