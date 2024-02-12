$(document).ready(function(){ // Esperar que el documento cargue, otra forma $(function(){...})

    //////////////////////////////
    // Selectores
    //////////////////////////////

    $('.title') // Selecionar con id
        .css('color', '#5B626B') // Agregar css
        .addClass('my-4') // Agregar clase

    $('.card') // Seleccionar con clase
        .addClass('h-100 border-0 shadow') // Agregar clase

    $('img') // Seleccionar con etiqueta/tag
        .attr('src', 'static/images/linus-torvalds.jpg') // Agregar un atributo
        .removeClass('rounded-circle') // Eliminar clase
        .addClass('rounded') // Agregar clase

    $('.parrafo-1') // Seleccionar con clase
        .find('p') // Buscar con etiqueta/tag
        .html('Linus Benedict Torvalds es un ingeniero de software') // Reemplazar el texto

    $('.parrafo-1 p:contains(software)') // Seleccionar hijo que contenga la palabra software
        .addClass('text-secondary')

    $('ul li') // Seleccionar hijos
        .eq(1) // Seleccionar con indice
        .css('color', '#884EA0') // Agregar css
        .css({'font-weight': 'bold'}) // Otra forma de agregar css

    $('ul li:even') // Seleccionar hijos pares (even), impares (odd), primero (first) y ultimo (last)
        .css('color', 'gray')

    $('ul li:eq(1)') // Seleccionar hijos con indice
        .css('text-decoration', 'underline')

    $('[value="Cambiar texto"]') // Seleccionar con atributo
        .addClass('form-control')

    $('a[href^="https://"]') // Seleccionar con etiqueta/tag y atributo que contenga un valor
        .css({'text-decoration': 'none', 'color': '#DC7633'})

    $('.ocultar').css('display', 'none') // Ocultar elementos

    $('.parrafo-2 p:not(".ocultar")') // Seleccionar hijos que no tengan la clase ocultar
        .css('font-weight', 'bold')

    $('.parrafo-3')
        .append('<p>Parrafo nuevo</p>') // Agregar elementos al final
        .prepend('<p>Parrafo al principio</p>') // Agregar elementos al principio

    $('.parrafo-3 p:eq(-1)')
        .after('<p>Parrafo despues</p>') // Agregar elementos despues
        .before('<p>Parrafo antes</p>') // Agregar elementos antes

    $('#eliminar').remove() // Eliminar elementos

    //////////////////////////////
    // Eventos
    //////////////////////////////

    $('#input-1') // Seleccionar con id
        .change(function(){ // Evento cambio
            alert('El texto del campo cambio') // Alerta
        })

    $('#input-2')
        .keypress(function(event){ // Evento de tecla presionada
            alert('Tecla presionada: ' + String.fromCharCode(event.which)) // (event.which) obtiene el codigo de la tecla y (String.fromCharCode) convierte el codigo en texto
        })

    $('#evento-click')
        .click(function(){ // Evento click
            alert('Evento click') // Alerta
            $(this).toggleClass('btn-success') // Modificar la clase
        })

    $('.caja-click')
        .click(function(){
            $(this).animate({ // Agregar animacion
                width: '150px',
                height: '150px'
            }, 1000) // Tiempo de la animacion
        })

    $('.caja-hover')
        .hover( // Evento sobre/encima
            function(){
                alert('El cursor esta sobre la caja hover')
            },
            function(){
                alert('El cursor salio de la caja hover')
            }
        )

    $('.cajas-hover').click(function(){
        let caja_id = $(this).attr('id') // Obtener atributo id

        alert('Click en la caja con id: ' + caja_id)
        $(this).css('background-color', '#A2D9CE')
    })

    function agregar_caja(){
        let nueva_caja = $('<div>').addClass('caja me-2 mb-2').html('Mover').draggable() // (draggable) permite mover elementos

        $('.contenedor-cajas').append(nueva_caja)
    }
    agregar_caja()

    $('#agregar-caja').on('click', function(){
        agregar_caja()
    })

    $('#eliminar-caja').click(function(){
        $('.contenedor-cajas .caja:last').remove()
    })

    function get_random_color(){
        let alfanumerico = '0123456789ABCDEF'
        let color = '#'

        for(let i = 0; i < 6; i++){
            color += alfanumerico[Math.floor(Math.random() * 16)] // Generar numeros aleatorios del 0 al 15
        }
        return color
    }

    $('#cambiar-color').click(function(){
        $('.contenedor-cajas .caja').css('background-color', get_random_color())
    })

    //////////////////////////////
    // Animaciones
    //////////////////////////////

    $('#caja-desvanecer')
        .click(function(){
            $(this).fadeOut(1000) // Desvanecer en 1s
        })

    $('#caja-deslizar')
        .click(function(){
            $(this)
                .slideUp(1000) // Deslizar hacia arriba en 1s
                .slideDown(1000) // Deslizar hacia abajo en 1s
        })

    function caja_discoteca(){
        $('#caja-discoteca').animate(
            {backgroundColor: get_random_color()},
            500, // 0.5s
            function(){
                caja_discoteca()
            }
        )
    }
    caja_discoteca()

    //////////////////////////////
    // Ajax
    //////////////////////////////

    function solicitud_ajax(){
        $.ajax({ // Realizar solicitudes http asincronas
            url: 'mensaje.html',
            method: 'GET',
            dataType: 'html',
            success: function(data){
                $('#mensaje-ajax').html(data).addClass('text-success')
            },
            error: function(data){
                $('#mensaje-ajax').html('<h3>Error</h3>').addClass('text-danger')
            },
        })
    }

    $('#solicitud-ajax').on('click', function(){
        solicitud_ajax()
    })

    //////////////////////////////
    // Formularios
    //////////////////////////////

    // $('#form').on('submit', function(event){
    //     event.preventDefault() // Prevenir el comportamiento por defecto del formulario
    // })

})