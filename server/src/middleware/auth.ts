import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';


interface CustomRequest extends Request {
  user?: JwtPayload;
}

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction): Response | void => {
  const authHeader: string | undefined = req.header('Authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. Invalid authorization format.' });
  }
  const token: string = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const secretKey: string | undefined = process.env.JWT_SECRET_KEY;
    console.warn(secretKey);
    if (!secretKey) {
      return res.status(500).json({ message: 'Server error. Secret key not configured.' });
    }

    req.user = jwt.verify(token, secretKey) as JwtPayload;

    next();
  } catch (error) {
      console.error('JWT Error:', error);
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: 'Access denied. Token has expired.' });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({ message: 'Access denied. Invalid token.' });
    }
    res.status(500).json({ message: 'An unexpected error occurred.' });
  }
};