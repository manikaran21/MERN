/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (height)=> {
	// Write your code here
     // buildPyramid is the height of the pyramidn
     for(var i=0 ; i < height ; i++){
          for(var j=0 ;j < 2* height-1 ;j++){
            if(j != height-i-1){
                 process.stdout.write("  ");
            }
            else{
                while(j<height+i ){
                    process.stdout.write(" * ");
                    j=j+1 ;
                    process.stdout.write(" ");
                    j=j+1 ;
                }
            }
          }
          process.stdout.write("\n") ;
   }
  
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
