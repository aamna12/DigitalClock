function updateClock(){
    let now=new Date();
    let date=now.getDate();
    let  day = now.getDay();
    let  month= now.getMonth();
    let year=now.getFullYear();
    let hour=now.getHours();
    let tz="AM";

    
    let min=now.getMinutes();
    let sec=now.getSeconds();
    
    let month_names=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day_names=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   
    if (hour==0){
        hour=12;
    }
    if (hour>12){
        console.log("yes");
       
        hour=hour-12;
        tz="PM";
        console.log(hour);
    }
    if (hour<10){
        hour="0"+`${hour}`;;
       
    }
    if (min<10){
        min="0"+`${min}`;
    }
    if (sec<10){
        sec="0"+`${sec}`;
    }
    let elements_ids=["date","day","month","year","hour","min","sec"];
    let elements=[date,day_names[day],month_names[month],year,hour,min,sec];
    for (i=0;i<7;i++){
        
        document.querySelector(`.${elements_ids[i]}`).innerText=elements[i];
    }

        document.querySelector(".ampm").innerText=tz;
}

   
const clock= window.setInterval(updateClock,1000);
