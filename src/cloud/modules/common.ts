import type { FunctionDefinition } from '../models/interfaces/parse-definition.interface';

/**
 * Hello World Job
 */
const helloWorld: FunctionDefinition = {
  name: 'helloJob',
  func: req => {
    console.dir(req.params);
    return 'Hello world!';
  },
};

const registerCommonModule = (): void => {
  Parse.Cloud.define(helloWorld.name, helloWorld.func);
};

export { registerCommonModule };
