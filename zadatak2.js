    // Funkcija za dobijanje parametara sa URL-a
    function getQueryParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const x = parseInt(urlParams.get('x')); // RED
        const y = parseInt(urlParams.get('y')); // SEDIŠTA
        return { x, y };
    }

    // Funkcija za generisanje bioskopskog rasporeda
    function generateCinemaLayout(x, y) {
        const cinemaDiv = document.getElementById('cinema');
        const table = document.createElement('div');
        
        // Generiši redove i sedišta
        for (let i = 0; i < x; i++) {
            const row = document.createElement('div');
            row.classList.add('d-flex');
            for (let j = 0; j < y; j++) {
                const cell = document.createElement('div');
                cell.classList.add('available');
                cell.classList.add('seat');
                cell.textContent = `${calculatePrice(i, x)}`;

                // Dodaj funkcionalnost za klik na sedište (rezervacija)
                
                cell.addEventListener('click', function() {
//                     var x = document.getElementById("myDIV");
                          if (cell.textContent === "${calculatePrice(i, x)}") {
                            cell.textContent = "reserved";
                          } else {
                            cell.textContent = "Hello";
                          }
                    
                    
                    
                    if (cell.classList.contains('available')) {
                        cell.classList.remove('available');
                        cell.classList.add('selected');
                        cell.textContent = `${calculatePrice(i, x)}`;
                    } else if (cell.classList.contains('selected')) {
                        cell.classList.remove('selected');
                        cell.classList.add('available');
                        cell.textContent = `${calculatePrice(i, x)}`;
//                        cell.textContent = `${i + 1}-${j + 1}`;
                    }
                });

                row.appendChild(cell);
            }

            table.appendChild(row);
        }

        cinemaDiv.innerHTML = '';  // Očisti prethodni sadržaj
        cinemaDiv.appendChild(table);  // Dodaj novu tabelu
    }


    // Učitavanje parametara i generisanje rasporeda
    function loadCinemaLayout() {
        const { x, y } = getQueryParams();
        generateCinemaLayout(x, y);
        document.getElementById('mInput').value = x;
        document.getElementById('nInput').value = y;
    }

function calculatePrice(row, totalRows) {
    // Ako je prvi ili poslednji red
    if (row === 0 || row === totalRows - 1) {
        return 300; // Prvi i poslednji red
    }

    // Ako je broj redova neparan, srednji red je tačno srednji
    if (totalRows % 2 !== 0) {
        const middleRow = Math.floor(totalRows / 2); // Srednji red
        if (row === middleRow) {
            return 500; // Srednji red
        }
    } else {
        // Ako je broj redova paran, srednji redovi su dva u sredini
        const middleRow1 = Math.floor(totalRows / 2) - 1; // Prvi srednji red
        const middleRow2 = Math.floor(totalRows / 2); // Drugi srednji red
        if (row === middleRow1 || row === middleRow2) {
            return 500; // Srednji redovi
        }
    }

    // Svi ostali redovi imaju cenu 400 dinara
    if (row < totalRows / 2 ){
        const increment = (500 - 300) / ((row / 2) - 1);
        const innerRowsPrice =  Math.round((300 + row * increment)* 100) / 100;
        return innerRowsPrice;
        
    }
    
}
// Funkcija za dobijanje boje na osnovu cene
function getColorForPrice(price) {
  if (price === 500) return 'orange';
  if (price === 300) return 'yellow';
  if (price !== 300 || price !== 500) return 'lightgreen';
}

    // Početno učitavanje stranice
    loadCinemaLayout();