const flickrUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

    function getimg() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', flickrUrl, true);
      xhr.send();

      xhr.onload = function () {
        const data = JSON.parse(this.responseText);
        addNewImages(data.photos.photo);
      };
    }

    function addNewImages(photoArray) {
      const gallery = document.getElementById("gallery");

      photoArray.forEach(photo => {
        const imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
        const img = document.createElement("img");
        img.src = imgUrl;
        gallery.appendChild(img);
      });
    }