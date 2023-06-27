interface IUser {
    id?: number;
    name: string;
    email: string;
    password: string;
    birthDate: Date;
    active: boolean;
}

export default IUser;