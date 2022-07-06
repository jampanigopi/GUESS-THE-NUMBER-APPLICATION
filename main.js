var systemguess=Math.floor(Math.random()*100)+1
var guess = 0
function guessnumber()
{
    var num = document.getElementById('in').value
    if(num ==='' || num>100 || num<1)
    {
      console.log('input is not valid');
    }
    else
    {
      guess++
      var num = parseInt(document.getElementById('in').value)
      if(num === systemguess)
      {
        console.log('got the answer correctly' + guess);
        document.getElementById('out').innerHTML = '<i>got the number correctly</i>'

      }
      else if(num > systemguess)
      {
        console.log('guess a smaller number');
        document.getElementById('out').innerText = 'guess a smaller number'
      }
      else
      {
        console.log('guess a greater number');
        document.getElementById('out').innerText = 'guess greater number'
      }
      
      

    }
}



