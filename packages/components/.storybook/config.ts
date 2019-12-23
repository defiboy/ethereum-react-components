import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.tsx$/), module);

setConsoleOptions({
  panelExclude: []
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));