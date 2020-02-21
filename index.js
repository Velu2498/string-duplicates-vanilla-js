// remove duplicates from string
function samechr(name1,name2) {
    first=name1
    second=name2
    for (let i in name1){
        for(let j in name2){
            if(name1[i] == name2[j]){
                // console.log(name1[i])
                first=first.replace(name1[i],"")
            }
        }
    }

    for (let i in name2){
        for(let j in name1){
            if(name2[i] == name1[j]){
                // console.log(name2[i])
                second=second.replace(name2[i],"")
                }
        }}

    console.log(first)
    console.log(second)

}
samechr("vel murugan","nazriy")


// count duplicates in string
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