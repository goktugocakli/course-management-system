package com.CodeOfDuty.CourseEvaluation.model;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String text;

    @ManyToOne
    @JoinColumn(name = "addedBy")
    private Instructor addedBy;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<AnswerChoice> answers;

    @ManyToMany(mappedBy = "questions")
    private List<Survey> surveys;

    public void addAnswer(AnswerChoice answer){
        answers.add(answer);
    }


}
