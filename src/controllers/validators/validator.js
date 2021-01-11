'use strict';

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

ValidationContract.prototype.errors = () => { 
    return errors; 
}

module.exports = ValidationContract;