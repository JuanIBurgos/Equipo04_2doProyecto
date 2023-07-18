const meses =['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
let losMeses='';
for (let i = 0; i < meses.length; i++) {
      losMeses += "-" + meses [i] + "\n";
    }
alert("Los meses:\n" + losMeses);


// Forma 02
// const verMeses = () =>{
// alert(meses.join('\n'))
// }
// verMeses();