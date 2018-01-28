// write a function to make an ajax request. Usse the fetch function 
// Getting data from this line - http://rallycoding.herokuapp.com/api/music_albums

// using normal promises method
function fetchAlbums(){
    fetch( 'https://rallycoding.herokuapp.com/api/music_albums' )
    .then(( res ) => {
        res.json();
    }).then(( data ) => {
        console.log( data );
    })
} 

//ES 2017 method
async function fetchAlbums2(){
    const res = await fetch( 'https://rallycoding.herokuapp.com/api/music_albums' );
    const json  = await res.json();
    console.log(json);
}   

fetchAlbums();