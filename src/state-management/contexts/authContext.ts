import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";

interface AuthContextType {
    user: string;
    authDispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext