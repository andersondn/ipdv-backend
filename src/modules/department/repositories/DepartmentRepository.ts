import Department from "../entities/Department";

interface DepartmentRepository {
    createDepartment(department: Omit<Department, 'id' | 'created_at' | 'updated_at'>): Promise<Department>;
    listDepartments(): Promise<Department[]>;
    getDepartmentById(id: number): Promise<Department>;
    updateDepartment(departmentId: number, department: Pick<Department, 'title' >): Promise<boolean>;
    deleteDepartment(departmentId: number): Promise<boolean>;
}

export default DepartmentRepository;
