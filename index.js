Filmes = [];

async function chamarApi(){
    const resp = await fetch('https://ghibliapi.vercel.app/films/');
     if(resp.status === 200){
        const obj = await resp.json();
    
        const first = obj.slice(0, 20);
        console.log(first)
        return first;
     }
    
}


// Função para adicionar os filmes ao DOM
async function adicionarFilmes() {
    const ids = await chamarApi();
    Filmes.push(...ids);

    const container = document.getElementById('filmes');

    Filmes.forEach(filme => {
        const child = document.createElement('div');
        child.classList.add('filme-card');
        child.innerHTML = `
            <img src="${filme.image}" alt="${filme.title}" class="filme-imagem">
            <h3 class="filme-titulo">${filme.title}</h3>
        `;
        console.log(child)
        container.appendChild(child);
    });
}
adicionarFilmes();


document.querySelector('.botao-primario').addEventListener('click', ()=> {
    window.location.href = 'https://www.netflix.com/br/title/60023642';
 })

document.querySelector('.botao-secundario').addEventListener('click', ()=> {
    window.location.href = 'https://www.youtube.com/watch?v=SgZI655GgHk';
});