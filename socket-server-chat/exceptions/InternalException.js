class InternalException extends Error {
    constructor(message) {
        super(message);
        this.name = "InternalError";
        this.errorCode = 500;
    }
}

module.exports = InternalException;