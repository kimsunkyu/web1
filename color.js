function links_setcolor(color)
{
  var links=document.querySelectorAll('a');
  var i=0;
  while(i<links.length)
  {
    links[i].style.color=color;
    i=i+1;
  }
}
function ff(self)
{
      var tar=document.querySelector('body');
      if(self.value==='night')
      {
        tar.style.backgroundColor = 'black';
        tar.style.color = 'white';
        self.value='day';
        links_setcolor('powderblue');

      }
      else
      {
        tar.style.backgroundColor = 'white';
        tar.style.color = 'black';
        self.value='night';
        links_setcolor('blue');
      }
}
