package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface IStudentAnswerDao extends JpaRepository<StudentAnswer, StudentAnswerKey> {

    List<StudentAnswer> findAllBySurveyAndStudent(Survey survey, Student student);

    Optional<StudentAnswer> findByStudentAndSurveyAndQuestion(Student student, Survey survey, Question question);
}
