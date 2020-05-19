//function that display value
function dis(val)
{
  document.getElementById("result").value+=val;
}
//function for evaluating the expression and displaying the result
function solve()
{
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}
//function to clear calculator screen
function clr()
{
  document.getElementById("result").value = "";
}
