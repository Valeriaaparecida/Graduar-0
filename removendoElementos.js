const nums = [1,2,3,2,4,2,45];
let val = 2;
const novoArray = [];
let k = 0;
for(i = 0; i < nums.length; i++ ){
   
if(nums[i] !== val){
    
    // novoArray[i] = nums[i];
    novoArray.push(nums[i]);  //o método push evita que seja impresso os espacos vazios quando a condicção do if não for atendida
    }
}
nums.splice(0, nums.length);
for(i = 0; i < novoArray.length; i++){
    nums[i] = novoArray[i]
}
 
   console.log(novoArray.length);
   //console.log(novoArray);
   console.log(nums);