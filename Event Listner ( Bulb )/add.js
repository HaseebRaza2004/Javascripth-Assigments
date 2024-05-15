var image = document.getElementById('image')

image.addEventListener('mouseover', function () {
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNiyumfA0KmfMFmHqMlwcAxryI6L6NS3Qjw&usqp=CAU' 
})

image.addEventListener('mouseout' , function() {
    image.src = 'https://www.shutterstock.com/image-illustration/3d-illustration-light-bulb-isolated-600nw-749587456.jpg'    
})