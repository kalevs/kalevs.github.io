function validateUserAndPass()
            {
                var userName = document.forms["loginForm"]["userName"].value;
                var userPassword = document.forms["loginForm"]["Pword"].value;
                var atpos=userName.indexOf("@");
                var dotpos=userName.lastIndexOf(".");
                

                if (userName.length == 0)
                {
                    alert("Please enter your user name");
                    return false;
                    
                }else if(userPassword.length == 0 ) {
                    alert("Please enter your Password");
                    return false;
                } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=userName.length)
                {
                alert("Not a valid e-mail address");
                  return false;
                } else{
                            return true;
                }
            }

function validateUserAndPassNewUserPage(){
                var userFirstName = document.forms["newUserForm"]["UName"].value;
                var userLastName  = document.forms["newUserForm"]["LName"].value;
                var PhoneNumber  = document.forms["newUserForm"]["PhoneNum"].value;
              //  var userPassword = document.forms["newUserForm"]["Pword"].value;
                var UserEmail = document.forms["newUserForm"]["SGEmail"].value;
                var atpos=UserEmail.indexOf("@");
                var dotpos=UserEmail.lastIndexOf(".");
                
                if (userFirstName.length == 0)
                {
                    alert("Please enter your user name");
                    return false;
                }else if (userLastName.length ==0){
                    alert("Please enter your last name");
                    return false;   
             //   }else if(userPassword.length == 0 ) {
             //       alert("Please enter your Password");
             //       return false;
                }else if(PhoneNumber.length!= 10){
                    alert("Please enter 10 digits phone number");
                    return false;
                } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=UserEmail.length)
                {
                alert("Not a valid e-mail address");
                  return false;
                } else{
                            return true;
                }
            }
