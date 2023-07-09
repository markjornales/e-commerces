
export default  function generateRef() {
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let results:any = [];
    for(let x = 0; x < 10; x ++){ 
        const roll = Math.round(Math.random() * 1) + 1;
        if(roll > 1) {
            results = [...results, letters[Math.floor(Math.random() * letters.length)]];
        }else {
            results = [...results, numbers[Math.floor(Math.random() * numbers.length)]]; 
        }
    }
    return results.join('');
}