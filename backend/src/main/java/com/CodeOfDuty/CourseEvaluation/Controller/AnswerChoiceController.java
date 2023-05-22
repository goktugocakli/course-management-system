package com.CodeOfDuty.CourseEvaluation.Controller;


import com.CodeOfDuty.CourseEvaluation.Service.AnswerChoiceManager;
import com.CodeOfDuty.CourseEvaluation.model.AnswerChoice;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("v1/answerchoice")
public class AnswerChoiceController {

    private final AnswerChoiceManager answerChoiceManager;

    public AnswerChoiceController(AnswerChoiceManager answerChoiceManager) {
        this.answerChoiceManager = answerChoiceManager;
    }

    @GetMapping()
    public ResponseEntity<List<AnswerChoice>> getAllAnswerChoice(){
        return ResponseEntity.ok(answerChoiceManager.getAllAnswerChoice());
    }


}
