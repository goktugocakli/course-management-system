import { CreateEvaluationForm } from "../../components";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { user } from "../../features/user";

import {
  AnswerEvaluation,
  FetchQuestionAddedByInstructor,
  GetStudentAnswers,
  GetSurveyWithId,
  ShowToast,
  UploadEvaluationForm,
  UploadEvaluationFormQuestions,
} from "../../constants/api";

const AddAutomaticQuestion = function (
  questionAndAnswerJson,
  questions,
  setQuestions
) {
  if (questions.columns.length >= questionAndAnswerJson.answers.length) {
    let ans = [];
    for (let i = 0; i < questions.columns.length; i++) {
      if (
        questionAndAnswerJson.answers[i]?.answerText.length >
        questions.columns[i].width
      ) {
        questions.columns[i].width =
          questionAndAnswerJson.answers[i]?.answerText.length;
      }
      ans.push({
        ...column,
        id: i,
        selected: false,
        answerOwnId: questionAndAnswerJson.answers[i].id,
        // title is content of the answer
        title:
          questionAndAnswerJson.answers[i] === undefined
            ? ""
            : questionAndAnswerJson.answers[i].answerText,
      });
    }

    let newQ = {
      width: questions.width,
      columns: questions.columns,
      items: questions.items.concat([
        {
          id: questions.items.length,
          question: questionAndAnswerJson.text,
          column: ans,
          modified: false,
          questionOwnId: questionAndAnswerJson.id,
        },
      ]),
    };

    return newQ;
  } else {
    //TODO: add new columns to all questions based on the length of the answers of that paticular question

    let diff = questionAndAnswerJson.answers.length - questions.columns.length;
    let items = questions.items.map((item) => {
      for (let i = 0; i < diff; i++) {
        item.column.push({
          //answers
          ...column,
          id: item.column.length,
        });
      }
      return item;
    });

    let columns = questions.columns;

    for (let i = 0; i < diff; i++) {
      columns = columns.concat([
        {
          ...column,
          title: "Column",
          id: columns.length,
        },
      ]);
    }

    let newQ = {
      width: questions.width + input_grow * diff,
      columns: columns,
      items: items,
    };

    let ans = [];
    for (let i = 0; i < newQ.columns.length; i++) {
      if (
        questionAndAnswerJson.answers[i]?.answerText.length >
        newQ.columns[i].width
      ) {
        newQ.columns[i].width =
          questionAndAnswerJson.answers[i]?.answerText.length;
      }
      ans.push({
        ...column,
        id: i,
        selected: false,
        answerOwnId: questionAndAnswerJson.answers[i].id,
        // title is content of the answer
        title:
          questionAndAnswerJson.answers[i] === undefined
            ? ""
            : questionAndAnswerJson.answers[i].answerText,
      });
    }

    newQ = {
      width: newQ.width,
      columns: newQ.columns,
      items: questions.items.concat([
        {
          id: questions.items.length,
          question: questionAndAnswerJson.text,
          column: ans,
          modified: false,

          questionOwnId: questionAndAnswerJson.id,
        },
      ]),
    };

    return newQ;
  }
};

const AddAnswer = function (questionId, answerId, questions, setQuestions) {
  return (
    <CreateEvaluationForm.EvaluationAnswer
      background={
        questions.items.at(questionId).column.at(answerId).selected
          ? "green"
          : "var(--bg-color)"
      }
      style={{
        width: questions.columns[answerId].width + "ch",
        background: questions.items.at(questionId).column.at(answerId).selected
          ? "green"
          : "var(--bg-color)",
      }}
      value={questions.items.at(questionId).column.at(answerId).title}
      key={answerId}
      readOnly={true}
      onClick={() => {
        let columns = questions.items.at(questionId).column.map((ans) => {
          ans.selected = false;
          return { ...ans };
        });

        columns.at(answerId).selected = true;

        questions.items.at(questionId).column = columns;

        let newQ = {
          width: questions.width,
          columns: questions.columns,
          items: questions.items,
        };

        setQuestions(newQ);
      }}
    ></CreateEvaluationForm.EvaluationAnswer>
  );
};

const AddQuestion = function (id, questions, setQuestions) {
  //question is a json obj

  return (
    <CreateEvaluationForm.EvaluationItem key={id}>
      <CreateEvaluationForm.EvaluationQuestionContainer>
        <CreateEvaluationForm.EvaluationQuestion
          value={questions.items.at(id).question}
          readOnly={true}
        ></CreateEvaluationForm.EvaluationQuestion>
      </CreateEvaluationForm.EvaluationQuestionContainer>
      <CreateEvaluationForm.EvaluationAsnwerContainer>
        {questions.items.at(id).column.map((answer) => {
          return AddAnswer(id, answer.id, questions, setQuestions);
        })}
      </CreateEvaluationForm.EvaluationAsnwerContainer>
    </CreateEvaluationForm.EvaluationItem>
  );
};

