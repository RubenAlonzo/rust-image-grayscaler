function init(){
  const input = document.getElementById('upload')
  const fileReader = new FileReader()

  fileReader.onloadend = () => {
    let base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/, ''
    )    
    console.log(base64)
  }

  input.addEventListener('change', () => {
    // read image as string to transfer easier over languages
    fileReader.readAsDataURL(input.files[0])
  })
}

init()