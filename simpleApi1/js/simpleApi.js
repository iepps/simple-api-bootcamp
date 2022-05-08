function getFox(){
    fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.image
    })
}

document.querySelector('button').addEventListener('click',getFox)