const reviews = [
    {
        id: 1,
        name: 'Susan Swith',
        job: 'Web Developer',
        img:   "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'Anna Johnson',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        job: 'Designer',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',

    },
    {
        id: 3,
        name: 'Peter Jones',
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        job: 'Intern',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'Bill Anderson',
        img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        job: 'The Boss',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    }
];

const img = document.getElementById("person-img");
const autor = document.getElementById("autor");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

document.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    autor.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
})
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    autor.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
nextBtn.addEventListener("click", () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})
prevBtn.addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1 ;
    }
    showPerson(currentItem);
});