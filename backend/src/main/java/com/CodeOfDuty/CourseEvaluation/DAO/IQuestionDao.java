package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IQuestionDao extends JpaRepository<Question, Integer> {

    List<Question> findAllByAddedBy(Instructor username);


}
