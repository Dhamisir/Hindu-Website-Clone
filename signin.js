var form=document.querySelector("form");
form.addEventListener("submit",signin);

let arr=[];
function signin(event)
{
    event.preventDefault();
    var email=form.email.value;
    var password=form.password.value;
    // console.log(email,password);
    if(email=="" || password=="")
    {
        alert("All Fileds Required");
    }
    else
    {     
        let ele=JSON.parse(localStorage.getItem("news-user"));
        // console.log(ele)
        let ans=false;
        for(let key in ele)
        {
            // console.log(ele[key])
            if(email==ele[key].email && password==ele[key].password){
                ele[key].flag=true;
                ans=true;
                break;
            }
        }
        if(ans==true)
        {
            localStorage.setItem("news-user",JSON.stringify(ele));
            alert("login successful.");   
            window.location.href="index.html";
        }
        else
        {
            alert("wrong credentials");
        }                  
    }
}