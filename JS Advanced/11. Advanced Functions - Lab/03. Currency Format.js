function createFormatter(separator, symbol, symbolFirst, formatter) {
    return formatter.bind(null, separator, symbol, symbolFirst);
}