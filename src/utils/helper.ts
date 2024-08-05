import bcrypt from 'bcryptjs';

/**
 * Hashes a password using bcrypt.
 * @param password - The plain text password to hash.
 * @returns The hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	return hashedPassword;
};

/**
 * Compares a plain text password with a hashed password.
 * @param password - The plain text password to compare.
 * @param hashedPassword - The hashed password to compare against.
 * @returns True if the passwords match, false otherwise.
 */
export const verifyPassword = async (
	password: string,
	hashedPassword: string,
): Promise<boolean> => {
	const isMatch = await bcrypt.compare(password, hashedPassword);
	return isMatch;
};

/**
 * Generate unique id using timestamp and random string.
 * @returns return unique id.
 */
export const generateUniqueId = (): string => {
	const timestamp = Date.now().toString(36);
	const randomString = Math.random().toString(36).substr(2, 9);
	return `${timestamp}-${randomString}`;
};
