package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ISurveyDao extends JpaRepository<Survey, Integer> {
}
