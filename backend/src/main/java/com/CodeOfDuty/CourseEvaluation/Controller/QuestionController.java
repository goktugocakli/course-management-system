package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.QuestionManager;
import com.CodeOfDuty.CourseEvaluation.model.AnswerChoice;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Question;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/question")
public class QuestionController {

    private final QuestionManager questionManager;

    public QuestionController(QuestionManager questionManager) {
        this.questionManager = questionManager;
    }

    @GetMapping
    public ResponseEntity<List<Question>> getAllQuestion(){
        return ResponseEntity.ok(questionManager.getAllQuestions());
    }

    @GetMapping("/{questionId}")
    public ResponseEntity<Optional<Question>> getById(@PathVariable String questionId){
        return ResponseEntity.ok(questionManager.findById(Integer.valueOf(questionId)));
    }

    @PostMapping("/add")
    public ResponseEntity<Question> add(@RequestBody Question questionRequest){
        String questionText = questionRequest.getText();
        Instructor instructor=questionRequest.getAddedBy();
        List<AnswerChoice> answerChoices = questionRequest.getAnswers();
        Question question = questionManager.createQuestion(questionText,instructor,answerChoices);
        return ResponseEntity.ok(question);
    }
}
