package com.CodeOfDuty.CourseEvaluation.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table
public class StudentAnswer {

    @EmbeddedId
    private StudentAnswerKey id;

    @ManyToOne
    @MapsId("student_no")
    @JoinColumn(name = "student")
    private Student student;


    @ManyToOne
    @MapsId("id")
    @JoinColumn(name="survey")
    private Survey survey;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name = "question")
    private Question question;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name="answer")
    private AnswerChoice answer;

}

