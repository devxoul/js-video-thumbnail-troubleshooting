const onFileChange = async (event) => {
  console.log("onFileChange")
  const file = event.target.files?.[0]
  if (file && video) {
    video.src = URL.createObjectURL(file)
  }
}

const generateThumbnail = () => {
  if (!video || !canvas) {
    return
  }
  if (!video.src) {
    return
  }

  const context = canvas.getContext('2d')
  if (!context) {
    return
  }

  const scale = 1
  canvas.width = video.videoWidth * scale
  canvas.height = video.videoHeight * scale
  context.drawImage(video, 0, 0, canvas.width, canvas.height)
}
