let input = document.querySelector('input');
let btn = document.querySelector('button');
let images = document.querySelector('.images');

// Movie API
btn.addEventListener("click",()=>{
    let searchText = input.value;
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).then((data)=>{
        return data.json();
    }).then((res)=>{
        console.log(res);
        show(res);
    })
})

function show(res){
    images.innerHTML = null;
    for(let data of res){
        if(data.show.image == null){
            continue;
        }
        let div = document.createElement('div');
        div.setAttribute('id', 'card');
        let link = data.show.image.medium;
        let img = document.createElement('img');
        img.setAttribute('src',link);
        let movieName = data.show.name;
        let h4 = document.createElement('h4');
        h4.innerText = movieName;
        div.append(img, h4);
        images.append(div);
    }
}