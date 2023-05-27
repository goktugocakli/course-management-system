package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

public interface ISurveyDao extends JpaRepository<Survey, Integer> {

    Optional<Survey> findByCourseAndCreatedBy(Course course, Instructor instructor);

    @Query(value = "SELECT COUNT(a.student) FROM Survey s INNER JOIN StudentAnswer a ON s.id = a.survey.id WHERE s.id = :surveyId GROUP BY a.survey.id ")
    Long countStudentsBySurvey(@Param("surveyId") Integer surveyid);

    @Query("SELECT sa.question.text, sa.answer.answerText, COUNT(sa.answer) FROM Survey s INNER JOIN StudentAnswer sa ON s.id=sa.survey.id WHERE s.id = :surveyId GROUP BY sa.question.id, sa.answer.id ")
    List<Object[]> countAnswerBySurvey(@Param("surveyId") Integer surveyId);

    @Query("SELECT s.description, sa.answer.answerText FROM Survey s LEFT OUTER JOIN StudentAnswer sa ON s.id = sa.survey.id WHERE s.id = :surveyId GROUP BY sa.question.id, sa.answer.id")
    List<Object[]> deneme(@Param("surveyId") Integer surveyId);

    @Query("SELECT sq.id, sq.text,sqa.id,sqa.answerText, ac.id, ac.answer.answerText, sa.answer.answerText FROM Survey s INNER JOIN s.questions sq INNER JOIN sq.answers sqa LEFt JOIN sq.studentAnswers ac LEFT JOIN StudentAnswer sa ON sq.id = sa.question.id AND ac.answer.id = sqa.id AND s.id = sa.survey.id WHERE s.id = :surveyId")
    List<Object[]> deneme2(@Param("surveyId") Integer surveyId);


}
