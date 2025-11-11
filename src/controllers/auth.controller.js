export const signup = async (req, res, next) => {
    try {
        // Simulate user creation logic
    } catch (error) {
        logger.error('Error in signup controller:', error);

        if(error.message === 'User with this email already exists') {
            return res.status(409).json({ error: 'Email already exist' });
        }

        next(error);
    }
}