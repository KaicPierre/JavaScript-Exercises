function binaryToDecimal() {
    let binaryNumber = document.getElementById("binaryNumber").value;

    for (let index = 0; index < binaryNumber.length; index++) {
        if (binaryNumber[index] != "0" && binaryNumber[index] != "1") {
            alert("Only 0 and 1 at the Binary Input");
            document.getElementById("binaryNumber").value = ""
            return 0;
        }
    }

    let integerNumber = 0;

    for (let index = 0; index < binaryNumber.length; index++) {
        let bit = binaryNumber.charAt(binaryNumber.length - index - 1);
         integerNumber += parseInt(bit) * Math.pow(2, index);
    }
    document.getElementById("textview").value = integerNumber;
}
