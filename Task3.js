class Vector {
    constructor(data) {
        this.data = data;
    }

    add(otherVector) {
        try {
            let otherVectorIsCorrect = this._vectorIsCorrect(this, otherVector);
            if (!otherVectorIsCorrect) {
                throw "The Vector passed to the parameters is invalid";
            }
    
            let otherVectorData = otherVector.data;
            let newVector = new Vector([]);
            for (let index = 0; index < otherVectorData.length; index++) {
                let element = this.data[index] + otherVectorData[index];            
                newVector.data.push(element);
            }
    
            return newVector;
        } catch (error) {
            return null;
        }
    }

    subtract(otherVector) {
        try {
            let otherVectorIsCorrect = this._vectorIsCorrect(this, otherVector);
            if (!otherVectorIsCorrect) {
                throw "The Vector passed to the parameters is invalid";
            }
    
            let otherVectorData = otherVector.data;
            let newVector = new Vector([]);
            for (let index = 0; index < otherVectorData.length; index++) {
                let element = this.data[index] - otherVectorData[index];            
                newVector.data.push(element);
            }
    
            return newVector;
        } catch (error) {
            return null;
        }
    }

    dot(otherVector) {
        try {
            let otherVectorIsCorrect = this._vectorIsCorrect(this, otherVector);
            if (!otherVectorIsCorrect) {
                throw "The Vector passed to the parameters is invalid";
            }
    
            let otherVectorData = otherVector.data;
            let sum = 0;
            for (let index = 0; index < otherVectorData.length; index++) {
                let element = this.data[index] * otherVectorData[index]; 
                sum += element;           
            }
    
            return sum;
        } catch (error) {
            return null;
        }
    }

    norm() {
        let sum = 0;
        for (let index = 0; index < this.data.length; index++) {
            let element = Math.pow(this.data[index], 2);            
            sum += element;
        }
        let norm = Math.sqrt(sum);

        return norm;
    }

    toString() {
        let elements = '';
        this.data.forEach(element => {
            elements += element + ',';
        });
        elements = elements.substr(0, elements.length - 1);

        let result = `(${elements})`;
        return result;
    }

    equals(otherVector) {
        let otherVectorIsCorrect = this._vectorIsCorrect(this, otherVector);
        if (!otherVectorIsCorrect) {
            return false;
        }

        for (let index = 0; index < otherVector.data.length; index++) {
            let isEqual = otherVector.data[index] == this.data[index];
            if (!isEqual) {
                return false;
            }
        }

        return true;
    }

    _vectorIsCorrect(currentVector, otherVector) {
        let isEqualLength = currentVector.data.length == otherVector.data.length;
        return isEqualLength;
    }
}

let vector1 = new Vector([3, 4, 5]);
let vector2 = new Vector([3, 4, 5]);
let vector3 = new Vector([4, 5, 6, 7]);

let vector3Add = vector1.add(vector2);
console.log(vector3Add.data);
let vector4Sub = vector1.subtract(vector2);
console.log(vector4Sub.data);
let dot = vector1.dot(vector2);
console.log(dot);
let norm = vector1.norm();
console.log(norm);
let vector5Add = vector1.add(vector3);
console.log(vector5Add);
console.log(vector1.toString() == '(3,4,5)');
console.log(vector1.equals(vector2));
