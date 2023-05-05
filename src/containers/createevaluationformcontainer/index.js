import { CreateEvaluationForm } from "../../components";
import { useState } from "react";

const AddAnswer = function (questionId, answerId, questions, setQuestions) {

  return (
    <CreateEvaluationForm.EvaluationAnswer
      value={questions.items.at(questionId).column.at(answerId).title}
      key={answerId}
      onChange={(e) => {
        var a = questions.items.at(questionId).column.at(answerId);
        a.title = e.target.value;
        questions.items[questionId].column[answerId] = a;
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
  width: "",
  max_width: "",
  min_width: "",
};

const input_grow = 140; // this is a ridiculus thing to have
//TODO: change this stupid thing in the future

export default function CreateEvaluationFormContainer() {
  const [questions, setQuestions] = useState({
    width: 600, // TODO: because of the input_grow thing this doenst make sense
    columns: [],
    items: [],
  });

  return (
    <CreateEvaluationForm>
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
    </CreateEvaluationForm>
  );
}
