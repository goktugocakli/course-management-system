package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

public interface ISurveyDao extends JpaRepository<Survey, Integer> {

    Optional<Survey> findByCourseAndCreatedBy(Course course, Instructor instructor);

    List<Survey> findByCourse(Course course);
    @Query(value = "SELECT COUNT(a.student) FROM Survey s INNER JOIN StudentAnswer a ON s.id = a.survey.id WHERE s.id = :surveyId GROUP BY a.survey.id ")
    Long countStudentsBySurvey(@Param("surveyId") Integer surveyid);


    @Query("SELECT  sa.question.id as questionId ,sa.answer.id as answerId, COUNT(sa.answer) as count FROM Survey s INNER JOIN StudentAnswer sa ON s.id=sa.survey.id WHERE s.id = :surveyId GROUP BY sa.question.id, sa.answer.id ")
    List<Object[]> countAnswerBySurvey(@Param("surveyId") Integer surveyId);


}
