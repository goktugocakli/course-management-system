package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.DTO.QuestionCreateRequest;
import com.CodeOfDuty.CourseEvaluation.Service.QuestionManager;
import com.CodeOfDuty.CourseEvaluation.model.AnswerChoice;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Question;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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


    @GetMapping("/instructor/{username}")
    public ResponseEntity<List<Question>> gelAllQuestionAddedBy(@PathVariable String username){
        return ResponseEntity.ok(questionManager.findAllAddedBy(username));
    }

    @GetMapping("/{questionId}")
    public ResponseEntity<Question> getById(@PathVariable String questionId){
        return ResponseEntity.ok(questionManager.findById(Integer.valueOf(questionId)));
    }

    @PostMapping("/add")
    public ResponseEntity<Question> add(@RequestBody QuestionCreateRequest questionRequest){
        String questionText = questionRequest.getText();
        String instructor=questionRequest.getAddedBy();
        List<AnswerChoice> answerChoices = questionRequest.getAnswers();
        Question question = questionManager.createQuestion(questionText,instructor,answerChoices);
        return ResponseEntity.ok(question);
    }

    @PostMapping("/addFromList")
    public ResponseEntity<List<Integer>> addFromList(@RequestBody List<QuestionCreateRequest> questionCreateRequestList){
        List<Integer> questionIdList=new ArrayList<>();
        for(QuestionCreateRequest questionRequest: questionCreateRequestList){
            String questionText = questionRequest.getText();
            String instructor=questionRequest.getAddedBy();
            List<AnswerChoice> answerChoices = questionRequest.getAnswers();
            Question question = questionManager.createQuestion(questionText,instructor,answerChoices);
            questionIdList.add(question.getId());
        }
        return ResponseEntity.ok(questionIdList);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id){
        questionManager.deleteQuestion(id);
        return ResponseEntity.ok("Soru başarı ile silindi");
    }
}
