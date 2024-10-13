function presentaInmueble(depvenas){
    let divVentas = `
        <img src="${depvenas.src}" class="imgdevenas">
        <h2>${depvenas.nombre}</h2>
        <p>${depvenas.descripcion}</p>
        <p><ion-icon name="location-sharp"></ion-icon>${depvenas.ubicacion}</p>
        <p> <ion-icon name="bed-outline"></ion-icon> Habitaciones ${depvenas.habitaciones} - Baños ${depvenas.banos}</p>
        <p><ion-icon name="cash-outline"></ion-icon> ${depvenas['costo']}</p>
        
    
    `
    if(depvenas.pets === true){
        divVentas += `<p  class= "aceptar"><ion-icon name="checkmark-outline"></ion-icon> Se aceptan mascotas</p>`
    }else{
        divVentas += `<p class= "rechazar"> <ion-icon name="ban-outline"></ion-icon> No se aceptan mascotas</p>`
    }

    if(depvenas.smoke === true){
        divVentas += `<p class= "aceptar"><ion-icon name="checkmark-outline"></ion-icon> Se aceptan Fumadores</p>`
    }else{
        divVentas += `<p class= "rechazar"> <ion-icon name="ban-outline"></ion-icon>No se aceptan Fumadores</p>`
    }
  

   return divVentas
}


const depvenas = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'assets/img/4.jpeg',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: '2.000',
        smoke: false,
        pets: true
        },

        {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'assets/img/5.jpg',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: '2.500',
        smoke: true,
        pets: true
        },

        {
        nombre: 'assets/img/6.jpg',
        src: 'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: ' 123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: '2,200',
        smoke: false,
        pets: false
        },
]
   
    const divInmuebles = document.querySelector('#divVentas')

    let htmldepa = '';

    for (let divVentas of depvenas){
        const divVenta = presentaInmueble(divVentas)
        htmldepa += `
        <div class="inmueble">
        ${divVenta}
        </div>`;
    }

    divInmuebles.innerHTML = htmldepa;