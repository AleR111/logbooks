const fs = require('fs/promises');
const componentTemplate = require('./componentTemplate');
const storyTemplate = require('./storyTemplate');
const styleTemplate = require('./styleTemplate');
const firstCharUpperCase = require('../firstCharUpperCase');
const resolveRoot = require('../resolveRoot');

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (e) {
            console.error('failed to create UI directory', e);
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharUpperCase(sliceName);
            await fs.mkdir(resolveUIPath(componentName));
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.tsx`),
                componentTemplate(sliceName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.stories.tsx`),
                storyTemplate(layer, componentName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.module.scss`),
                styleTemplate(sliceName),
            );
        } catch (e) {
            console.error('failed to create component', e);
        }
    };

    await createUIDir();
    await createComponent();
};
