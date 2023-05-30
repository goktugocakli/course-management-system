import { CreateEvaluationForm } from "../../components";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { user } from "../../features/user";

import {
  FetchQuestionAddedByInstructor,
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

    setQuestions(newQ);
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

    setQuestions(newQ);
  }
};

const AddAnswer = function (questionId, answerId, questions, setQuestions) {
  return (
    <CreateEvaluationForm.EvaluationAnswer
      style={{ width: questions.columns[answerId].width + "ch" }}
      value={questions.items.at(questionId).column.at(answerId).title}
      key={answerId}
      readOnly={true}
      onChange={(e) => {
        var widthofValue = e.target.value.length;

        if (widthofValue > questions.columns[answerId].width) {
          questions.columns[answerId].width = widthofValue;
        }

        var a = questions.items.at(questionId).column.at(answerId);
        a.title = e.target.value;
        questions.items[questionId].column[answerId] = a;
        questions.items[questionId].modified = true;

        var newQ = {
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
          onChange={(e) => {
            var q = questions.items.at(id);
            q.question = e.target.value;
            q.modified = true;
            questions.items[id] = q;

            var newQ = {
              width: questions.width,
              columns: questions.columns,
              items: questions.items,
            };

            setQuestions(newQ);
          }}
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

var courses;
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

const options = {
  onSuccess: (response) => {
    data = { data: response.data, success: true };
  },

  onError: (err) => {
    data = { data: err.message, success: false };
  },
};

const options2 = {
  onSuccess: (response) => {
    courses = { data: response.data, success: true };
  },
  onError: (err) => {
    courses = { data: err.message, success: false };
  },
};
export default function AnswerEvaluationContainer({ surveyId }) {
  //to be able to get the relevant data only once when page loaded we need to use this mechanic
  // using useEffect inside api makes things a lot easier but for this paticular case
  // useEffect inside api runs every time this component state changes and that makes a lot of requests to backend

  const [surver, setSurvey] = useState(null);
  const userState = useSelector(user).user;
  useEffect(() => {
    setSurvey();

  }, []);

  /*
userState = {
  userType: asdasda,
  data: (user datas)
}
*/

  const [questions, setQuestions] = useState({
    width: 600, // TODO: because of the input_grow thing this doenst make sense
    columns: [],
    items: [],
  });

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
        /*onClick={async () => {
            let course = {
              course_code: dropDown.course?.code,
              year: dropDown.course?.year,
              semester: dropDown.course?.semester,
            };

            let due_date = "2023-06-15 23:59:59";

            //TODO: get todays date and add 7 days to it

            ////////////////////////////////////////////// Here is a little bit complicated
            if (dropDown.course !== null) {
              let res = await Promise.all(
                //TODOO: very important here understand this
                UploadEvaluationFormQuestions(
                  questions,
                  userState.data.user_name
                )
              );

              UploadEvaluationForm(
                res,
                userState.data.user_name,
                course,
                due_date
              );
            }
          }}*/
        >
          Upload
        </CreateEvaluationForm.UploadButton>

        <CreateEvaluationForm.AddExistingQuestion
        /* onClick={() => {
            setExistingExpanded(!exitingQExpanded);
            setDropDown({ ...dropDown, expanded: false });
          }}*/
        >
          Add Existing Question
          <CreateEvaluationForm.ExistingQuestionContainer
            style={{ display: exitingQExpanded ? "flex" : "none" }}
          >
            {data?.data.map((ques) => {
              return (
                <p
                  key={ques.id}
                  onClick={() => {
                    AddAutomaticQuestion(
                      /* {
                      id: 100,
                      text: "asdasda",
                      answers: [
                        {
                          id: 0,
                          answerText: "adasd0",
                        },
                        {
                          id: 1,
                          answerText: "adasd1",
                        },
                        {
                          id: 2,
                          answerText: "adasd2",
                        },
                      ],
                    },*/
                      ques,
                      questions,
                      setQuestions
                    );

                    setExistingExpanded(false);
                  }}
                >
                  {ques.text}
                </p>
              );
            })}
          </CreateEvaluationForm.ExistingQuestionContainer>
        </CreateEvaluationForm.AddExistingQuestion>
      </CreateEvaluationForm.FloatingContainer>
    </CreateEvaluationForm>
  );
}
