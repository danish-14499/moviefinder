const apikey='7e236b5360c63d798cad3c2371c9e675';
const baseurl='https://api.themoviedb.org/3';
const defaulturl=baseurl+'/discover/movie?sort_by=popularity.desc&'+'api_key='+apikey;

function generate(url){
    fetch(url).then(response=>response.json()).then(data=>{
        console.log(data.results);
        showmovies(data.results);
    })
}
const imageurl='https://image.tmdb.org/t/p/w500/';
const main=document.getElementById('main');

function showmovies(data){
    main.innerHTML=``;
    data.forEach(item => {
        const title=item.title;
        const poster=item.poster_path;

        const posterurl=imageurl+poster;
        const rating=item.vote_average;
        // const overview=item.overview;
        const date=item.release_date;
        const popularity=item.popularity
        const language=item.original_language;
        const newmovie=document.createElement('div');
        newmovie.classList.add('movie');
        newmovie.innerHTML=` <img src="${posterurl}" alt="movieimage">
        <div class="movieinfo">
           <div class="title">
               <h3>${title}</h3>
           </div>
           <span class="rating">${rating}</span>
        </div>
        <div class="overview">
        <div class="date">
           <h4>Relesed date:
           <i class="bi bi-calendar-week-fill">&#xF1F2;</i>
           </h4>
           <span>${date}</span>
        </div>
        <div class="popularity">
           <h4>popularity:</h4>
           <span>${popularity}</span>
        </div>
        <div class="language">
          <h2>${language}</h2>
        </div>
      </div>`
     main.appendChild(newmovie)


    });
    
}
const form =  document.getElementById('form');
const search=document.getElementById('search');
const newurl='https://api.themoviedb.org/3/search/movie?api_key='+apikey;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=search.value;
    if(name){
       generate(newurl+'&query='+name);
    }
    else{
        generate(defaulturl);
    }
})
