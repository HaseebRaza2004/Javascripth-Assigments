var list = document.getElementById('list');

var cars = [
    {
        year: "2024",
        name: "Chevrolet Corvette",
        description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSa4j3OP7qrU92TX9UiC9_4q_ch3keq7whZiu7L75r9oy0PuRiV"
    },

    {
        year: "2024",
        name: "BMW M2",
        description: "BMW M2 proves that good things come in small packages. its powerful performance, nimble handling and classy interior will thrill drivers who want a more affordable option in this segment.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9hwdwtNTklKFnB7KoHxK0hSW-M-2JX46_fN5QkC1vy3rMXB7"
    },

    {
        year: "2024",
        name: "Audi R8",
        description: "Audi R8 the blare of its V10 engine. It's brutally fast, thrilling to drive and dressed to the nines with quality materials, though it's not exactly practical, fuel-efficient or even remotely affordable.",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQGaU2KdC3Ip_yYhD3m8xgGdrrlwQECjUpaNp_zGgLWATsw9lJ"
    },

    {
        year: "2024",
        name: "BMW 8-Series",
        description: "BMW 8 Series blends power, performance and luxury into a classy and understated package. Rear-seat space is tight in coupe and convertible models, but overall, it's a well-rounded, statement-making grand tourer.",
        image: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15290/2024_BMW_8-Series_4.jpg"
    },

    {
        year: "2024",
        name: "BMW Z4",
        description: "BMW Z4 blends energetic driving fun with a spiffy and comfortable cabin, a user-friendly infotainment system and surprisingly fuel-efficient engines. ",
        image: "https://www.usnews.com/object/image/0000018e-f7e6-d0f4-a79e-f7fe9cc20001/24-bmw-z4-ext1.jpg?update-time=1713556239203&size=listiclePhoto"
    },

    {
        year: "2024",
        name: "Porsche 911",
        description: " Porsche 911 is the holy grail for drivers seeking a sports car with thrilling acceleration and supple performance. It's expensive, and its cabin ergonomics could use some work, but overall, the 911 shines as a highly desirable performance machine.",
        image: "https://www.usnews.com/object/image/0000018c-5e50-def9-afbc-df790df90001/2023-porsche-911-12.jpg?update-time=1702389353135&size=listiclePhoto"
    },

    {
        year: "2024",
        name: "Porsche Boxster",
        description: "Porsche Boxster excites with sharp handling, potent engine options and finely tuned transmissions. It doesn't have the spiffiest interior, but the Boxster delivers pure, open-air driving joy in spades.",
        image: "https://cars.usnews.com/pics/size/640x420/images/Auto/custom/15298/2024_Porsche_Boxster_1.jpg"
    },

    {
        year: "2024",
        name: "Porsche Cayman",
        description: "Porsche Cayman enthralls with pinpoint handling, powerful engine options and a gentle ride. Its cabin is cozy and comfortable, though it's short on frills, and adding options can get expensive quickly.",
        image: "https://cars.usnews.com/pics/size/390x290/images/Auto/custom/15297/2024_Porsche_Cayman_1.jpg"
    },

    {
        year: "2024",
        name: "Toyota Supra",
        description: " Toyota Supra is an attractive and affordable sports car that proves to be a fun toy on the track. Some of its rivals are more luxurious and more comfortable.",
        image: "https://www.usnews.com/object/image/0000018e-5866-d6a1-a3df-5d7e34080000/2024-grsupra-45thanniversaryed-mikanblast-h-1.jpg?update-time=1710880076488&size=listiclePhoto"
    },

    {
        year: "2024",
        name: "Mercedes-Benz GT",
        description: "Mercedes-AMG GT Coupe expertly blends sporty, dynamic driving with enhanced everyday comfort.",
        image: "https://www.usnews.com/object/image/0000018f-1035-dfeb-ad9f-b677bbc50001/23c0233-018-source.jpg?update-time=1713963907548&size=listiclePhoto"
    },

    {
        year: "2024",
        name: "BMW M4",
        description: "BMW M4 delivers a thrilling driving experience and spices things up with luxurious features and advanced technology. ",
        image: "https://www.usnews.com/object/image/0000018c-da2e-d666-abde-df2f36080001/cobb-i7launch-031122-20876.jpg?update-time=1704467510436&size=listiclePhoto"
    },

    {
        year: "2024",
        name: "Lexus LC",
        description: "Lexus LC is a refined luxury cruiser fit with a potent V8 engine, an available hybrid V6 and a convertible option, all with athletic handling and a smooth ride.",
        image: "https://www.usnews.com/object/image/0000018e-540b-d700-a1bf-d4bbf26e0001/01-2024-lexus-lc-angular-front-jmv.JPG?update-time=1710807088726&size=listiclePhoto"
    },
];

cars.forEach(function (data, ind) {
    var update = `<div class="lg:w-1/3 sm:w-1/2 p-4">
    <div class="flex relative">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
            src=${data.image}>
        <div
            class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${data.year}
            </h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.name}</h1>
            <p class="leading-relaxed">${data.description}</p>
            <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="remove(this)">Delete</button>
        </div>
    </div>
</div>`;

    list.innerHTML += update;
});

function remove(element) {

    cars.splice(element, 1);

    list.innerHTML = '';

    cars.forEach(function (data, ind) {
        var update = `<div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
                src=${data.image}>
            <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${data.year}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.name}</h1>
                <p class="leading-relaxed">${data.description}</p>
                <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="remove(this)">Delete</button>
            </div>
        </div>
    </div>`;

        list.innerHTML += update;
    });

};
