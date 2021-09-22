class NamedOne {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        Object.defineProperty(this, "fullName", {
            set(newFullName) {
                let fullName = newFullName.split(' ');
                if (newFullName.includes(' ') && fullName.length == 2) {
                    let isFirstNameExist = this.firstName == fullName[0];
                    let isLastNameExist = this.lastName == fullName[1];
                    if (!isFirstNameExist && !isLastNameExist) {
                        this.firstName = fullName[0];
                        this.lastName = fullName[1];
                    }
                }
            },
            get() {
                return `${this.firstName} ${this.lastName}`;
            }
        });
    }
}

let namedOne = new NamedOne("Naomi", "Wang");
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);

namedOne.firstName = "John";
console.log(namedOne.firstName);

namedOne.lastName = "Doe";
console.log(namedOne.lastName);

console.log(namedOne.fullName);

let namedOne1 = new NamedOne("Naomi", "Wang");
namedOne1.firstName = "John";
namedOne1.lastName = "Doe";

console.log(namedOne1.fullName);

namedOne1.fullName = "Bill Smith";

console.log(namedOne1.firstName);
console.log(namedOne1.lastName);

namedOne1.fullName = "Tom";
namedOne1.fullName = "TomDonnovan";

console.log(namedOne1.fullName);

namedOne1.fullName = "Bill Smith";
console.log(namedOne1.fullName);

namedOne1.fullName = "   ";
console.log(namedOne1.fullName);
