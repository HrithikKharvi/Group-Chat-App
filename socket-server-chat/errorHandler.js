const handleError = (error, req, res, next) => {
    const errorCode = error.errorCode || 500;
    const errorMessage = error.message || "error at backend!";

    res.status(errorCode).json({
        "error": errorCode,
        "errorMessage": errorMessage
    })
}

module.exports = handleError;