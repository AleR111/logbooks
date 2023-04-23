const fs = require('fs/promises');
const createModel = require('./createModel');
const createUI = require('./createUI');
const createPublicApi = require('./createPublicApi');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
    const dirName = firstCharUpperCase(sliceName);

    try {
        await fs.mkdir(resolveRoot('src', layer, dirName));
    } catch (e) {
        console.error(`failed to create directory for slice ${sliceName}`);
    }

    await createModel(layer, sliceName);
    await createUI(layer, sliceName);
    await createPublicApi(layer, sliceName);
};
