const key="93dbe975910a47949b694c849cbc46ed"
const url=`http://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`;

/*
// faching data by xmlhttprequest method
const xhr=new XMLHttpRequest();

xhr.open("GET",url,true)

xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        let data=xhr.responseText;
        let m=JSON.parse(data);
        let o=m.articles;
        let html="";
        o.forEach(element => {
            html+=`<div class="box">
                    <h2 id="newstitle">${element.title}</h2>
                    <img src="${element.urlToImage}" alt="" width=500 height=250>
                    <p id="news">${element.description}</p>
                </div> `
        });   
        document.querySelector(".newsbody").innerHTML=html;
    }
}

xhr.onerror=()=>{console.log("network error")}

xhr.send()
*/

// fatching data by fetch method
fetch(url)
.then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("something went wrong")
    }
})
.then((data)=>{
    let d=data.articles;
    let html="";
    d.forEach(element => {
        html+=`<div class="box">
                    <h2 id="newstitle">${element.title}</h2>
                    <img src="${element.urlToImage}" alt="" width=500 height=250>
                    <p id="news">${element.description}</p>
                </div> `
    })
    document.querySelector(".newsbody").innerHTML=html;
})
.catch((error)=>{
    console.log(error);
})