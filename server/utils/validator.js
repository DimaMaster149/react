const RegularExpressions =
    {
        usernameRegex: new RegExp("^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$"),
        emailRegex: new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"),
    };

class Validator
{

    static validateUsername(username)
    {
        return RegularExpressions.usernameRegex.test(username);
    }

    static validateEmail(email)
    {
        return RegularExpressions.usernameRegex.test(email);
    }

}

export default Validator;