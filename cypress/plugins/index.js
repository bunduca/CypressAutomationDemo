//Run Cypress tests on specific environment (in our case, specific website)
//Cypress configurations are placed in the config.js files for each environment tested
//The environment configuration is accessible in tests with: const {jsonTag} = Cypress.config();

const fs = require('fs-extra');
const path = require('path');
const { isFileExist } = require('cy-verify-downloads');

module.exports = (on, config) => {
    const environment = config.env.configFile;
    const configForEnvironment = getConfigurationByFile();
    addMatchImageSnapshotPlugin(on, config);
    on('task', { isFileExist })

    return (configForEnvironment)
        ? configForEnvironment.then(response => {
            return response[environment]
        }
        )
        : config;

};

function getConfigurationByFile() {
    const pathToConfigFile = cypress.json;
    return fs.readJson(path.join(__dirname, '../../', pathToConfigFile))
}
