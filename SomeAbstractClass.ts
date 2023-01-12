export interface SomeAbstractClassProps {
  names: string[];
  age: number;
}

export abstract class SomeAbstractClass {
  names: string[];
  age: number;

  constructor(props: SomeAbstractClassProps) {
    this.names = props.names;
    this.age = props.age;
  }

  sayHello() {
    return `My name is ${this.names.join(', ')} and I am ${this.age} years old.`;
  }
}