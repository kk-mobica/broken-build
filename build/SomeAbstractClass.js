export class SomeAbstractClass {
    names;
    age;
    constructor(props) {
        this.names = props.names;
        this.age = props.age;
    }
    sayHello() {
        return `My name is ${this.names.join(', ')} and I am ${this.age} years old.`;
    }
}
//# sourceMappingURL=SomeAbstractClass.js.map