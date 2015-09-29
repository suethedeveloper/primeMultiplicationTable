function isPrime(n) {
    if ( n < 2 ) {
        return false;
    }
    for ( var i = 2; i < n; i++ ) {
        if ( !(n % i) ) {
            return false;
        }
    }
    return true;
}

function getPrimes(size){
  var primeArr = [];
  var primeNum = 2;
  while(primeArr.length < size) {
    if (isPrime(primeNum))
      primeArr.push(primeNum);
    primeNum++;
  }
  return primeArr;
}

function print_primes(){
    var size = 10;
    var primesArr = getPrimes(size);
    
    document.write("<div style='display: table'>");
    document.write("<div style='display: table-row'><div style='display: table-cell;padding: 10px'>X</div>");
    for (var i=0; i < primesArr.length; i++ ){
      document.write("<div style='display: table-cell;padding: 10px'>"+ primesArr[i]+"</div>");
    }
    document.write("</div>");
    for (var i=0; i < primesArr.length; i++ ){
      document.write("<div style='display: table-row'>");
        document.write("<div style='display: table-cell;padding: 10px'>"+ primesArr[i] + "</div>");
      for (var j=0; j < primesArr.length; j++ ){
        document.write("<div style='display: table-cell;padding: 10px'>");
        document.write(primesArr[i] * primesArr[j]);
        document.write("</div>");
      }
      document.write("</div>");
    }
    
    document.write("</div>");      
}
