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
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'assets/img/1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: '5.000',
        smoke: false,
        pets: false
        },

        {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'assets/img/2.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 2,
        banos: 1,
        costo: '1.200',
        smoke: true,
        pets: true
        },

        {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'assets/img/3.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: '4,500',
        smoke: false,
        pets: true
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