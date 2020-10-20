
function binaryToDecimal(){
    let bin = document.getElementById('bin').value;

    console.log(bin)
    let sum = 0
    for (let i = 0; i < bin.length; i++){
        sum += Math.pow(2, parseInt(bin) -i -1)
    }
    document.getElementById('textview').value = sum
}