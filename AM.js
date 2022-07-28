function add()
{
    var a=Number(document.getElementById("a1").value); 
      // console.log("num1",a);
    var b=Number(document.getElementById("b1").value);
      // console.log("num2",b);
      if(a == "" || b == ""){
        alert('Please enter both values of "a and b"')
        return false;
      }
    
    var c= a + b;
      // console.log("add",c);
    document.getElementById("addition").value= c;
}

function sub()
{
    var a=Number(document.getElementById("a1").value); 
    var b=Number(document.getElementById("b1").value);
    if(a == "" || b == ""){
      alert('Please enter both values of "a and b"')
      return false;
    }
  
     var s=a-b;
     document.getElementById('mines').value= s;
}
function multi()
{
    var a=Number(document.getElementById("a1").value); 
    var b=Number(document.getElementById("b1").value);
    if(a == "" || b == ""){
      alert('Please enter both values of "a and b"')
      return false;
    }
  
    var m= a * b;
    document.getElementById("multip").value= m;
}
function div()
{
    var a=Number(document.getElementById("a1").value); 
    var b=Number(document.getElementById("b1").value);
    if(a == "" || b ==""){
      alert('Please enter both values of "a and b"')
      return false;
    }
  
    var d= a/b;
    document.getElementById("division").value= d;
}
function mod()
{
  var a=Number(document.getElementById("a1").value); 
  var b=Number(document.getElementById("b1").value);
  if(a === "" || b ===""){
    alert('Please enter both values of "a and b"')
    return false;
  }

  var o= a%b;
  document.getElementById("modulo").value= o;
}