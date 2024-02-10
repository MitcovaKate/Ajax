let languages=[]




const getProgrammingLanguagesList=()=>{
  let xml= new XMLHttpRequest()
      xml.open('GET','https://en.wikipedia.org/wiki/List_of_programming_languages')

      xml.onload=()=>{
        let response= xml.responseText
        let parser=new DOMParser()
        let doc=parser.parseFromString(response,'text/html')

     let anchors=doc.querySelectorAll('div.div-col ul li a')
      languages=[...anchors].map(a => {
       return {
              name:a.innerHTML,
              url:a.href.replace("http://127.0.0.1:5500","https://en.wikipedia.org")
       }
       
      })
}
xml.send()

}

const filterProgrammingLanguages=(e)=>{
  let input = e.target 
  let keyword=input.value
  let results=document.getElementById('resultDiv')
     results.innerHTML=''
  if(keyword.length>=2){
     
  let dropdownUL=document.createElement('ul')
      dropdownUL.className='dropdown-menu show'

  //     languages
  //     .filter(l=>{
  //               return l.name.toLowerCase().startsWith(keyword.toLowerCase())
  //   }).forEach(l => {
  //   dropdownUL.append(document.createElement('li'))
  //   dropdownUL.lastElementChild.append(document.createElement('a'))
  //   dropdownUL.lastElementChild.firstElementChild.innerHTML=l.name
  //   dropdownUL.lastElementChild.firstElementChild.href=l.url
  //   dropdownUL.lastElementChild.firstElementChild.className="dropdown-item"
  // })

  const filteredLanguages = languages.filter(l => l.name.toLowerCase().startsWith(keyword));

  filteredLanguages.forEach(l => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.innerHTML = l.name;
    anchor.href = l.url;
    anchor.className = 'dropdown-item';
    listItem.appendChild(anchor);
    dropdownUL.appendChild(listItem);

    //  Add event listener to capture click
     anchor.addEventListener('click', getProgrammingDescription);
  });



    results.append(dropdownUL)
  }

}
let page=[]



const getProgrammingDescription=(e)=>{

e.preventDefault(); 

const clickedLink = e.target;
const linkUrl = clickedLink.href;
console.log(linkUrl)
 let xml= new XMLHttpRequest()
      xml.open('GET',`${linkUrl}`)

    xml.onload=()=>{
       let response= xml.responseText
        let parser=new DOMParser()
       let doc=parser.parseFromString(response,'text/html')
console.log(doc)
      let anchor=doc.querySelectorAll('div.mw-body-content p a')
  page=[...anchor].map(a => {
     return {
            name:a.innerHTML,
             url:a.href.replace("http://127.0.0.1:5500","https://en.wikipedia.org")
      }
        
    
    })

     console.log(anchor)  
   

    
       
}
 xml.send()
 
 }
