$('document').ready(function () {
    $('#btn_show').on('click', function () {
        let res = {};
        $('input').each(function () {
            res[$(this).attr('placeholder')] = $(this).val();
        });
        $('#playground').html('');
        for (let i = 0; i < res['count']; i++) {
            $('#playground').append(
                `<div style="width: ${res['width']}px; 
                height: ${res['height']}px; 
                background-color: ${res['color']}; 
                border-radius: ${res['radius']}px">  
                </div>`);
        }
    })
})

// javascript version
// (()=>{
//     const widthInput = document.getElementById('input_width');
//     const heightInput = document.getElementById('input_height');
//     const radiusInput = document.getElementById('input_radius');
//     const countInput = document.getElementById('input_count');
//     const colorInput = document.getElementById('input_color');
//
//     const playground = document.getElementById('playground');
//
//     document.getElementById('btn_show').addEventListener('click',()=>{
//         playground.replaceChildren();
//         //playground.innerHTML = '';
//         const widthVal = widthInput.value;
//         const heightVal = heightInput.value;
//         const radiusVal = radiusInput.value;
//         const countVal = Number(countInput.value);
//         const colorVal = colorInput.value;
//
//         for (let i = 0; i < countVal; i++) {
//             const newElement = document.createElement('div');
//
//             newElement.style.width = widthVal+"px";
//             newElement.style.height = heightVal+"px";
//             newElement.style.borderRadius = radiusVal+"px";
//             newElement.style.backgroundColor = colorVal;
//             //console.log(newElement);
//             playground.appendChild(newElement);
//         }
//     })
// })();



