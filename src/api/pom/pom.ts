export type PomActionHandler = (context: unknown, ...args: unknown[]) => any;
export interface PomAction {
  action: PomActionHandler;
}
export type PomValidateHandler = (context: unknown) => unknown;
export interface PomConfig {
  validate?: Record<string, PomValidateHandler>;
  actions: Record<string, PomAction>;
}

export class POM {
  constructor(private context: any, private config: PomConfig) {}

  validate(key: string) {
    if (!this.config.validate) {
      throw new Error('You must configure a validation object to use validate()');
    }

    if (!this.config.validate[key]) {
      throw new Error(`unrecognized validation: ${key}, check your pom config file validate-property`);
    }

    this.config.validate[key](this.context);
  }

  action(key: string, ...args: unknown[]) {
    if (!this.config.actions[key]) {
      throw new Error(`unrecognized action: ${key}, check your pom config file actions-property`);
    }

    return this.config.actions[key].action(this.context, ...args);
  }
}
