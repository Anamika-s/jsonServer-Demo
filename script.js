
  async function GetUsers()
{  
  console.log("called");
  let users= "";  
  let response = await fetch("http://localhost:3003/users") ;
    console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
      users =  await response.json();
      console.log(users);
        

       console.log("users are " + users.length);
       var da="";
      for(var i=0;i<users.length;i++)
    {
      // alert(users[i].name);
   da+= '<li>' + users[i].name +  ' ' + users[i].email + '</li>';
    }
    document.getElementById("list").innerHTML = da;
  }

  
}

 

GetUsers();