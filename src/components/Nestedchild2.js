import { useState } from "react";

export const CallingFn = () => {
  const nestedobj = [
    {
      id: 1,
      pid: null,
      children: [
        {
          id: 2,
          pid: 1,
          children: [
            { id: 4, pid: 2 },
            { id: 6, pid: 2 },
          ],
        },
        {
          id: 3,
          pid: 1,
          children: [{ id: 5, pid: 3 }],
        },
      ],
    },
  ];

  return <Nestedchild2 data={nestedobj}></Nestedchild2>;
};

export default function Nestedchild2({ data, refreturnChild }) {
  const items = data;
  const [child, showChild] = useState(false);
  const [childpid, showChildpid] = useState([]);
  const [buttonclicked, setbuttonclicked] = useState([]);

  function returnChild(item) {
    setbuttonclicked((prevState) => {
      console.log(prevState);
      if (prevState.includes(item.id)) {
        showChild(!child);
        return prevState;
      } else {
        showChild(true);
        return [...prevState, item.id];
      }
    });

    showChildpid(item.id);
  }

  return (
    <>
      {items?.map((item) => {
        return (
          <>
            <div>
              <button
                key={item.id}
                id={item.id}
                onClick={() => refreturnChild(item)}
              >
                id--{item?.id} pid--{item?.pid}
              </button>
            </div>

            {child && childpid === item.id && (
              <Nestedchild2
                key={item.id}
                data={item?.children}
                refreturnChild={returnChild}
              ></Nestedchild2>
            )}
          </>
        );
      })}
    </>
  );
}
