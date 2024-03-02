 let placesTovisit: string [] = ["Tokyo" ,"Muree", "Dubae", "London", "China"];

 console.log("Original order:", placesTovisit);

 console.log("Alphabetical order:", [...placesTovisit].sort());


 console.log("Original order after sorting:", placesTovisit);

 console.log("Reverse alphabetical order:", [...placesTovisit].sort().reverse());

 console.log("Original order after reverse sorting:", placesTovisit);

  placesTovisit.reverse();
  console.log("Reversed order:", placesTovisit);

 placesTovisit.reverse();
  console.log("back to original order:", placesTovisit);
 
//ort the array in alphabetical order
placesTovisit.sort();
console.log("sorted in alphabetical order:", placesTovisit);

placesTovisit.sort((a, b)=> b.localeCompare(a));
console.log("sorted in reverse alphatetical order:", placesTovisit) ;






 