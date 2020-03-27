export const logout = () =>  {
    userService.logout();
    return { type: 'LOGOUT' };
}