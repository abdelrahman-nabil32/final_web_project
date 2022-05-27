document.addEventListener("DOMContentLoaded", function () {
    const loginform = document.querySelector("#login");
    const createaccountform = document.querySelector("#createaccount");

    document.querySelector("#welcome_login").addEventListener("click", e => {
        loginform.classList.remove("form-hidden");
        createaccountform.classList.add("form-hidden");
    })
    document.querySelector("#welcome_signup").addEventListener("click", e => {
        loginform.classList.add("form-hidden");
        createaccountform.classList.remove("form-hidden");
    })
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.add("form-hidden");
        createaccountform.classList.remove("form-hidden");
    })
    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.remove("form-hidden");
        createaccountform.classList.add("form-hidden");
    });
    /*            Strat coding erorrs for sign up           */
    document.querySelector(".button_for_signup").addEventListener("click", e => {
        let first_name = document.querySelector(".first_name").value;
        let last_name = document.querySelector(".last_name").value;
        let email = document.querySelector(".email_address").value;
        let gender = document.querySelector("#select_tag_gender").value;
        let phone = document.querySelector(".phone_number").value;
        let address = document.querySelector(".address_addresss").value;
        let password = document.querySelector(".password").value;
        let confirm_password = document.querySelector(".confirm_password").value;
        let first_name_sending = true;
        let last_name_sending = true;
        let email_sending = true;
        let phone_sending = true;
        let address_sending = true;
        let gender_sending = true;
        let password_sending = true;
        let confirm_password_sending = true;
        /*      first name */
        if (first_name.length === 0) {
            document.querySelector(".error_first_name_requirement").classList.remove("form-hidden");
            first_name_sending = false;
        } else {
            document.querySelector(".error_first_name_requirement").classList.add("form-hidden");
            first_name_sending = true;
        }
        /*      first name */
        /*      last  name */
        if (last_name.length === 0) {
            document.querySelector(".error_last_name_requirement").classList.remove("form-hidden");
            last_name_sending = false;
        } else {
            document.querySelector(".error_last_name_requirement").classList.add("form-hidden");
            last_name_sending = true;
        }
        /*      last  name */
        /*      email address     */
        if (email.length === 0) {
            document.querySelector(".error_email_address_requirement").classList.remove("form-hidden");
            email_sending = false;
        } else {
            document.querySelector(".error_email_address_requirement").classList.add("form-hidden");
            email_sending = true;
            let pattern = /\w+_\w+\d{4}@feng.bu.edu.eg/;
            if (pattern.test(email)) {
                document.querySelector(".error_email_address_pattern").classList.add("form-hidden");
                email_sending = true;
            } else {
                document.querySelector(".error_email_address_pattern").classList.remove("form-hidden");
                email_sending = false;
            }
        }
        /*      email address     */

        /*         address        */
        if (address.length === 0) {
            document.querySelector(".error_address_requirement").classList.remove("form-hidden");
            address_sending = false;
        } else {
            document.querySelector(".error_address_requirement").classList.add("form-hidden");
            address_sending = true;
        }
        /*         address        */


        /*     phone check        */
        if (phone.length === 0) {
            document.querySelector(".error_phone_number_requirement").classList.remove("form-hidden");
            phone_sending = false;
        } else {
            document.querySelector(".error_phone_number_requirement").classList.add("form-hidden");
            phone_sending = true;
            if (phone.length != 11) {
                document.querySelector(".error_phone_number").classList.remove("form-hidden");
                phone_sending = false;
            } else if (phone.length == 11) {
                document.querySelector(".error_phone_number").classList.add("form-hidden");
                phone_sending = true;
            }
        }
        /*     phone check        */

        /*      password check    */
        if (password.length === 0) {
            document.querySelector(".error_password_requirement").classList.remove("form-hidden");
            password_sending = false;
        } else {
            document.querySelector(".error_password_requirement").classList.add("form-hidden");
            password_sending = true;
            /*      uppercase         */
            let array_of_password = password.split("");
            if (((password.charCodeAt(0)) >= 97) && ((password.charCodeAt(0)) <= 122)) {
                document.querySelector(".error_password_uppercase").classList.remove("form-hidden");
                password_sending = false;
            } else if (((password.charCodeAt(0)) >= 65) && ((password.charCodeAt(0)) <= 90)) {
                document.querySelector(".error_password_uppercase").classList.add("form-hidden");
                password_sending = true;
            } else {
                document.querySelector(".error_password_uppercase").classList.remove("form-hidden");
                password_sending = false;
            }
            /*      uppercase         */
            /*      special charactes */
            for (let i = 0; i < password.length; ++i) {
                if ((((password.charCodeAt(i)) >= 33) && ((password.charCodeAt(i)) <= 47)) || ((password.charCodeAt(i)) == 95)) {
                    document.querySelector(".error_password_specialLetters").classList.add("form-hidden");
                    password_sending = true;
                    break;
                } else {
                    document.querySelector(".error_password_specialLetters").classList.remove("form-hidden");
                    password_sending = false;
                }
            }
            /*      special charactes */
            /*           spaces       */
            for (let i_spaces = 0; i_spaces < password.length; ++i_spaces) {
                if ((password.charCodeAt(i_spaces)) == 32) {
                    document.querySelector(".error_password_spaces").classList.remove("form-hidden");
                    password_sending = false;
                    break;
                } else {
                    document.querySelector(".error_password_spaces").classList.add("form-hidden");
                    password_sending = true;
                }
            }
            /*           spaces       */
            /*      one digit at least     */
            for (let i_oneDigit = 0; i_oneDigit < password.length; ++i_oneDigit) {
                if ((((password.charCodeAt(i_oneDigit)) >= 48) && ((password.charCodeAt(i_oneDigit)) <= 57))) {
                    document.querySelector(".error_password_oneDigitAtLeast").classList.add("form-hidden");
                    password_sending = true;
                    break;
                } else {
                    document.querySelector(".error_password_oneDigitAtLeast").classList.remove("form-hidden");
                    password_sending = false;
                }
            }
            /*      one digit at least     */
            /*      include only eight characters     */
            let counter_of_char = 0;
            for (let i_fiveChar = 0; i_fiveChar < password.length; ++i_fiveChar) {
                if ((((password.charCodeAt(i_fiveChar)) >= 97) && ((password.charCodeAt(i_fiveChar)) <= 122)) || (((password.charCodeAt(i_fiveChar)) >= 65) && ((password.charCodeAt(i_fiveChar)) <= 90))) {
                    (counter_of_char)++;
                }
                if (counter_of_char == 8) {
                    document.querySelector(".error_password_numberOfCharacters").classList.add("form-hidden");
                    password_sending = true;
                } else if (counter_of_char == 9) {
                    document.querySelector(".error_password_numberOfCharacters").classList.remove("form-hidden");
                    password_sending = false;
                    break;
                } else {
                    document.querySelector(".error_password_numberOfCharacters").classList.remove("form-hidden");
                    password_sending = false;
                }
            }
            /*      include only eight characters     */
        }
        /*      password check    */
        /*      match checking    */
        if (confirm_password.length === 0) {
            document.querySelector(".error_confirm_password_requirement").classList.remove("form-hidden");
            confirm_password_sending = false;
        } else {
            document.querySelector(".error_confirm_password_requirement").classList.add("form-hidden");
            confirm_password_sending = true;
            if ((confirm_password.length) === (password.length)) {
                document.querySelector(".error_password_matching").classList.add("form-hidden");
                confirm_password_sending = true;
            } else {
                document.querySelector(".error_password_matching").classList.remove("form-hidden");
                confirm_password_sending = false;
            }
        }
        /*      match checking    */
        /*        gender selection validation      */
        if (gender === "") {
            document.querySelector(".error_gender_requirement").classList.remove("form-hidden");
            gender_sending = false;
        } else {
            document.querySelector(".error_gender_requirement").classList.add("form-hidden");
            gender_sending = true;
        }
        /*        gender selection validation      */
        if ((first_name_sending === false) || (last_name_sending === false) || (email_sending === false) || (address_sending === false) || (password_sending === false) || (confirm_password_sending === false) || (gender_sending === false) || (phone_sending === false)) {
            e.preventDefault();
        }
    })
    /*            end   coding erorrs for sign up             */
    /*            start coding errors for log in              */
    document.querySelector(".button_for_login").addEventListener("click", e => {
        let email = document.querySelector(".email_forfor_login").value;
        let password = document.querySelector(".password_forfor_login").value;
        let email_sending = true;
        let password_sending = true;
        /*                Start email validation            */
        if (email.length === 0) {
            document.querySelector(".error_email_login_requirementss").classList.remove("form-hidden");
            email_sending = false;
        } else {
            document.querySelector(".error_email_login_requirementss").classList.add("form-hidden");
            email_sending = true;
            let pattern = /\w+_\w+\d{4}@feng.bu.edu.eg/;
            if (pattern.test(email)) {
                document.querySelector(".error_email_login_pattern").classList.add("form-hidden");
                email_sending = true;
            } else {
                document.querySelector(".error_email_login_pattern").classList.remove("form-hidden");
                email_sending = false;
            }
        }
        /*                END   email validation            */
        /*                Start password validation            */
        if (password.length === 0) {
            document.querySelector(".error_password_requirement_login").classList.remove("form-hidden");
            password_sending = false;
        } else {
            document.querySelector(".error_password_requirement_login").classList.add("form-hidden");
            password_sending = true;
            /*      uppercase         */
            let array_of_password = password.split("");
            if (((password.charCodeAt(0)) >= 97) && ((password.charCodeAt(0)) <= 122)) {
                document.querySelector(".error_password_uppercase_login").classList.remove("form-hidden");
                password_sending = false;
            } else if (((password.charCodeAt(0)) >= 65) && ((password.charCodeAt(0)) <= 90)) {
                document.querySelector(".error_password_uppercase_login").classList.add("form-hidden");
                password_sending = true;
            } else {
                document.querySelector(".error_password_uppercase_login").classList.remove("form-hidden");
                password_sending = false;
            }
            /*      uppercase         */
            /*      special charactes */
            for (let i = 0; i < password.length; ++i) {
                if ((((password.charCodeAt(i)) >= 33) && ((password.charCodeAt(i)) <= 47)) || ((password.charCodeAt(i)) == 95)) {
                    document.querySelector(".error_password_specialLetters_login").classList.add("form-hidden");
                    password_sending = true;
                    break;
                } else {
                    document.querySelector(".error_password_specialLetters_login").classList.remove("form-hidden");
                    password_sending = false;
                }
            }
            /*      special charactes */
            /*           spaces       */
            for (let i_spaces = 0; i_spaces < password.length; ++i_spaces) {
                if ((password.charCodeAt(i_spaces)) == 32) {
                    document.querySelector(".error_password_spaces_login").classList.remove("form-hidden");
                    password_sending = false;
                    break;
                } else {
                    document.querySelector(".error_password_spaces_login").classList.add("form-hidden");
                    password_sending = true;
                }
            }
            /*           spaces       */
            /*      one digit at least     */
            for (let i_oneDigit = 0; i_oneDigit < password.length; ++i_oneDigit) {
                if ((((password.charCodeAt(i_oneDigit)) >= 48) && ((password.charCodeAt(i_oneDigit)) <= 57))) {
                    document.querySelector(".error_password_oneDigitAtLeast_login").classList.add("form-hidden");
                    password_sending = true;
                    break;
                } else {
                    document.querySelector(".error_password_oneDigitAtLeast_login").classList.remove("form-hidden");
                    password_sending = false;
                }
            }
            /*      one digit at least     */
            /*      include only eight characters     */
            let counter_of_char = 0;
            for (let i_fiveChar = 0; i_fiveChar < password.length; ++i_fiveChar) {
                if ((((password.charCodeAt(i_fiveChar)) >= 97) && ((password.charCodeAt(i_fiveChar)) <= 122)) || (((password.charCodeAt(i_fiveChar)) >= 65) && ((password.charCodeAt(i_fiveChar)) <= 90))) {
                    (counter_of_char)++;
                }
                if (counter_of_char == 8) {
                    document.querySelector(".error_password_numberOfCharacters_login").classList.add("form-hidden");
                    password_sending = true;
                } else if (counter_of_char == 9) {
                    document.querySelector(".error_password_numberOfCharacters_login").classList.remove("form-hidden");
                    password_sending = false;
                    break;
                } else {
                    document.querySelector(".error_password_numberOfCharacters_login").classList.remove("form-hidden");
                    password_sending = false;
                }
            }
            /*      include only eight characters     */
        }
        /*                END   password validation            */


        if ((email_sending === false) || (password_sending === false)) {
            e.preventDefault();
        }
    })
    /*            END   coding errors for log in              */
});


























