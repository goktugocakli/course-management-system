package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.StudentAnswerManager;
import com.CodeOfDuty.CourseEvaluation.model.StudentAnswer;
import com.CodeOfDuty.CourseEvaluation.model.StudentAnswerKey;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/{surveyId}/{studentNo}")
    public ResponseEntity<List<StudentAnswer>> findStudentAnswerBySurveyAndStudent(@PathVariable String surveyId, @PathVariable String studentNo){
        List<StudentAnswer> answers=studentAnswerManager.findStudentAnswerBySurveyAndStudent(Integer.valueOf(surveyId), studentNo);
        return ResponseEntity.ok(answers);
    }

    @GetMapping("/{studentNo}/{surveyId}/{questionId}") 
    public ResponseEntity<StudentAnswer> findStudentAndSurveyAndQuestion(@PathVariable String studentNo, @PathVariable String surveyId, @PathVariable String questionId){
        StudentAnswer answer = studentAnswerManager.findByStudentAndSurveyAndQuestion(studentNo, Integer.valueOf(surveyId), Integer.valueOf(questionId));
        return ResponseEntity.ok(answer);
    }
}
