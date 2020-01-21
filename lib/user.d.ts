declare class User {
    id: number;
    current_tenant_id: number;
    email: string;
    name: string;
    confirmed: boolean;
    set(params: object): User;
}
export default User;
