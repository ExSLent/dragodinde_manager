exports.success = (message, data) => {
    return {message, data}
}

exports.error404 = () => {
    const message = "Error 404"
    return {message}
}