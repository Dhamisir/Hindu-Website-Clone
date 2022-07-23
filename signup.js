var form=document.querySelector("form");
form.addEventListener("submit",signup);

let arr;
if(localStorage.getItem("data")==null)
{
    arr=[];
}
else
{
    arr=JSON.parse(localStorage.getItem("news-user"));
}
function signup(event)
{
    event.preventDefault();
    var name=form.name.value;
    var email=form.email.value;
    var password=form.password.value;
    // console.log(name,email,password);
    if(name=="" || email=="" || password=="")
    {
        alert("All Fileds Required");
    }
    else
    {     
        let obj={
            name:name,
            email:email,
            password:password,
            flag:false
        }
        arr.push(obj);
        localStorage.setItem("news-user",JSON.stringify(arr));
        // console.log(arr);
        window.open('signin.html',"_self");
    }
}