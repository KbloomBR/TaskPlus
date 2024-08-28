function calcularTotalDespesas(produtos) {
  return produtos.reduce((total, produto) => total + produto.preco, 0);
}

const produtos = [
  { nome: "Gabinete Corsair 700D Airflow", categoria: "Eletrônico", preco: 200},
  { nome: "Stell Legend B-550M", categoria: "Eletrônico", preco: 700},
  { nome: "AMD Ryzen 7 5800X 3D", categoria: "Eletrônico", preco: 2400},
  { nome: "RTX 4070TI", categoria: "Eletrônico", preco: 6000},
  { nome: "Asgard 16GB 3200mH", categoria: "Eletrônico", preco: 300},
  { nome: "Asgard 16GB 3200mH", categoria: "Eletrônico", preco: 300},
  { nome: "SSD Samsung NVME 2T 1980", categoria: "Eletrônico", preco: 3000},
  { nome: "Fonte 750W GameMax 80+ Gold", categoria: "Eletrônico", preco: 1100}
];

const totalDespesas = calcularTotalDespesas(produtos);
console.log(`Total das despesas: R$ ${totalDespesas.toFixed(2)}`);
