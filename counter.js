const counter= (data)=>{
    var words=data.split(' ');
   var word_counts={}
    for(var i=0;i<words.length;i++){

        if(!word_counts[words[i]]){
            word_counts[words[i]]=1;
        }else{
            word_counts[words[i]]++;
        }
    }
    return word_counts;
}
module.exports=counter;