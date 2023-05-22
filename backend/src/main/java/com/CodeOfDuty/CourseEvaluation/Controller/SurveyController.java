package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.DTO.SurveyRequest;
import com.CodeOfDuty.CourseEvaluation.Service.SurveyManager;
import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/survey")
public class SurveyController {

    private final SurveyManager surveyManager;

    public SurveyController(SurveyManager surveyManager) {
        this.surveyManager = surveyManager;
    }


    @GetMapping()
    public ResponseEntity<List<Survey>> getAllSurvey(){
        return ResponseEntity.ok(surveyManager.getAllSurveys());
    }

    @PostMapping("/add")
    public ResponseEntity<Survey> createSurvey(@RequestBody SurveyRequest surveyRequest){
        Survey survey = surveyManager.createSurvey(
                surveyRequest.getDescription(),
                surveyRequest.getDueDate(),
                surveyRequest.getUsername(),
                surveyRequest.getCourse_code(),
                surveyRequest.getSemester(),
                surveyRequest.getYear(),
                surveyRequest.getQuestionsId()
        );

        return ResponseEntity.ok(survey);
    }
}
