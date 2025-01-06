//OOP: 4 pillars

// ENCAPSULATION: Reduce complexety

let employee = {
    baseSalary: 30000,
    overtime: 30,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * rate);
    }
};
employee.getWage();

// ABSTRACTION: Simpler Interface, Reduce the impact of change

// INHERITANCE: Reduce reductant code

// POLIMORPHIOSM: Technique to reduce wich and case elements. Different way to get the same output with different option.