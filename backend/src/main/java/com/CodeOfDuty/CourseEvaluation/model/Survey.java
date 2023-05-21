package com.CodeOfDuty.CourseEvaluation.model;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String description;

    @Temporal(TemporalType.TIMESTAMP)
    private Date submitDate;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dueDate;

    @ManyToOne
    @JoinColumn(name = "createdBy")
    private Instructor createdBy;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name="course_code", referencedColumnName = "code"),
            @JoinColumn(name = "semester", referencedColumnName = "semester"),
            @JoinColumn(name = "year", referencedColumnName = "year")
    })
    private Course course;

    @ManyToMany
    @JoinTable(name = "survey_question",
            joinColumns = @JoinColumn(name = "surveyId"),
            inverseJoinColumns = @JoinColumn(name = "question")
    )
    private List<Question> questions;


}
