function formValidation()
{
    var uname = document.registration.username;
    //var txtDate = document.getElementById('txtDate').value;
    var date = document.registration.birthDay;
    //var birthday = document.registration.birthDay;
    //var birthmonth = document.registration.birthMonth;
    //var birthyear = document.registration.birthYear;
    var passid = document.registration.passid;
    var confirmpassword = document.registration.confirmpassword;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var unationality = document.registration.nationality;
    var uemail = document.registration.email;
    var terms = document.registration.tc;

    if(allLetter(uname))
    {
        if(checkDate(date))
        {
         if(checkEmail(uemail))
            {
                if(validatePassword(passid,7,12))
                {
                    if(validateconfirmpassword(confirmpassword,7,12))
                    {
                            if(validateAddress(uadd))
                            {
                                if(countryselect(ucountry))
                                {
                                    if(nationalityselect(unationality))
                                    {
                                        if(checkterms(terms))
                                            {
                                            }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    return false;
}

function allLetter(uname)
{
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must have alphabet characters only');
        return false;
    }
}
function isDate(txtDate, separator) {
    var aoDate,           // needed for creating array and object
        ms,               // date in milliseconds
        month, day, year; // (integer) month, day and year
    // if separator is not defined then set '/'
    if (separator === undefined) {
        separator = '/';
    }
    // split input date to month, day and year
    aoDate = txtDate.split(separator);
    // array length should be exactly 3 (no more no less)
    if (aoDate.length !== 3) {
        return false;
    }
    // define month, day and year from array (expected format is m/d/yyyy)
    // subtraction will cast variables to integer implicitly
    month = aoDate[0] - 1; // because months in JS start from 0
    day = aoDate[1] - 0;
    year = aoDate[2] - 0;
    // test year range
    if (year < 1000 || year > 3000) {
        return false;
    }
    // convert input date to milliseconds
    ms = (new Date(year, month, day)).getTime();
    // initialize Date() object from milliseconds (reuse aoDate variable)
    aoDate = new Date();
    aoDate.setTime(ms);
    // compare input date and parts from Date() object
    // if difference exists then input date is not valid
    if (aoDate.getFullYear() !== year ||
        aoDate.getMonth() !== month ||
        aoDate.getDate() !== day) {
        return false;
    }
    // date is OK, return true
    return true;
}
function checkDate(date){
    // check date and print message
    //if (isDate(date)) {
      //  return true;
    //}

    if (date) {
       return true;
    }

    else {
        return false;
    }
}
function checkEmail(uemail) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(uemail.value)) {
        alert('Please provide a valid email address');
        uemail.focus();
        return false;
    } else {
        return true;

    }

}

function validatePassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;

    } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
        error = "The password is the wrong length. \n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if ( (fld.value.search(/[a-zA-Z]+/)==-1) || (fld.value.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else {
        fld.style.background = 'White';
    }
    return true;
}
function validateconfirmpassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a confirmpassword.\n";
        alert(error);
        return false;

    } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
        error = "The confirmpassword is the wrong length. \n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if (illegalChars.test(fld.value)) {
        error = "The confirmpassword contains illegal characters.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if ( (fld.value.search(/[a-zA-Z]+/)==-1) || (fld.value.search(/[0-9]+/)==-1) ) {
        error = "The confirmpassword must contain at least one numeral.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else {
        fld.style.background = 'White';
    }
    return true;
}

function validateAddress(uadd)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function countryselect(ucountry)
{
    if(ucountry.value == "Default")
    {
        alert('Select your country from the list');
        return false;
    }
    else
    {
        return true;
    }
}

function nationalityselect(unationality)
{
    if(unationality.value == "Default")
    {
        alert('Select your Nationality from the list');
        return false;
    }
    else
    {
        return true;
    }
}

function checkterms(terms)
{
    x=0;

    if(terms.checked)
        {
            x++;
        }
    if(x==0)
    {
        alert('Select Terms');
        return false;
    }
    else
    {
        alert('Form Successfully Submitted');
        window.location.reload()
        return true;}
}