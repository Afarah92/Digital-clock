function showtime (){
    let date = new Date;
    let hours = date.getHours();//0-23
    let min  = date.getMinutes() //0-59
    let sec = date.getSeconds () //0-59
    
    let formatHour = ConvertFormat(hours);
    hours = CheckTime (hours)
    
    
    
    hours = addZero(hours)
    min = addZero(min)
    sec = addZero(sec)
    document.getElementById('clock').innerHTML = `${hours} :${min} : ${sec} ${formatHour}`
    
    
   
    
  }
  
  function ConvertFormat (time) {
    let format = 'AM'
    if (time >= 12) {
      format ='PM'
    }
    return format;
  }
  
  function CheckTime (time) {
    if (time>12) {
      time = time - 12;
    }
    if (time === 0){
      time = 12;
        
        }
    return time
    
  }
  
  function addZero  (time) {
    if (time<10) {
      time = '0' + time;
    }
    return time 
  }
  
  showtime()
  setInterval (showtime,1000);