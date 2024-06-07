const data = [
    { number: "20%", description: "de aumento no número de atividades de extensão em 2023" },
    { number: "329", description: "atividades de extensão realizadas em 2023" },
    { number: "283.390", description: "pessoas atendidas pelas atividades de extensão em 2023" },
    { number: "652", description: "discentes envolvidos nas atividades de extensão em 2023" },
    { number: "296", description: "bolsas e beneficiando 452 alunos ao longo do ano de 2023" },
    { number: "210", description: "discentes foram beneficiados como voluntários" },
    { number: "44.527", description: "pessoas atendidas na área da Cultura em 2023" },
    { number: "35.884", description: "pessoas atendidas na área da Saúde em 2023" },
    { number: "+270%", description: "Crescimento do alcance no Instagram de 2022 para 2023" },
];

let currentIndex = 0;

function updateNumbers() {
    const elements = [
        { number: document.getElementById('number1'), description: document.getElementById('description1') },
        { number: document.getElementById('number2'), description: document.getElementById('description2') },
        { number: document.getElementById('number3'), description: document.getElementById('description3') },
    ];

    for (let i = 0; i < elements.length; i++) {
        const dataIndex = (currentIndex + i) % data.length;
        elements[i].number.textContent = data[dataIndex].number;
        elements[i].description.textContent = data[dataIndex].description;
    }
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === Math.floor(currentIndex / 3)) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextSet() {
    currentIndex = (currentIndex + 3) % data.length;
    updateNumbers();
    updateIndicators();
}

document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index * 3;
        updateNumbers();
        updateIndicators();
    });
});

setInterval(nextSet, 10000);
updateNumbers();
updateIndicators();  // Initialize with first set of data
