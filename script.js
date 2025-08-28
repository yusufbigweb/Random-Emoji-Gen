let rowsinjs = document.getElementById('rows-inJs')

fetch("https://api.emojisworld.fr/v1/random")
.then((raw)=> raw.json())
.then((data)=>{
    data.results.forEach(function(emoji){
        console.log(emoji.name);
        
        rowsinjs.innerHTML+=`

         <div class="flex flex-col items-center bg-gray-800 rounded-xl p-4 shadow-lg">
            <div class="text-4xl mb-2 cursor-pointer select-all">${emoji.emoji}</div>
            <div class="text-white text-sm font-semibold">${emoji.name}</div>
        </div>

        `;

    });
})


    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });











// https://youtu.be/wH6uf20dpAo?t=14121