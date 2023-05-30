package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.DTO.SurveyDTO;
import com.CodeOfDuty.CourseEvaluation.DTO.SurveyRequest;
import com.CodeOfDuty.CourseEvaluation.Service.SurveyManager;
import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/survey")
public class SurveyController {

    private final SurveyManager surveyManager;

    public SurveyController(SurveyManager surveyManager) {
        this.surveyManager = surveyManager;
    }


    @GetMapping()
    public ResponseEntity<List<Survey>> getAllSurvey(){
        return ResponseEntity.ok(surveyManager.getAllSurveys());
    }

    @PostMapping("/add")
    public ResponseEntity<Survey> createSurvey(@RequestBody SurveyRequest surveyRequest){
        Survey survey = surveyManager.createSurvey(
                surveyRequest.getDescription(),
                surveyRequest.getDueDate(),
                surveyRequest.getUsername(),
                surveyRequest.getCourse_code(),
                surveyRequest.getSemester(),
                surveyRequest.getYear(),
                surveyRequest.getQuestionsId()
        );

        return ResponseEntity.ok(survey);
    }

    @DeleteMapping("/delete/{surveyId}")
    public ResponseEntity<String> deleteSurveyById(@PathVariable String surveyId){
        surveyManager.deleteSurveyById(Integer.valueOf(surveyId));
        return ResponseEntity.ok("Anket Silindi.");
    }

    @GetMapping("/{surveyId}")
    public ResponseEntity<Survey> findById(@PathVariable String surveyId){
        return ResponseEntity.ok(surveyManager.findById(Integer.valueOf(surveyId)));
    }

    @GetMapping("/countStudent{surveyId}")
    public ResponseEntity<Map<String,Long>> countStudentBySurvey(@PathVariable String surveyId){
        return ResponseEntity.ok(surveyManager.countStudentsBySurvey(Integer.valueOf(surveyId)));

    }


    @GetMapping("/countAnswers/{surveyId}")
    public ResponseEntity<SurveyDTO> countAnswersBySurvey(@PathVariable String surveyId){
        return ResponseEntity.ok(surveyManager.countAnswerBySurvey(Integer.valueOf(surveyId)));
    }

    @GetMapping("/findByCourseAndInstructor")
    public ResponseEntity<Survey> findByCourseAndInstructor(@RequestParam(value = "course_code") String course_code,
                                               @RequestParam(value = "semester") String semester,
                                               @RequestParam(value = "year") Integer year,
                                               @RequestParam(value = "instructor_username") String instructor_username){
        Survey survey = surveyManager.findByCourseAndInstructor(
                course_code,
                semester,
                year,
                instructor_username
        );
        return ResponseEntity.ok(survey);
    }

    @GetMapping("/findAllByStudent/{studentNo}")
    public ResponseEntity<List<Survey>> findAllByStudent(@PathVariable String studentNo){
        List<Survey> surveys=surveyManager.findAllByStudent(studentNo);
        return ResponseEntity.ok(surveys);
    }

}
