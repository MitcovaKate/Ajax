const getProgrammingLanguagesList=()=>{
  let xml= new XMLHttpRequest()
      xml.open('GET',"https://en.wikipedia.org/wiki/List_of_programming_languages")

      xml.onload=()=>{
        let response= xml.responseText
        let parser=new DOMParser()
        let doc=parser.parseFromString(response,'text/html')
console.log(doc)
    // let anchorse=doc.querySelectorAll('div.div.col ul li a')
    //     anchorse.forEach(a=>{console.log(a.innerHTML)})
}
xml.send()
}