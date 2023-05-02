function addDD () {
    fetch('http://localhost:3000/api/dragodindes')
        .then(response => response.json())
        .then(data => {
            dragodindes = data.data
            console.log(Object.keys(dragodindes).length)
        })
}