/* 

questions = {
  width: 1300 (in px),

  columns : [
    {
      id: 0,
      title: "A",
      width: "100%",
      max_width:"200%",
      min_width: "50%"
    },

  ],

  items : 
    [
    {
        id: 0,
        question: "asdas",
        modified: true,
        questionOwnId: "id from backend"
        column: [
            {
                id: 0,
                title: "asdas",
                width: "100%",
                max_width: "200%",
                min_width: "50%",
                
            },
        
            {
                id: 1,
                title: "asdas",
                width: "100%",
                max_width: "200%",
                min_width: "50%",
                
            },
        ],
    },
]
  
}

*/

// This is a template of the data structure
// it is similar to a constructor
// when creating a new column we use this template
// if I want to change the style of this template it will change all of the data

const column = {
  id: 0,
  title: "",
  width: 20,
  max_width: "",
  min_width: "",
};

const input_grow = 140; // this is a ridiculus thing to have
//TODO: change this stupid thing in the future

var data;

/*

content of course

courses = [
  {
    code:"asdas",
    year: 2023,
    semester: "Spring",
    "name": "asdas",
    credit: 0
  }
]

*/

// content of data

/*


data = {
  [
    {
      id: 0,
      text: "Question text"
      addedBy: {"user_name": "ins"},
      answers: [
        {id: 0,
        "answerText": "text of answer"},
        {
          id: 1,
          "answerText" : "asdasda",
        }
      ],
      studentAnswers: [],
    }
  ]
}

*/

export default function AnswerEvaluationContainer({ surveyId }) {
  //to be able to get the relevant data only once when page loaded we need to use this mechanic
  // using useEffect inside api makes things a lot easier but for this paticular case
  // useEffect inside api runs every time this component state changes and that makes a lot of requests to backend

  const [questions, setQuestions] = useState({
    width: 600, // TODO: because of the input_grow thing this doenst make sense
    columns: [],
    items: [],
  });

  const userState = useSelector(user).user;
  useEffect(() => {
    const options = {
      onSuccess: (response) => {
        const survey = response.data;

        let qq = questions;

        survey.questions.map((q) => {
          qq = AddAutomaticQuestion(q, qq, setQuestions);
        });

        const op2 = {
          onSuccess: (response) => {
            response.map((res) => {
              qq.items.map((ques) => {
                if (res.id.questionId === ques.questionOwnId) {
                  ques.column.map((col) => {
                    if (col.answerOwnId === res.id.answerId) {
                      col.selected = true;
                    }
                  });
                }
              });
            });

            setQuestions(qq);
          },
          onError: (err) => {},
        };
        GetStudentAnswers(surveyId, userState.data.student_no, op2);
      },
      onError: (err) => {},
    };

    GetSurveyWithId(surveyId, options);
  }, []);

  /*
userState = {
  userType: asdasda,
  data: (user datas)
}
*/

  const [exitingQExpanded, setExistingExpanded] = useState(false);

  return (
    <CreateEvaluationForm
      style={{ paddingTop: "5rem" }}
      onContextMenu={(e) => {
        //e.preventDefault();
      }}
    >
      <CreateEvaluationForm.EvaluationItem>
        <CreateEvaluationForm.EvaluationQuestionContainer>
          <CreateEvaluationForm.EvaluationQuestion
            readOnly={true}
            value={"Question"}
            style={{ textAlign: "center" }}
          />
        </CreateEvaluationForm.EvaluationQuestionContainer>
        {
          //TODO: create input for header and onchage will change the column's title
          questions.columns.map((col) => {
            return (
              <CreateEvaluationForm.EvaluationColumn
                style={{ width: col.width + "ch" }}
                key={col.id}
                value={col.title}
                readOnly={true}
                onContextMenu={() => {
                  //TODO:: add functionality to delete
                }}
              ></CreateEvaluationForm.EvaluationColumn>
            );
          })
        }
      </CreateEvaluationForm.EvaluationItem>
      {questions.items.map((question) => {
        return AddQuestion(question.id, questions, setQuestions);
      })}

      <CreateEvaluationForm.FloatingContainer>
        <CreateEvaluationForm.UploadButton
          onClick={() => {
            // addanswer to database

            let error = false;
            const options = {
              onSuccess: (response) => {
                error = false;
              },
              onError: (err) => {
                error = true;
                ShowToast("There was an error", { success: false });
              },
            };

            questions.items.map((ques) => {
              ques.column.map((ans) => {
                if (ans.selected) {
                  const data = {
                    studentNo: userState.data.student_no,
                    surveyId: surveyId,
                    questionId: ques.questionOwnId,
                    answerId: ans.answerOwnId,
                  };
                  AnswerEvaluation(data, options);
                }
              });
            });

            if (!error) {
              ShowToast("Answers submitted successfully", { success: true });
            }
          }}
        >
          Submit
        </CreateEvaluationForm.UploadButton>
      </CreateEvaluationForm.FloatingContainer>
    </CreateEvaluationForm>
  );
}
