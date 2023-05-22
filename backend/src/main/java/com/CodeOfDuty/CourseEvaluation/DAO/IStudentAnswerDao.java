package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Student;
import com.CodeOfDuty.CourseEvaluation.model.StudentAnswer;
import com.CodeOfDuty.CourseEvaluation.model.StudentAnswerKey;
import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IStudentAnswerDao extends JpaRepository<StudentAnswer, StudentAnswerKey> {

    StudentAnswer findStudentAnswerBySurveyAndStudent(Survey survey, Student student);

}
