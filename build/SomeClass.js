import { SomeAbstractClass } from "./SomeAbstractClass.js";
export class SomeClass extends SomeAbstractClass {
    job;
    constructor(props) {
        super(props);
        this.job = props.job;
    }
    sayHello() {
        return `${super.sayHello()} My job is ${this.job}.`;
    }
}
//# sourceMappingURL=SomeClass.js.map