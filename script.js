const pilihan = document.querySelectorAll('li img');
let scoreKomputer = 0;
let scorePlayer = 0;
pilihan.forEach(function(p) {
    p.addEventListener('click', function() {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = p.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        acakGambar();
        setTimeout(function() {
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

            const tHasil = document.querySelector('.info');
            tHasil.innerHTML = hasil;

            switch (hasil) {
                case 'Menang':
                    scorePlayer +=1;
                break

                case 'KALAH':
                    scoreKomputer +=1;
                break
            }
            // if (hasil == 'KALAH') {
            //     scoreKomputer += 1;
            // }

            // if (hasil == 'Menang') {
            //     scorePlayer += 1;
            // }


            const skorKomputer = document.querySelector('.scoreKomputer');
            const skorPlayer = document.querySelector('.scorePlayer');
            skorKomputer.innerHTML = scoreKomputer.toString();
            skorPlayer.innerHTML = scorePlayer.toString();
        }, 1000); 
        
       
        
    });
});

// function updateScore() {
//     score.scorePlayer = nilaiPlayer;
//     score.scoreKomputer = nilaiKomputer;
// }

function acakGambar() {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(  new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if( i == gambar.length) i = 0;
    }, 100)
     
}
function getPilihanKomputer() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

// function getScore () {
//     const hasil = getHasil
// }

function getHasil(comp, player) {
    if( player == comp ) return 'SERI';
    if( player == 'gajah') return (comp == 'orang') ? 'Menang' : 'KALAH';
    if( player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'Menang';
    if( player == 'semut') return (comp == 'orang') ? 'KALAH' : 'Menang';
}


// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function() {
//     //alert('siap')
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const tHasil = document.querySelector('.info');
//     tHasil.innerHTML = hasil;
//     //console.log(hasil)
//     //console.log('comp : ' + pilihanKomputer);
//     //console.log('player: ' + pilihanPlayer);
// });

// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function() {
//     //alert('siap')
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const tHasil = document.querySelector('.info');
//     tHasil.innerHTML = hasil;
//     //console.log(hasil)
//     //console.log('comp : ' + pilihanKomputer);
//     //console.log('player: ' + pilihanPlayer);
// });

// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function() {
//     //alert('siap')
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const tHasil = document.querySelector('.info');
//     tHasil.innerHTML = hasil;
//     //console.log(hasil)
//     //console.log('comp : ' + pilihanKomputer);
//     //console.log('player: ' + pilihanPlayer);
// });