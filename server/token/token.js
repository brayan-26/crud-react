import Jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' });

export const generetaToken = async (user) => {
    try {
        const token = Jwt.sign(user, process.env.SECRET, { expiresIn: '10m' });
        return token;
    } catch (error) {
        console.log(error)
    }
}
