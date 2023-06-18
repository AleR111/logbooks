## Start Project

```
npm install - install the dependencies
npm run start:dev or npm run start:dev:vite - Running the server + frontend of the project in dev mode
```

----

## Scripts

- `npm run start` - Start frontend project on webpack dev server
- `npm run start:vite` - Start a frontend project on vite
- `npm run start:dev` - Start frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Start frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Checking ts files by linter
- `npm run lint:ts:fix` - Fixing ts files by linter
- `npm run lint:scss` - Checking scss files with a linter
- `npm run lint:scss:fix` - Fixing scss files with a style linter
- `npm run test:unit` - Running unit tests with jest
- `npm run test:ui` - Running screenshot tests with loki
- `npm run test:ui:ok` - Confirmation of new screenshots
- `npm run test:ui:ci` - Running screenshot tests in CI
- `npm run test:ui:report` - Generating a full report for screenshot tests
- `npm run test:ui:json` - Generation of a json report for screenshot tests
- `npm run test:ui:html` - Generating HTML report for screenshot tests
- `npm run storybook` - Start Storybook
- `npm run storybook:build` - Building a storybook build
- `npm run generate:slice` - Script for generating FSD slices
- `npm run remove-feature` - Script for switching of features 

----

## Project architecture

The project is develop in accordance with the Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Files with translations are stored in public/locales.

For comfortable work, we recommend installing the plugin for webstorm/vscode

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Regular unit tests on jest - `npm run test:unit`
2) Component tests with React testing library -`npm run test:unit`
3) Screenshot testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More about tests - [testing documentation](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check files with styles.

Also, for strict control of the main architectural principles
, its own eslint plugin *eslint-plugin-check-imports-plugin* is used,
which contains 3 rules
1) imports-checker - prohibits the use of absolute imports within a single module
2) layer-imports - checks the correctness of using layers from the FSD point of view
(for example, widgets cannot be used in features and entitites)
3) public-api-imports-fsd - allows importing from other modules only from the public api. Has auto fix

##### Running linters
- `npm run lint:ts` - Checking ts files by linter
- `npm run lint:ts:fix` - Fixing ts files by linter
- `npm run lint:scss` - Checking scss files with a linter
- `npm run lint:scss:fix` - Fixing scss files with a style linter

----
## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

The file with the stories is created next to the component with the extension .stories.tsx

You can run storybook with the command:
- `npm run storybook`

Learn more about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project Configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

The entire configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing\generating reports, etc.

----

## CI pipeline

The github actions configuration is located in /.github/workflows.
In ci, all kinds of tests are run, project assembly and storybook, linting.

----

### Working with data

Interaction with the data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of the reducers (in order not to pull them into a common bundle), use
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Working with feature-flag

It is allowed to use feature flags only with the help of the toggleFeatures helper

an object with options is passed to it

{

    name: name of the flag feature,

    on: the function that will work after the feature is enabled

    off: a function that will work after the feature is turned off
    
}

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments
1. Name of the flag feature being removed
2. State (on\off)

----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [AddCommentForm](/src/features/AddCommentForm)
- [ArticleRating](/src/features/ArticleRating)
- [ArticleRecommendationsList](/src/features/ArticleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [NotificationButton](/src/features/NotificationButton)
- [ProfileRating](/src/features/ProfileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
