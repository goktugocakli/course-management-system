package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.ISurveyDao;
import com.CodeOfDuty.CourseEvaluation.DTO.SurveyAnswerDTO;
import com.CodeOfDuty.CourseEvaluation.DTO.SurveyDTO;
import com.CodeOfDuty.CourseEvaluation.DTO.SurveyQuestionDTO;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Question;
import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class SurveyManager {

    private final ISurveyDao surveyRepository;
    private final QuestionManager questionManager;
    private final InstructorService instructorService;
    private final CourseService courseService;

    private final StudentService studentService;


    public SurveyManager(ISurveyDao surveyRepository, QuestionManager questionManager, InstructorService instructorService, CourseService courseService, StudentService studentService) {
        this.surveyRepository = surveyRepository;
        this.questionManager = questionManager;
        this.instructorService = instructorService;
        this.courseService = courseService;
        this.studentService = studentService;
    }

    public Survey createSurvey(String description, LocalDateTime dueDate, String username,
                               String course_code, String semester, int year,
                               List<Integer> questionsId ){
        Instructor instructor = instructorService.findById(username);
        Course course = courseService.findById(course_code,semester,year);

        List<Question> questionList = new ArrayList<>();
        for (Integer id: questionsId){
            Question question=questionManager.findById(id);
            questionList.add(question);
            }
        Survey survey = Survey.builder()
                .description(description)
                .createdBy(instructor)
                .dueDate(dueDate)
                .course(course)
                .questions(questionList)
                .submitDate(LocalDateTime.now())
                .build();

        return surveyRepository.save(survey);
    }

    public Survey addNewQuestion(Integer surveyId, Integer questionId){
        Survey survey = findById(surveyId);
        Question question = questionManager.findById(questionId);
        survey.getQuestions().add(question);
        return surveyRepository.save(survey);
    }

    public Survey extractQuestion(Integer surveyId, Integer questionId){
        Survey survey = findById(surveyId);
        Question question = questionManager.findById(questionId);
        survey.getQuestions().remove(question);
        return surveyRepository.save(survey);
    }

    public List<Survey> getAllSurveys(){
        return surveyRepository.findAll();
    }

    public Survey findById(Integer id){return surveyRepository.findById(id).orElse(null);}


    public List<Survey> findByCourse(String course_code, String semester, Integer year){
        Course course = courseService.findById(course_code,semester,year);
        return surveyRepository.findByCourse(course);
    }
    public Survey findByCourseAndInstructor(String course_code, String semester, Integer year, String instructor_username){
        Course course = courseService.findById(course_code,semester,year);
        Instructor instructor = instructorService.findById(instructor_username);
        return surveyRepository.findByCourseAndCreatedBy(course,instructor).orElse(null);
    }


    public Map<String, Long> countStudentsBySurvey(Integer surveyId){
        Map<String,Long> answer = new HashMap<>();
        Long total_student= (long) findById(surveyId).getCourse().getStudent().size();
        Long result = surveyRepository.countStudentsBySurvey(surveyId);
        answer.put("Derse Kayıtlı Öğrenci Sayısı",total_student);
        answer.put("Cevap Veren Öğreci Sayısı", result);
        return answer;
    }

    public SurveyDTO countAnswerBySurvey(Integer surveyId){
        Survey survey = findById(surveyId);

        List<Object[]> studentAnswers = surveyRepository.countAnswerBySurvey(surveyId);

        List<SurveyQuestionDTO> surveyQuestionDTOS = survey.getQuestions().stream()
                .map(question -> new SurveyQuestionDTO(question.getId(),
                        question.getText(),
                        question.getAnswers().stream()
                                .map(answerChoice -> new SurveyAnswerDTO(answerChoice.getId(),
                                        answerChoice.getAnswerText(),
                                        0L))
                                .collect(Collectors.toList())
                ))
                .toList();


        studentAnswers
                .forEach(studentAnswer -> {
                    Optional<SurveyQuestionDTO> foundItem = surveyQuestionDTOS.stream()
                            .filter(surveyQuestionDTO -> surveyQuestionDTO.getQuestionId().equals(studentAnswer[0]))
                            .findFirst();
                    foundItem.ifPresent( found -> {
                        Optional<SurveyAnswerDTO> foundAnswer = found.getAnswers().stream()
                                .filter(surveyAnswerDTO -> surveyAnswerDTO.getAnswerId().equals(studentAnswer[1]))
                                .findFirst();
                        foundAnswer.ifPresent( found2 -> {
                            found2.setCount((Long) studentAnswer[2]);
                        }
                        );
                    });
                });

        SurveyDTO surveyDTO = SurveyDTO.builder()
                .id(surveyId)
                .description(survey.getDescription())
                .questions(surveyQuestionDTOS)
                .build();

        return surveyDTO;

    }

    public List<Survey> findAllByStudent(String studentNo){
        List<Survey> surveys = studentService.findById(studentNo)
                .getCourses()
                .stream()
                .map(course -> findByCourse(course.getCode(),course.getSemester(),course.getYear()))
                .flatMap(Collection::stream)
                .collect(Collectors.toList());
        return surveys;
    }

    public void deleteSurveyById(Integer id){
        Survey survey=findById(id);
        surveyRepository.delete(survey);
    }



}
