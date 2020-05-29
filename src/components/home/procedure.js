import React from "react";

const procedures = [
  { id: 1, text: "문의/요청", color: "var(--topaz-two)" },
  { id: 2, text: "요청 분석", color: "var(--topaz-two)" },
  { id: 3, text: "승인대기중", color: "var(--topaz-two)" },
  { id: 4, text: "개발자 배정", color: "var(--french-blue)" },
  { id: 5, text: "진행중", color: "var(--french-blue)" },
  { id: 6, text: "개발완료", color: "var(--french-blue)" },
  {
    id: 7,
    text: "고객 검수",
    color: "var(--french-blue)",
  },
  { id: 8, text: "개발종료", color: "var(--vibrant-green)" },
];

const Procedure = () => {
  return (
    <div className="container-procedure">
      <p className="text-procedure mb-3">
        앱닥터 문의 시 아래와 같은 프로세스로 진행됩니다.
      </p>
      <div className=" d-flex justify-content-around align-items-center procedure-bar">
        {procedures.map((procedure) => (
          <div className="procedure-item" key={`procedure-${procedure.id}`}>
            <div
              className="symbol-procedure m-auto"
              style={{ backgroundColor: procedure.color }}
            />
            <p className="text-center text-procedure">{procedure.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Procedure;
