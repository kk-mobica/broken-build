import { SomeAbstractClass, SomeAbstractClassProps } from "./SomeAbstractClass.js";

export interface SomeClassProps extends SomeAbstractClassProps {
  names: [string];
  job: string;
}

export class SomeClass extends SomeAbstractClass {
  job: string;

  constructor(props: SomeClassProps) {
    super(props);
    this.job = props.job;
  }

  sayHello(): string {
    return `${super.sayHello()} My job is ${this.job}.`;
  }
}