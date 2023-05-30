package com.CodeOfDuty.CourseEvaluation.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SurveyDTO {

    private Integer id;
    private String description;
    private List<SurveyQuestionDTO> questions = new ArrayList<>();

    public void addSurveyQuestionDTO(SurveyQuestionDTO surveyQuestionDTO){
        questions.add(surveyQuestionDTO);
    }


}
