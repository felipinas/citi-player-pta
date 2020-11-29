const songs = [
    {
        title: "Madagascar",
        singer: "Edy Lemond",
        file: "assets/songs/madagascar.mp3"
    },
    {
        title: "Skibidi",
        singer: "Little Big",
        file: "assets/songs/skibidi.mp3"
    },
    {
        title: "Praeira",
        singer: "Chico Science",
        file: "assets/songs/praeira.mp3"
    }
]

const singerName = document.querySelector("#singer")
const songName = document.querySelector("#song")
const progression = document.querySelector("#progression")
const audio = document.querySelector("#audio")
const minus = document.querySelector("#minus")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const plus = document.querySelector("#plus")

audio.addEventListener("timeupdate", () => {
    progression.style.width = `${(audio.currentTime*100)/audio.duration}%`
})

play.addEventListener("click", () => {
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