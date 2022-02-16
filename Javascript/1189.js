/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const val="balloon";
    var count = 0;
    while(true){
        for(var i = 0; i < val.length; i++){
            if(~text.indexOf(val[i])){
                text= text.replace(val[i], '')
            }else{
                return count;
            }
        } count++;
    }
    return count;
};
