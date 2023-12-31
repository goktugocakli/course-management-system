import { CreateEvaluationForm } from "../../components";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { user } from "../../features/user";

import {
  FetchQuestionAddedByInstructor,
  ShowToast,
  UploadEvaluationForm,
  UploadEvaluationFormQuestions,
} from "../../constants/api";
import { fetchUser } from "../../features/user";

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

export default function CreateEvaluationFormContainer() {
  //to be able to get the relevant data only once when page loaded we need to use this mechanic
  // using useEffect inside api makes things a lot easier but for this paticular case
  // useEffect inside api runs every time this component state changes and that makes a lot of requests to backend

  const userState = useSelector(user).user;

  const dispatch = useDispatch();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    FetchQuestionAddedByInstructor(userState.data.user_name, options);
    setCourses(userState.data.courses);
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

  const [dropDown, setDropDown] = useState({
    expanded: false,
    content: "courses",
    course: null, // this course is selected course
  });

  return (
    <CreateEvaluationForm
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
                onChange={(e) => {
                  var c = questions.columns.at(col.id);
                  c.title = e.target.value;
                  questions.columns[col.id] = c;

                  var newQ = {
                    ...questions,
                    columns: questions.columns,
                  };

                  setQuestions(newQ);
                }}
                onContextMenu={() => {
                  //TODO:: add functionality to delete
                }}
              ></CreateEvaluationForm.EvaluationColumn>
            );
          })
        }

        <CreateEvaluationForm.EvaluationAddAnswer
          onClick={() => {
            //TODO: add new column and add every question that new column => DONE

            // adding newly added columns to all items => DONE
            var items = questions.items.map((item) => {
              item.column.push({
                //answers
                ...column,
                id: item.column.length,
              });
              return item;
            });

            var newQ = {
              width: questions.width + input_grow,

              columns: questions.columns.concat([
                {
                  //adding new column to our data
                  ...column,
                  title: "Column",
                  id: questions.columns.length,
                },
              ]),

              items: items,
            };

            setQuestions(newQ);
          }}
        ></CreateEvaluationForm.EvaluationAddAnswer>
      </CreateEvaluationForm.EvaluationItem>
      {questions.items.map((question) => {
        return AddQuestion(question.id, questions, setQuestions);
      })}
      <CreateEvaluationForm.EvaluationItem
        style={{ width: `${questions.width}px` }}
      >
        <CreateEvaluationForm.EvaluationQuestionContainer>
          <CreateEvaluationForm.EvaluationQuestion
            placeholder={"Add Question..."}
            onBlur={(event) => {
              if (event.target.value !== "") {
                var val = event.target.value;
                event.target.value = "";
                var ans = [];
                for (var i = 0; i < questions.columns.length; i++) {
                  ans.push({
                    ...column,
                    id: i,
                  });
                }

                var newQ = {
                  width: questions.width,
                  columns: questions.columns,
                  items: questions.items.concat([
                    {
                      id: questions.items.length,
                      question: val,
                      column: ans,
                      modified: true,
                      questionOwnId: 0,
                    },
                  ]),
                };

                setQuestions(newQ);
              }
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                //val is event.target.value

                var val = event.target.value;

                if (val !== "") {
                  event.target.value = "";
                  var ans = [];
                  for (var i = 0; i < questions.columns.length; i++) {
                    ans.push({
                      ...column,
                      id: i,
                    });
                  }

                  var newQ = {
                    width: questions.width,
                    columns: questions.columns,
                    items: questions.items.concat([
                      {
                        id: questions.items.length,
                        question: val,
                        column: ans,
                        modified: true,
                        questionOwnId: 0,
                      },
                    ]),
                  };

                  setQuestions(newQ);
                }
              }
            }}
          />
        </CreateEvaluationForm.EvaluationQuestionContainer>
      </CreateEvaluationForm.EvaluationItem>

      <CreateEvaluationForm.FloatingContainer>
        <CreateEvaluationForm.DropDownCourse
          onClick={() => {
            setDropDown({ ...dropDown, expanded: !dropDown.expanded });
            setExistingExpanded(false);
          }}
        >
          {dropDown.content}
        </CreateEvaluationForm.DropDownCourse>

        <CreateEvaluationForm.DropDownContainer
          style={{ display: dropDown.expanded ? "flex" : "none" }}
        >
          {
            //TODO:: render courses and add onclick to them to set the course
          }
          {courses?.map((c) => {
            return (
              <p
                key={c.code}
                onClick={() => {
                  setDropDown({
                    ...dropDown,
                    expanded: false,
                    course: c,
                  });
                }}
              >
                {c.code}
              </p>
            );
          })}
        </CreateEvaluationForm.DropDownContainer>

        <CreateEvaluationForm.UploadButton
          onClick={async () => {
            let course = {
              course_code: dropDown.course?.code,
              year: dropDown.course?.year,
              semester: dropDown.course?.semester,
            };

            const op = {
              onSuccess: (response) => {
                ShowToast("The Evaluation form uploaded sucessfully", {
                  success: true,
                });

                dispatch(
                  fetchUser({
                    username: userState.data.user_name,
                    password: userState.data.password,
                  })
                );
              },
              onError: (err) => {
                ShowToast("There is an error", { success: false });
              },
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
                due_date,
                op
              );
            } else {
              ShowToast("Please select a course", { success: false });
            }
          }}
        >
          Upload
        </CreateEvaluationForm.UploadButton>

        <CreateEvaluationForm.AddExistingQuestion
          onClick={() => {
            setExistingExpanded(!exitingQExpanded);
            setDropDown({ ...dropDown, expanded: false });
          }}
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
