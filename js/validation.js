// jQuery.noConflict();
jQuery(document).ready(function(){
    jQuery('#usercheck').hide();
    jQuery('#passcheck').hide();
    jQuery('#cpasscheck').hide();
    jQuery('#chkbox').hide();
    var user_err=true;
    var pass_err=true;
    var cpass_err=true;
    var check_err=true;

    jQuery("#username").keyup(function(){
        //define function here 
        username_check();
    });
    jQuery("#password").keyup(function(){
        //define function here 
        pass_check();
    });
    jQuery("#cpassword").keyup(function(){
        //define function here 
        cpass_check();
    });
    jQuery("#checkid").keypress(function(){
        //define function here 
        checkbox_check();
    });

    function username_check(){
        //value getting realtime when user starting to enter his name
        var user_val=jQuery('#username').val();
        // alert(user_val)
        if(user_val.length=='')
        {
            jQuery('#usercheck').show();
            jQuery('#usercheck').html("**please fill in the username");
            jQuery('#usercheck').focus();
            jQuery('#usercheck').css("color","red");
            user_err=false;
            return false;
        }else{
            jQuery('#usercheck').hide();
        }
        if((user_val.length<=2) & (user_val.length<=25))
        {
            jQuery('#usercheck').show();
            jQuery('#usercheck').html("**username should be length between 3 to 25 characters");
            jQuery('#usercheck').focus();
            jQuery('#usercheck').css("color","orange");
            user_err=false;
            return false;
        }else{
            jQuery('#usercheck').hide();
        }
        // var user_val=("#username").val();
        // var user_val=("#username").val();
    }
    function pass_check(){
        //value getting realtime when user starting to enter his name
        var pass_val=jQuery('#password').val();
        // alert(user_val)
        if(pass_val.length=='')
        {
            jQuery('#passcheck').show();
            jQuery('#passcheck').html("**please fill in the password");
            jQuery('#passcheck').focus();
            jQuery('#passcheck').css("color","red");
            pass_val=false;
            return false;
        }else{
            jQuery('#passcheck').hide();
        }
        if(pass_val.length<=6)
        {
            jQuery('#passcheck').show();
            jQuery('#passcheck').html("**password should be more than 6 characters");
            jQuery('#passcheck').focus();
            jQuery('#passcheck').css("color","orange");
            pass_val=false;
            return false;
        }else{
            jQuery('#passcheck').hide();
        }
        // var user_val=("#username").val();
        // var user_val=("#username").val();
    }
    function cpass_check(){
        //value getting realtime when user starting to enter his name
        var cpass_val=jQuery('#cpassword').val();
        // alert(user_val)
        if(cpass_val.length=='')
        {
            jQuery('#cpasscheck').show();
            jQuery('#cpasscheck').html("**please fill in the confirm password");
            jQuery('#cpasscheck').focus();
            jQuery('#cpasscheck').css("color","red");
            cpass_val=false;
            return false;
        }else{
            jQuery('#cpasscheck').hide();
        }
        if(cpass_val.length<=6)
        {
            jQuery('#cpasscheck').show();
            jQuery('#cpasscheck').html("**confirm password should be more than 6 characters");
            jQuery('#cpasscheck').focus();
            jQuery('#cpasscheck').css("color","orange");
            cpass_val=false;
            return false;
        }else{
            jQuery('#cpasscheck').hide();
        }
        var pass = jQuery('#password').val();
        var cpass = jQuery('#cpassword').val();
        if(pass!=cpass){
            jQuery('#cpasscheck').show();
            jQuery('#cpasscheck').html("** password and confirm password not matching");
            jQuery('#cpasscheck').focus();
            jQuery('#cpasscheck').css("color","orange");
            cpass_val=false;
            return false;
        }
    }
    function checkbox_check(){
        //value getting realtime when user starting to enter his name
        var check_val=jQuery('#checkid').val();
        // alert(user_val)
        if(check_val.length=='')
        {
            jQuery('#chkbox').show();
            jQuery('#chkbox').html("**please select I Agree box");
            jQuery('#chkbox').focus();
            jQuery('#chkbox').css("color","red");
            check_val=false;
            return false;
        }else{
            jQuery('#chkbox').hide();
        }
    }

    $('#btn-submit').click(function(){
        user_err=true;
        pass_err=true;
        cpass_err=true;
        check_val=true;
        username_check();
        pass_check();
        cpass_check();
        checkbox_check();
        if ((user_err==true)&&(pass_err==true)&&(cpass_err==true)&&(check_err==true)){
            console.log('"form submitted"');
            // jQuery('#btn-submit').html("form submitted");
            // jQuery('#cpasscheck').focus();
            // jQuery('#cpasscheck').css("color","green");
            return true;
        }
        else{
            console.log("form submitted");
            // jQuery('#btn-submit').html("form not submitted enter valid details first");
            // jQuery('#cpasscheck').focus();
            // jQuery('#cpasscheck').css("color","red");
            return false;
        }
    });
});