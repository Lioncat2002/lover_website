function fetch_letter(){
    let type=document.getElementById("letter_type").value;

    let letter_type=""
    switch(type){
        case '0':
            
            letter_type="female"
            break
        default:
            letter_type="neutral"
    }

    let res=fetch(`https://lover-kappa.vercel.app/v1/letter/${letter_type}`)

    res.then(r=>r.json()).then(data=>{
        document.getElementById("letter").innerText=data["letter"]
    })
}