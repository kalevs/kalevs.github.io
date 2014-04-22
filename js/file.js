function validateUserAndPass()
            {
                var userName = document.forms["loginForm"]["userName"].value;
                var userPassword = document.forms["loginForm"]["Pword"].value;
                var atpos=userName.indexOf("@");
                var dotpos=userName.lastIndexOf(".");
                
                        window.location.href = "#Main";
              /* (userName.length == 0)
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
                     window.location.href = "#Main";
                }
            }*/
            }

function validateUserAndPassNewUserPage(){
                var userFirstName = document.forms["newUserForm"]["UName"].value;
                var userLastName  = document.forms["newUserForm"]["LName"].value;
                var PhoneNumber  = document.forms["newUserForm"]["PhoneNum"].value;
              //  var userPassword = document.forms["newUserForm"]["Pword"].value;
                var UserEmail = document.forms["newUserForm"]["SGEmail"].value;
                var atpos=UserEmail.indexOf("@");
                var dotpos=UserEmail.lastIndexOf(".");
                  var phoneno = /^[0-9]+$/;  
                
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
                }else if((PhoneNumber.length!= 10)||(!PhoneNumber.match(phoneno))){
                    alert("Please enter 10 digits phone number");
                    return false;
                } else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=UserEmail.length)
                {
                alert("Not a valid e-mail address");
                  return false;
                } else{
                     window.location.href = "#ThankYou";
                }
            }
            
            
            function validateUserMessage(){
                alert("thankYou")
            }
function checkNotEmptyTrusteesEditorForm(){
    var userFirstName=document.forms["TrusteeEditeForm"]["EditeProfileUserName"].value;
    var userLastName=document.forms["TrusteeEditeForm"]["EditeProfileLName"].value;
    var userPhoneNumber=document.forms["TrusteeEditeForm"]["EditeTrusteePhoneNum"].value;
    var phoneno = /^[0-9]+$/;        

                if (userFirstName.length == 0)
                {
                    alert("Please enter a First name for the user");
                    //return false;
                    return false;
                    
                }else if(userLastName.length == 0 ) {
                    alert("Please enter a last name for the user");
                    //return false;
                    return false;
                }else if((userPhoneNumber.length!= 10) || ((!userPhoneNumber.match(phoneno)))){
                    alert("Please enter 10 digits phone number");
                    return false;
                }else{
                     window.location.href = "#ThankYou";
                }
}

function checkNotEmptyTrusteesProgfileEditorForm(){
    var userFirstName=document.forms["ProfileEditeForm"]["EditeProfileUserName"].value;
    var userLastName=document.forms["ProfileEditeForm"]["EditeProfileLName"].value;
    var userPhoneNumber=document.forms["ProfileEditeForm"]["EditeProfilePhoneNum"].value;
    var userEmailAdd=document.forms["ProfileEditeForm"]["EditeProfileEmail"].value;
     var atpos=userEmailAdd.indexOf("@");
    var dotpos=userEmailAdd.lastIndexOf(".");
    var phoneno = /^[0-9]+$/;
    
                if (userFirstName.length == 0)
                {
                    alert("Please enter a First name for the user");
                    //return false;
                    return false;
                    
                }else if(userLastName.length == 0 ) {
                    alert("Please enter a last name for the user");
                    //return false;
                    return false;
                }else if((userPhoneNumber.length!= 10) || ((!userPhoneNumber.match(phoneno)))){
                    alert("Please enter 10 digits phone number");
                    return false;
                }else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=userEmailAdd.length)
                {
                alert("Not a valid e-mail address");
                  return false;
                
                }else{
                     window.location.href = "#ThankYou";
                }
                
}
function checkNotEmptyForm(){
    var userInput=document.forms["SendMessageForm"]["textOfMessage"].value;
    var userSendToPeople=document.forms["SendMessageForm"]["select-custom-19"].value;
    
    if (userInput==null || userInput=="")
    {
        alert("Please Fill the text Box!");
        return false;
     }else if(userSendToPeople==null || userSendToPeople==""){
            alert("Please Choose at least one Trusty to send him the message!");
            return false;
        }else{
            window.location.href = "#ThankYou";
            
        }
}

function valueInsert(val){
                if(val==="Ron"){
                    document.getElementById('EditeTrusteeUserName').value='Ron';
                    document.getElementById('EditeTrusteeLName').value='Choen';
                    document.getElementById('EditeTrusteePhoneNum').value='0523932829';
                }
                else
                    if(val==="Shay"){
                        document.getElementById('EditeTrusteeUserName').value='Shay';
                        document.getElementById('EditeTrusteeLName').value='Aharonson';
                        document.getElementById('EditeTrusteePhoneNum').value='0520000000';
                    }
                    else
                        if(val==="Dor"){
                            document.getElementById('EditeTrusteeUserName').value='Dor';
                            document.getElementById('EditeTrusteeLName').value='Gold';
                            document.getElementById('EditeTrusteePhoneNum').value='0546339922';
                        }
                        else
                            if(val==="Oren"){
                                document.getElementById('EditeTrusteeUserName').value='Oren';
                                document.getElementById('EditeTrusteeLName').value='Levi';
                                document.getElementById('EditeTrusteePhoneNum').value='0523909029';
                            }
                            else
                                if(val==="Idan"){
                                    document.getElementById('EditeTrusteeUserName').value='Idan';
                                    document.getElementById('EditeTrusteeLName').value='Mor';
                                    document.getElementById('EditeTrusteePhoneNum').value='0523921329';
                                }
                                else{
                        document.getElementById('EditeTrusteeUserName').value='';
                        document.getElementById('EditeTrusteeLName').value='';
                        document.getElementById('EditeTrusteePhoneNum').value='';
                                }
            }            
