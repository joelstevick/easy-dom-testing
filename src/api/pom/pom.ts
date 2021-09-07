export type PomActionHandler = (context: unknown, ...args: unknown[]) => unknown;
export type PomValidateHandler = (context: unknown) => unknown;
export interface PomConfig {
  validate: Record<string, PomValidateHandler>;
  actions: Record<string, PomActionHandler>;
}

export class POM {
  constructor(private context: any, private config: PomConfig) {}

  validate(state: string) {
    if (!this.config.validate[state]) {
      throw new Error(`unrecognized validation state: ${state}, check your pom config file validate-property`);
    }

    this.config.validate[state](this.context);
  }

  action(state: string, ...args: unknown[]) {
    if (!this.config.actions[state]) {
      throw new Error(`unrecognized action state: ${state}, check your pom config file actions-property`);
    }

    this.config.actions[state](this.context, ...args);

    this.validate(state);
  }
}
