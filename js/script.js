titles = [
    'Erek C. S. "Santxsz" - Página Inicial',
    'Erek C. Santos - Desenvolvedor & Designer Gráfico',
    'Erek C. S. - Portóflio Geral'
]

var titlesIndex = titles[Math.floor(Math.random()*titles.length)];

document.title = titlesIndex;

document.getElementById('year').innerHTML = new Date().getFullYear();
console.log(new Date().getFullYear());
