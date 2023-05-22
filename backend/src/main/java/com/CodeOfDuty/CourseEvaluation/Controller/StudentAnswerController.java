package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.StudentAnswerManager;
import com.CodeOfDuty.CourseEvaluation.model.StudentAnswer;
import com.CodeOfDuty.CourseEvaluation.model.StudentAnswerKey;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/answer")
public class StudentAnswerController {

    private final StudentAnswerManager studentAnswerManager;


    public StudentAnswerController(StudentAnswerManager studentAnswerManager) {
        this.studentAnswerManager = studentAnswerManager;
    }


    @RequestMapping("/add")
    public ResponseEntity<StudentAnswer> selectAnswer(@RequestBody StudentAnswerKey answerRequest){
        StudentAnswer answer = studentAnswerManager.selectAnswer(
                                            answerRequest.getStudentNo(),
                                            answerRequest.getSurveyId(),
                                            answerRequest.getQuestionId(),
                                            answerRequest.getAnswerId());
        return ResponseEntity.ok(answer);
    }
}
