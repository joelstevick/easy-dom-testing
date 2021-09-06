export type PomConfigHandler = (context: any) => any;

export interface PomConfig {
  validate: Record<string, PomConfigHandler>;
  actions: Record<string, PomConfigHandler>;
}

export class POM {
  constructor(private context: any, private config: PomConfig) {}

  validate(state: string) {
    if (!this.config.validate[state]) {
      throw new Error(`unrecognized validation state: ${state}, check your pom config file validate-property`);
    }

    this.config.validate[state](this.context);
  }

  action(state: string) {
    if (!this.config.actions[state]) {
      throw new Error(`unrecognized action state: ${state}, check your pom config file actions-property`);
    }

    this.config.actions[state](this.context);

    this.validate(state);
  }
}
