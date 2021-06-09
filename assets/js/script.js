// Patrón Módulo
let modulo = (() => {
    // Variables privadas / propiedades
    let container;
    
    // Métodos privados
    function privateMostrarMultimedia(url,id) {
        if (id == 'musica'){
            container =  document.querySelector('#musica > iframe');
            container.setAttribute('src',url);
        } else if (id == 'peliculas') {
            container =  document.querySelector('#peliculas > iframe');
            container.setAttribute('src',url);
        } else if (id == 'series') {
            container =  document.querySelector('#series > iframe');
            container.setAttribute('src',url);
        }
  }
 
  // API pública
  return {
    publicMostrarMultimedia: function (url,id) {
        privateMostrarMultimedia(url,id);
    },

  }
})();


// Definición de clase padre
class Multimedia{
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
        /* this.setUrl = (nueva_url) => _url = nueva_url; */
    }

    get url(){
        return this.getUrl();
    }

    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

// Definición de clase hija
class Reproductor extends Multimedia{
    constructor(url,id){
        super(url);
        this._id = id;
    }

    get id(){
        return this._id;
    }

    playMultimedia(){
        modulo.publicMostrarMultimedia(this.url,this.id);
    }

    /* setInicio(tiempo_inicio){
        this._url = 
    } */
}

// Instancias de la clase Reproductor
let musica1 = new Reproductor('https://www.youtube.com/embed/eOQS7Cy6G8Y','musica');
let pelicula1 = new Reproductor('https://www.youtube.com/embed/PkhXLgu-mYM','peliculas');
let serie1 = new Reproductor('https://www.youtube.com/embed/9GgxinPwAGc','series');

/* console.log(musica1.playMultimedia); */


// Agregando escuchador para los eventos click() de los botones
let btn1 = document.querySelector('#headingOne > h2 > button');
btn1.addEventListener('click',musica1.playMultimedia());

let btn2 = document.querySelector('#headingTwo > h2 > button');
btn2.addEventListener('click',pelicula1.playMultimedia());

let btn3 = document.querySelector('#headingThree > h2 > button');
btn3.addEventListener('click',serie1.playMultimedia());