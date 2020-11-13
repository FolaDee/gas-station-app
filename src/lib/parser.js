const parser = (payloads) => {
    return payloads.results.map((payload) => {
        return {
            id: payload.place_id,
            location: payload.geometry.location,
            icon: payload.icon,
            name: payload.name,
            address: payload.formatted_address
        }
    });
}

module.exports = parser;