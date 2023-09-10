
const personagens = document.querySelectorAll('.personagem');


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado');
        
       
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
       
        const idPersonagem = personagem.attributes.id.value;
        console.log(idPersonagem)
        imagemPersonagemGrande.src = `./src/imagens mk/card-${idPersonagem}.png`;
        

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

       
        const scorpion = document.getElementById('scorpion')
        scorpion.addEventListener('click', function(){
        const audio = document.getElementById('audio-scorpion')
        audio.play()
        })

        const subZero = document.getElementById('sub-zero')
        subZero.addEventListener('click', function(){
        const audio = document.getElementById('audio-sub')
        audio.play()
        })
                    
        const raiden = document.getElementById('raiden')
        raiden.addEventListener('click', function(){
        const audio = document.getElementById('audio-raiden')
        audio.play()
        })

        const cage = document.getElementById('cage')
        cage.addEventListener('click', function(){
        const audio = document.getElementById('audio-cage')
        audio.play()
        })

        const noob = document.getElementById('noob')
        noob.addEventListener('click', function(){
        const audio = document.getElementById('audio-noob')
        audio.play()
        })

        const liuKang = document.getElementById('liu')
        liuKang.addEventListener('click', function(){
        const audio = document.getElementById('audio-liu-kang')
        audio.play()
        })

        const kitana = document.getElementById('kitana')
        kitana.addEventListener('click', function(){
        const audio = document.getElementById('audio-kitana')
        audio.play()
        })

        const mileena = document.getElementById('mileena')
        mileena.addEventListener('click', function(){
        const audio = document.getElementById('audio-mileena')
        audio.play()
        })
    
    })
})



