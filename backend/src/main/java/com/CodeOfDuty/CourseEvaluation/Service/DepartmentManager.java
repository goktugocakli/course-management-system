package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.IDepartmentDao;
import com.CodeOfDuty.CourseEvaluation.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentManager implements IDepartmentService{

    private IDepartmentDao departmentDao;

    @Autowired
    public DepartmentManager(IDepartmentDao departmentDao) {
        this.departmentDao = departmentDao;
    }

    @Override
    public List<Department> getAll() {
        return departmentDao.getAll();
    }

    @Override
    public void add(Department department) {
        departmentDao.add(department);
    }

    @Override
    public void update(Department department) {
        departmentDao.update(department);
    }

    public void update2(String dept_name, String manager){departmentDao.update2(dept_name, manager);}

    @Override
    public void delete(Department department) {
        departmentDao.delete(department);
    }

    @Override
    public Department getByDepartmentName(String dept_name) {
        return departmentDao.getByDepartmentName(dept_name);
    }
}
