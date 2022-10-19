const player = new Plyr('#player');
player.source = {
  type: 'video',
  title: 'Example title',
  sources: [
    {
      src: './assets/videoplayback.mp4',
      type: 'video/mp4',
      size: 720,
    },
    {
      src: './assets/videoplayback.mp4',
      type: 'video/webm',
      size: 1080,
    },
  ],
  poster: './assets/img/hotel-diablo.jpg',
  previewThumbnails: {
    src: './assets/img/hotel-diablo.jpg',
  },
};

// LIKES AND DISLIKE INCREMENT
const likesContainer = document.querySelectorAll(".plus")
likesContainer.forEach((container) => {
  var span = container.firstElementChild;
  var svg = container.children[1]

  svg.addEventListener("click", () => {
    var likeCount = parseInt(span.innerHTML) + 1
    span.innerHTML = likeCount;
    console.log(span.innerHTML)
  })
})
const dislikesContainer = document.querySelectorAll(".minus")
dislikesContainer.forEach((container) => {
  var span = container.firstElementChild;
  var svg = container.children[1]

  svg.addEventListener("click", () => {
    var likeCount = parseInt(span.innerHTML) + 1
    span.innerHTML = likeCount;
    console.log(span.innerHTML)
  })
})