import type { FunctionDefinition } from '../models/interfaces/parse-definition.interface';

/**
 * Hello World Function
 */
const helloWorld: FunctionDefinition = {
  name: 'helloWorld',
  func: req => {
    return 'Hello world!';
  },
};

const registerCommonModule = (): void => {
  Parse.Cloud.define(helloWorld.name, helloWorld.func);
};

export { registerCommonModule };
