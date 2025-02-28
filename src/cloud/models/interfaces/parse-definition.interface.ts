export interface AfterDeleteDefinition<T extends Parse.Object = Parse.Object<Parse.Attributes>> {
  func?: (request: Parse.Cloud.AfterDeleteRequest<T>) => Promise<void> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface AfterSaveDefinition<T extends Parse.Object = Parse.Object<Parse.Attributes>> {
  func?: (request: Parse.Cloud.AfterSaveRequest<T>) => Promise<void> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface BeforeDeleteDefinition<T extends Parse.Object = Parse.Object<Parse.Attributes>> {
  func?: (request: Parse.Cloud.BeforeDeleteRequest<T>) => Promise<void> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface BeforeSaveDefinition<T extends Parse.Object = Parse.Object<Parse.Attributes>> {
  func?: (request: Parse.Cloud.BeforeSaveRequest<T>) => Promise<void> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface BeforeFindDefinition<T extends Parse.Object = Parse.Object<Parse.Attributes>> {
  func?: (request: Parse.Cloud.BeforeFindRequest<T>) => Promise<Parse.Query<T>> | Promise<void> | Parse.Query<T> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface AfterFindDefinition<T extends Parse.Object = Parse.Object<Parse.Attributes>> {
  func?: (request: Parse.Cloud.AfterFindRequest<T>) => any;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface BeforeLoginDefinition {
  func?: (request: Parse.Cloud.TriggerRequest<Parse.User>) => PromiseLike<void> | void;
}

export interface AfterLoginDefinition {
  func?: (request: Parse.Cloud.TriggerRequest<Parse.User>) => PromiseLike<void> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface AfterLogoutDefinition {
  func?: (request: Parse.Cloud.TriggerRequest<Parse.Session>) => PromiseLike<void> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface BeforeSaveFileDefinition {
  func?: (request: Parse.Cloud.FileTriggerRequest) => PromiseLike<Parse.File> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface AfterSaveFileDefinition {
  func?: (request: Parse.Cloud.FileTriggerRequest) => PromiseLike<void> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface BeforeDeleteFileDefinition {
  func?: (request: Parse.Cloud.FileTriggerRequest) => PromiseLike<void> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface AfterDeleteFileDefinition {
  func?: (request: Parse.Cloud.FileTriggerRequest) => PromiseLike<void> | void;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface FunctionDefinition {
  name: string;
  func: (request: Parse.Cloud.FunctionRequest) => any;
  validator?: Parse.Cloud.Validator | ((request: Parse.Cloud.FunctionRequest) => any);
}

export interface JobDefinition {
  name: string;
  func: (request: Parse.Cloud.JobRequest) => Promise<void> | void;
}
