class User {
  id: number;
  current_tenant_id: number;
  email: string;
  name: string;
  confirmed: boolean;

  set(params: object): User{
    for (let key in params) {
      this[key] = params[key];
    }
    return this;
  }
}

export default User;