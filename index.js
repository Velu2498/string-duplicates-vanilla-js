// remove duplicates from string using replace method
function samechr(name1,name2) {
    first=name1
    second=name2
    for (let i in name1){
        for(let j in name2){
            if(name1[i] == name2[j]){
                // console.log(name1[i])
                first=first.replace(name1[i],"")
                second=second.replace(name2[j],"")
            }
        }
    }
    console.log(first)
    console.log(second)

}
samechr("vel murugan","nazriya")


// remove duplicates from string using splice method
function samechr(name1,name2) {
    first=name1.split("") //convert the string into array
    second=name2.split("")
    // first.splice(6,1)
    for (let i=first.length-1;i>=0;i--){ 
        for(let j=second.length-1;j>=0;j--){
            if(first[i] == second[j]){
                first.splice(i,1)
                second.splice(j,1)
            }
        }
    }

    console.log(first+"="+name1)
    console.log(second+"="+name2)

}
samechr("velmurugan","nazriya")



// // count duplicates in string using json
function countchr(name1,name2) {
    obj = {};
    for (el = 0; el < name1.length; el++) {
      var count = 0;
      for (i = 0; i < name2.length; i++) {
        if (name1[el] == name2[i]) {
          count++;
          obj[name1[el]] = count;
        }
      }
    }
    console.log(obj);
    key=Object.keys(obj)
    console.log(name1)
    }
countchr("vel murugan","nazriya")