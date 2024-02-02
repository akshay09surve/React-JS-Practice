import { person } from "./Person";

export function promote(){}

export default class Teacher extends person
{
    constructor(name,subject)
    {
        super(name)
        this.subject = subject;
    }

    teach()
    {
        console.log(`${this.name} is teaching ${this.subject}`)
    }
}