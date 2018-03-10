const validate =
    {
        success: "success",
        warning: "warning",
        error: "error",
        null: null
    };

const RegularExpressions =
    {
        usernameRegex: new RegExp("^[A-zA-яё]+(?: [A-zA-яё]+)?$"),
        emailRegex: new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"),
        passwordRegex: new RegExp("(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$"),
    };

class Validator
{
    static validateUsername(username)
    {
        if (RegularExpressions.usernameRegex.test(username))
        {
            return validate.success;
        }
        else
        {
            return validate.error;
        }
    }

    static validateEmail(email)
    {
        if (RegularExpressions.emailRegex.test(email))
        {
            return validate.success;
        }
        else
        {
            return validate.error;
        }
    }

    static validatePassword(password)
    {
        if (RegularExpressions.passwordRegex.test(password))
        {
            return validate.success;
        }
        else
        {
            return validate.error;
        }
    }

    static validateConfirmation(password, repeat)
    {
        if (RegularExpressions.passwordRegex.test(password) && (password === repeat))
        {
            return validate.success;
        }
        else
        {
            return validate.error;
        }
    }

}

export default Validator;