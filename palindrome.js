
document.getElementById("check-btn").addEventListener("click", function(){

  const str=document.getElementById("text-input").value.trim();
  const sth = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const len= sth.length;
  const resultDiv=document.getElementById("result");
  let isPalindrome= true;
  if(str=== "")
  {
    alert("Please input a value");
    return;
  }
  for(let i = 0 ; i < len / 2 ; i++)
  {
     if(sth[i]!==sth[len-1-i])
     {
      isPalindrome=false;
      break;
     }
  }
  if(isPalindrome)
  {
  resultDiv.textContent=`${str} is a palindrome`;
  }
  else
  {
  resultDiv.textContent=`${str} is not a palindrome`;
  }
});