function stringExpansion(string) {
    //No string check
        if (!string) {
            return;
        }
    
    //No numbers check
    
        if (string.match(/[1-9]/g) == null) {
          return string;
        }
    
            var arr = string.split('');
            var newArr = [];
            
            arr.map((value, index) => {
        
        //Two consecutive number check and delete first of them
        
        if ((typeof (+value)) == 'number' && arr[index] == arr[index+1]) {
            arr.splice(index, 1);
        }
        
        //Push next of digit character to new array with loop
        
        else if ((typeof (+value)) == 'number' ) {
                for (var i = 0; i < value; i++) {
            newArr.push(arr[index+1])
                }
             }
              }
        
            );
              
          console.log(newArr.join('')); 
            }

            stringExpansion('3D2a5d2f');
            stringExpansion('3d332f2a');
            stringExpansion('abcde')