const data = [
    { number: "+6 Milhões", description: "beneficiados em atividades de extensão" },
    { number: "+320", description: "projetos de extensão distribuídos entre os 11 departamentos" },
    { number: "+10", description: "projetos de extensão premiados em 2022" },
    { number: "+30", description: "municípios atendidos com atividades de extensão" },
    { number: "+110", description: "atividades de extensão em assentamentos" },
    { number: "+490", description: "bolsas de extensão distribuídas entre os estudantes de graduação" },
    { number: "+230", description: "bolsistas voluntários em atividades de extensão" },
    { number: "+850 Mil", description: "verba destinada para atividades de extensão em 2022" },
];

let currentIndex = 0;

function updateNumbers() {
    const elements = [
        { number: document.getElementById('number1'), description: document.getElementById('description1') },
        { number: document.getElementById('number2'), description: document.getElementById('description2') },
        { number: document.getElementById('number3'), description: document.getElementById('description3') },
        { number: document.getElementById('number4'), description: document.getElementById('description4') },
    ];

    for (let i = 0; i < elements.length; i++) {
        const dataIndex = (currentIndex + i) % data.length;
        elements[i].number.textContent = data[dataIndex].number;
        elements[i].description.textContent = data[dataIndex].description;
    }

    currentIndex = (currentIndex + 4) % data.length;
}

setInterval(updateNumbers, 10000);
updateNumbers();  // Initialize with first set of data
