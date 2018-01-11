var fs = require('fs');

const createDirUsage = `\tnode ex1-script.js --mkdir <name>\tCréer un répertoire sous le nom <name>`;
const helpMessage = `
    ---->> Exervice 1 : Script NodeJS <<----
    
    Usage:
        node ex1-script.js --help\t\tAfficher ce message
        node ex1-script.js --pwd\t\tAfficher le nom du répertoire courant
    ${createDirUsage}
    
    Example:
        node ex1-script.js --mkdir monDossier\tcrée un dossier \`monDossier\`
`;

if (process.argv.length <= 2) {
	console.log(helpMessage);
    process.exit(-1);
}

switch (process.argv[2]) {
	case '--pwd':
        console.log(__dirname);
        process.exit(-1);
	case '--mkdir':
        if (process.argv[3]) {
            createDir(process.argv[3])
		} else {
            console.log(`\nErreur : \n${createDirUsage}\n`);
		}
        process.exit(-1);
	default:
        process.exit(-1);
}

function createDir(name) {
    if (fs.existsSync(__dirname + '/' + name)) {
        console.log('mkdir : impossible de créer le répertoire \'' + name + '\': le dossier existe')
    } else {
        fs.mkdirSync(__dirname + '/' + name)
    }
}