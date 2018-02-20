import Role from "../models/roles";
import User from "../models/users";

import Hasher from '../../utils/hasher';

export default
{
    getWithAccessInfoById(id)
    {
        return new Promise( (resolve, reject) =>
        {
            User.findOne({_id: id}).populate("role")
                .then( (result) =>
                {
                    return resolve(result);
                })
                .catch( (error) =>
                {
                    reject(error);
                });
        });
    },

    getByLogin(email)
    {
        return new Promise ( (resolve, reject) =>
        {
            User.findOne({email: email}).populate("role")
                .then( (result) =>
                {
                    return resolve(result);
                })
                .catch( (error) =>
                {
                    reject(error);
                })
        });
    },

    createUser(userData)
    {
        return new Promise( (resolve, reject) =>
        {
            try
            {
                const commonUser = "user";

                const getHashAndRole =
                    [
                        Hasher.hashPasswordAsync(userData.password),
                        Role.findOne({name: commonUser})
                    ];

                Promise.all(getHashAndRole)
                    .then( (result) => {
                        const passwordHash = result[0];
                        const userRoleID = result[1]._id;

                        const user = new User(
                            {
                                _id: new mongoose.Types.ObjectId(),
                                firstName: userData.firstName,
                                lastName: userData.lastName,
                                email: userData.email,
                                password: passwordHash,
                                photo: "/images/default-profile.png",
                                frozen: false,
                                role: userRoleID,
                                created: Date.now(),
                                lastSignIn: Date.now()
                            });

                        user.save()
                            .then( (result) =>
                            {
                                return resolve(result);
                            })
                            .catch( (error) =>
                            {
                                console.log(error);
                                reject (error);
                            })
                    })
                    .catch( (error) =>
                    {
                        console.log(error);
                        reject (error);
                    })
            }
            catch(error)
            {
                return reject(error);
            }
        });
    }
}