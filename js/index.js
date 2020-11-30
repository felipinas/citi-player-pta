const songs = [
    {
        title: "Madagascar",
        singer: "Edy Lemond",
        file: "assets/songs/madagascar.mp3",
        pic: "https://i.scdn.co/image/ab67616d0000b27303ce1b8ba51780ec976f198c",
        time: 219
    },
    {
        title: "Skibidi",
        singer: "Little Big",
        file: "assets/songs/skibidi.mp3",
        pic: "https://i.scdn.co/image/ab67616d0000b273e19d74d74591bd9698f2302e",
        time: 193
    },
    {
        title: "Praeira",
        singer: "Chico Science",
        file: "assets/songs/praeira.mp3",
        pic: "https://i.scdn.co/image/ab67616d0000b273f56890f136c79550374bc834",
        time: 217
    }
]

const songName = document.querySelector("#song")
const singerName = document.querySelector("#singer")
const progression = document.querySelector("#progression")
const audio = document.querySelector("#audio")
const minus = document.querySelector("#minus")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const plus = document.querySelector("#plus")
const picSong = document.querySelector("#pic-song")
const volumeRange = document.querySelector("#volume")

play.addEventListener("click", () => {
    progression.max = audio.duration
    audio.play()
})

pause.addEventListener("click", () => {
    audio.pause()
})

minus.addEventListener("click", () => {
    audio.currentTime -= 10
})

plus.addEventListener("click", () => {
    audio.currentTime += 10
})

volume.addEventListener("input", () => {
    audio.volume = volumeRange.value / 100
})

audio.addEventListener("timeupdate", () => {
    progression.value = audio.currentTime
})

progression.addEventListener("input", () => {
    audio.currentTime = progression.value
})

function changeSong(num) {
    picSong.style.backgroundImage = `url(${songs[num].pic})`
    songName.innerHTML = `${songs[num].title}`
    singerName.innerHTML = `${songs[num].singer}`
    audio.src = `${songs[num].file}`
    progression.max = songs[num].time

    audio.play()
}