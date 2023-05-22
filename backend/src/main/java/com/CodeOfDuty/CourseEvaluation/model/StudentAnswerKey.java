package com.CodeOfDuty.CourseEvaluation.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentAnswerKey implements Serializable {

    @Column(name = "student")
    private String studentNo;
    @Column(name = "survey")
    private Integer surveyId;

    @Column(name = "question")
    private Integer questionId;

    @Column(name = "answer")
    private Integer answerId;

}
