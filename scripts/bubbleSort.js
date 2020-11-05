function Bubble(){
    c_delay=0;
    for(var i=0;i<array_size-1;i++){
        for(var j=0;j<array_size-1-i;j++){
            div_update(divs[j],div_sizes[j],"#ffff3f");//yellow color
            if(div_sizes[j]>div_sizes[j+1]){
                div_update(divs[j],div_sizes[j],"#bf0603");//red color
                div_update(divs[j+1],div_sizes[j+1],"#bf0603");///red
                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;
                div_update(divs[j],div_sizes[j],"#03045e");//blue
                div_update(divs[j+1],div_sizes[j+1],"#03045e");//blue
            }
            div_update(divs[j],div_sizes[j], "#ff6542");//Color update
        }
        div_update(divs[j],div_sizes[j], "#0f4c5c");//Color green update
    }
    div_update(divs[0],div_sizes[0], "#0f4c5c");//Color green update
    enable_buttons();
}