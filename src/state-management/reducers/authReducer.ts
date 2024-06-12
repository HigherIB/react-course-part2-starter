interface loginAction {
    type: 'LOGIN',
    username: string,
}

interface logoutAction {
    type: 'LOGOUT'
}

type AuthAction = loginAction | logoutAction;

const authReducer = (state: string, action: AuthAction): string => {
    if (action.type === 'LOGIN') return action.username;
    if (action.type === 'LOGOUT') return '';
    return state;
}

export default authReducer