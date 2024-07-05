  

  let gallery = document.getElementById('gallery');
  let page = 1;
  const limit = 10;
  const endpoint = 'https://jsonplaceholder.typicode.com/photos';


  async function fetchData(page, limit){
    const response = await fetch(`${endpoint}?_page=${page}&_limit=${limit}`)
    const data = await response.json();
    return data;
  }

  function renderImages(Images) {
    Images.forEach(image => {
        const img = document.createElement('img');
        img.src = img.url;
        img.alt = image.title;
        gallery.appendChild(img);
    });
  }

  async function loadImage() {
    const image = await fetchData(page, limit);
    renderImages(images);
    page++;
  }


  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrolly >= document.body.offsetHeight - 100) {
        loadImages();
    }
  })


  loadImages();

