package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.ICourseDao;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseManager implements ICourseService{

    private ICourseDao courseDao;

    @Autowired
    public CourseManager(ICourseDao courseDao) {
        this.courseDao = courseDao;
    }

    @Override
    public Course add(Course course) {
        return courseDao.add(course);
    }

    @Override
    public void update(Course course) {
        courseDao.update(course);
    }

    @Override
    public void delete(Course course) {
        courseDao.delete(course);
    }

    @Override
    public Course getByCourse(String course_id, String semester, int year) {
        return courseDao.getByCourse(course_id,semester,year);
    }

    @Override
    public List<Course> getAll() {
        return courseDao.getAll();
    }
}
