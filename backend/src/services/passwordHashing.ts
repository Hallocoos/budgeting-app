import bcrypt from 'bcrypt';
const saltRounds = process.env.SALTROUNDS;

export async function hash(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}