package com.CodeOfDuty.CourseEvaluation.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SurveyQuestionDTO {

    private Integer questionId;
    private String questionText;
    private List<SurveyAnswerDTO> answers = new ArrayList<>();

    public void addAnswer(SurveyAnswerDTO surveyAnswerDTO){
        answers.add(surveyAnswerDTO);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SurveyQuestionDTO that = (SurveyQuestionDTO) o;
        return Objects.equals(questionText, that.questionText);
    }

    @Override
    public int hashCode() {
        return Objects.hash(questionId);
    }
}
