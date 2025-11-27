const progress = document.getElementById("progress")
const song = document.getElementById("song")
const ctrlIcon = document.getElementById("ctrlIcon")
const songImage = document.getElementById("songImage")
const songTitle = document.getElementById("songTitle")
const singerName = document.getElementById("singerName")
const backwardBtn = document.getElementById("backwardBtn")
const forwardBtn = document.getElementById("forwardBtn")

let currentSongIndex = 0;

const songs = [
    {
        title: "Mitti",
        artist: "Vishal & Shekhar, Vishal Dadlani ",
        src: "Assets/Songs/Mitti - Fighter 320 Kbps.mp3",
        images: "Assets/SongsImage/Fighter-Hindi-2024-20241205141002-500x500.jpg"
    },
    {
        title: "Jab Tak",
        artist: "Armaan Malik",
        src: "Assets/Songs/Jab Tak (redux) M.s. Dhoni The Untold Story 320 Kbps.mp3",
        images: "Assets/SongsImage/M-S-Dhoni-The-Untold-Story-3-Hindi-2016-500x500.jpg"
    },
    {
        title: "jhoome Jo Pathaan",
        artist: "Vishal & Shekhar, Arjit Singh.",
        src: "Assets/Songs/Jhoome Jo Pathaan Title Song 320 Kbps.mp3",
        images: "Assets/SongsImage/Pathaan-Hindi-2022-20221222104158-500x500.jpg"
    },
    {
        title: "Kya Meri Yaad Aati Hai",
        artist: "Irshad Kamil. Tanishk Bagchi",
        src: "Assets/Songs/Kya Meri Yaad Aati Hai Sky Force 320 Kbps.mp3",
        images: "Assets/SongsImage/Sky-Force-Hindi-2025-20250129103147-500x500.jpg"
    },
    {
        title: "O Sher Teer Te Taj",
        artist: "Manmohan Waris, Kamal Heer, Sangtar",
        src: "Assets/Songs/O Sher Teer Te Taj Film Version Kesari Chapter 2 320 Kbps.mp3",
        images: "Assets/SongsImage/o-sher-teer-te-taj-film-version-kesari-chapter-2-500-500.jpg"
    }
];


//~ Load initial songs

function loadSong(index){
    const current = songs[index];
    song.src = current.src;
    songTitle.innerHTML = current.title;
    singerName.innerHTML = current.artist;
    songImage.src = current.images;
}

loadSong(currentSongIndex);

//~ play/pause function 
function PlayPause () {
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play");
    }
}


song.addEventListener("loadedmetadata", function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
});

setInterval( () =>{
    if(!song.pause ){
        progress.value = song.currentTime
    }
},500)


//~ Seek in song 
progress.onchange = function(){
    song.play()
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause")
}

//~ forward Button function 
forwardBtn.addEventListener("click", () =>{
    currentSongIndex++;
    if(currentSongIndex >= songs.length){
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
    song.play();
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")
});

//~  backward Button function

backwardBtn.addEventListener("click", () =>{
    currentSongIndex--;
    if(currentSongIndex < 0){
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
    song.play();
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")
})


//~ Next song auto play 
song.addEventListener("ended", () => {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0; // Loop back to first song
    }
    loadSong(currentSongIndex);
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar