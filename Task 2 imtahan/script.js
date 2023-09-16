const str = 'Salamlar';
const find = (char = '') => {
   if(char.toLowerCase() === char.toUpperCase){
      return char;
   }else if(char.toLowerCase() === char){
      return char.toUpperCase();
   }else{
      return char.toLowerCase();
   };
}
const swapCase = (str = '') => {
   let res = '';
   for(let i = 0; i < str.length; i++){
      const el = str[i];
      res += find(el);
   };
   return res;
};
console.log(swapCase(str));