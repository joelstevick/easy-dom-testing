export type PomActionHandler = (context: unknown, ...args: unknown[]) => unknown;
export interface PomAction {
  'state-transition'?: string;
  action: PomActionHandler;
}
export type PomValidateHandler = (context: unknown) => unknown;
export interface PomConfig {
  validate: Record<string, PomValidateHandler>;
  actions: Record<string, PomAction>;
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

    this.config.actions[state].action(this.context, ...args);

    if (this.config.actions[state]['state-transition']) {
      this.validate(this.config.actions[state]['state-transition']!);
    }
  }
}
