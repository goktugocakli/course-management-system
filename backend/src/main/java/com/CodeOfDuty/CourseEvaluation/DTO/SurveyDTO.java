package com.CodeOfDuty.CourseEvaluation.DTO;

import lombok.Data;

import java.util.List;

@Data
public class SurveyDTO {
    private String description;
    private List<SurveyQuestionDTO> questions;

    public void addSurveyQuestionDTO(SurveyQuestionDTO surveyQuestionDTO){
        questions.add(surveyQuestionDTO);
    }


}
