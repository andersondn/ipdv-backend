class User  {
    id: number;

    name: string;

    email: string;

    password?: string;

    role: 'ADMIN'| 'MANAGER'|'EMPLOYEE';

    department_id: number;

    department_title: string;

    created_at: Date;

    updated_at: Date;

}

export default User;
