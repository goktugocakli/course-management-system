package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.ISurveyDao;
import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurveyManager {

    private final ISurveyDao surveyRepository;

    public SurveyManager(ISurveyDao surveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    public Survey createSurvey(Survey survey){
        return surveyRepository.save(survey);
    }
}
