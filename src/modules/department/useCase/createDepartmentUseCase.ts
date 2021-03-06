import { inject, injectable } from 'tsyringe';
import Department from '../entities/Department';
import DepartmentRepository from '../repositories/DepartmentRepository';

type CreateDepartmentParams = {
    title: string;
};

@injectable()
class CreateDepartmentUseCase {
    constructor(
        @inject('DepartmentRepository')
        private departmentRepository: DepartmentRepository
    ) {}
    async execute({ title }: CreateDepartmentParams): Promise<Department> {
        const department = await this.departmentRepository.createDepartment({
            title
        });

        return department;
    }
}
export default CreateDepartmentUseCase;
