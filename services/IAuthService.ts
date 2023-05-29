type UserLogin = {
    username: string,
    password: string,
    confirmPassword: string
}

type UserSignup = {
    username: string,
    password: string
}

export default interface IAuthService {
    signup({ username, password }: UserSignup): Promise<string>,
    login({ username, password, confirmPassword }: UserLogin): Promise<string>
}