function SelectionSort(){
    c_delay=0;
    for(var i=0;i<array_size-1;i++){
        div_update(divs[i],div_sizes[i],"ffff3f");//Color update
        index_min=i;
        for(var j=i+1;j<array_size;j++){
            div_update(divs[j],div_sizes[j],"ffff3f");//Color update
            if(div_sizes[j]<div_sizes[index_min]){
                if(index_min!=i){
                    div_update(divs[index_min],div_sizes[index_min],"03045e");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"bf0603");//Color update
            }
            else{
                div_update(divs[j],div_sizes[j],"03045e");//Color update
            }
        }
        if(index_min!=i){
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"bf0603");//Height update
            div_update(divs[i],div_sizes[i],"bf0603");//Height update
            div_update(divs[index_min],div_sizes[index_min],"03045e");//Color update
        }
        div_update(divs[i],div_sizes[i],"0f4c5c");//Color update
    }
    div_update(divs[i],div_sizes[i],"0f4c5c");//Color update

    enable_buttons();
}