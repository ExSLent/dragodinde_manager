function init(type) {
    fetch(`http://localhost:3000/api/ready/${type}`)
        .then(response => response.json())
        .then(data => {
            dragodindesReady = data.data
            console.log(dragodindesReady)
            if (Object.keys(dragodindesReady).length !== 0 && dragodindesReady.constructor === Object) {
                dragodindeReady = Object.keys(dragodindesReady)
                var table = $('<table>')
                dragodindeReady.forEach(element => {
                    table.append($('<tr>').text(element))
                });
                table.appendTo('#table')
            } else {
                var div = $('<div>')
                div.append($('<p>').text("No dd"))
                div.appendTo('#error')
                console.log("No dd")
            }
        })
}